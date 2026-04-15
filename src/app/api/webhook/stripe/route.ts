import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabaseAdmin } from '@/lib/supabase'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
})

const PRICE_TO_TIER: Record<string, string> = {
  [process.env.NEXT_PUBLIC_STRIPE_PRICE_T1 || '']: 'tier1',
  [process.env.NEXT_PUBLIC_STRIPE_PRICE_T2 || '']: 'tier2',
  [process.env.NEXT_PUBLIC_STRIPE_PRICE_T3 || '']: 'tier3',
}

const TIER_LIMITS: Record<string, number> = {
  tier1: 10,
  tier2: 20,
  tier3: -1,
}

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (err) {
    console.error('[Webhook] Signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  try {
    switch (event.type) {

      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const userId = session.metadata?.user_id
        const tier = session.metadata?.tier || 'tier1'
        const customerId = session.customer as string
        const subscriptionId = session.subscription as string

        if (!userId) break

        // Get subscription details
        const stripeSub = await stripe.subscriptions.retrieve(subscriptionId)
        const priceId = stripeSub.items.data[0]?.price.id

        await supabaseAdmin.from('subscriptions').upsert({
          user_id: userId,
          tier,
          status: 'active',
          stripe_customer_id: customerId,
          stripe_subscription_id: subscriptionId,
          stripe_price_id: priceId,
          reports_limit: TIER_LIMITS[tier] || 10,
          current_period_start: new Date(stripeSub.current_period_start * 1000).toISOString(),
          current_period_end: new Date(stripeSub.current_period_end * 1000).toISOString(),
        }, { onConflict: 'user_id' })

        console.log(`[Webhook] Upgraded user ${userId} to ${tier}`)
        break
      }

      case 'customer.subscription.updated': {
        const sub = event.data.object as Stripe.Subscription
        const userId = sub.metadata?.user_id
        if (!userId) break

        const priceId = sub.items.data[0]?.price.id
        const tier = PRICE_TO_TIER[priceId] || 'tier1'
        const status = sub.status === 'active' ? 'active'
          : sub.status === 'trialing' ? 'trialing'
          : sub.status === 'past_due' ? 'past_due'
          : sub.status === 'canceled' ? 'canceled' : 'active'

        await supabaseAdmin.from('subscriptions').update({
          tier,
          status,
          stripe_price_id: priceId,
          reports_limit: TIER_LIMITS[tier] || 10,
          current_period_start: new Date(sub.current_period_start * 1000).toISOString(),
          current_period_end: new Date(sub.current_period_end * 1000).toISOString(),
          cancel_at_period_end: sub.cancel_at_period_end,
        }).eq('user_id', userId)

        break
      }

      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription
        const userId = sub.metadata?.user_id
        if (!userId) break

        await supabaseAdmin.from('subscriptions').update({
          tier: 'free',
          status: 'canceled',
          stripe_subscription_id: null,
          stripe_price_id: null,
          reports_limit: 1,
        }).eq('user_id', userId)

        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        const customerId = invoice.customer as string

        const { data: sub } = await supabaseAdmin
          .from('subscriptions')
          .select('user_id')
          .eq('stripe_customer_id', customerId)
          .single()

        if (sub) {
          await supabaseAdmin.from('subscriptions').update({
            status: 'past_due',
          }).eq('user_id', sub.user_id)
        }
        break
      }
    }

    return NextResponse.json({ received: true })

  } catch (err) {
    console.error('[Webhook] Handler error:', err)
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 })
  }
}
