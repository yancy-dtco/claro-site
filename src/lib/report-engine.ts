/**
 * Claro Report Generation Engine
 * Orchestrates: Etsy API → Reddit API → LLM synthesis → structured output
 */

import Anthropic from '@anthropic-ai/sdk'
import { supabaseAdmin, type SubscriptionTier } from './supabase'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })

// ─── ETSY SIGNAL PULL ─────────────────────────────────────────────────────────

async function fetchEtsySignals(shopUrlOrName: string): Promise<string[]> {
  const signals: string[] = []

  try {
    // Extract shop name from URL if needed
    const shopName = shopUrlOrName
      .replace(/https?:\/\/(www\.)?etsy\.com\/shop\//i, '')
      .replace(/\/$/, '')
      .trim()

    if (!shopName || shopName.includes(' ')) {
      // No valid shop name — skip Etsy API, fall back to category analysis
      return signals
    }

    const apiKey = process.env.ETSY_API_KEY
    if (!apiKey) return signals

    // Fetch listings
    const listingsRes = await fetch(
      `https://openapi.etsy.com/v3/application/shops/${shopName}/listings/active?limit=25&includes=reviews`,
      { headers: { 'x-api-key': apiKey } }
    )

    if (listingsRes.ok) {
      const data = await listingsRes.json()
      const listings = data.results || []

      for (const listing of listings.slice(0, 10)) {
        if (listing.title) signals.push(`LISTING_TITLE: ${listing.title}`)
        if (listing.description) signals.push(`LISTING_DESC: ${listing.description.slice(0, 500)}`)
        if (listing.tags?.length) signals.push(`LISTING_TAGS: ${listing.tags.join(', ')}`)
      }
    }

    // Fetch reviews (if listings available)
    if (signals.length > 0) {
      const reviewsRes = await fetch(
        `https://openapi.etsy.com/v3/application/shops/${shopName}/reviews?limit=50`,
        { headers: { 'x-api-key': apiKey } }
      )

      if (reviewsRes.ok) {
        const data = await reviewsRes.json()
        const reviews = data.results || []

        for (const review of reviews) {
          if (review.review && review.review.length > 20) {
            signals.push(`BUYER_REVIEW [${review.rating}★]: ${review.review}`)
          }
        }
      }
    }
  } catch (err) {
    console.error('[Etsy] Signal fetch error:', err)
  }

  return signals
}

// ─── REDDIT SIGNAL PULL ───────────────────────────────────────────────────────

async function fetchRedditSignals(category: string): Promise<string[]> {
  const signals: string[] = []
  const clientId = process.env.REDDIT_CLIENT_ID
  const clientSecret = process.env.REDDIT_CLIENT_SECRET

  if (!clientId || !clientSecret) return signals

  try {
    // Get Reddit OAuth token (app-only)
    const tokenRes = await fetch('https://www.reddit.com/api/v1/access_token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Claro/1.0 (buyer intelligence tool)',
      },
      body: 'grant_type=client_credentials',
    })

    if (!tokenRes.ok) return signals
    const { access_token } = await tokenRes.json()

    const headers = {
      'Authorization': `Bearer ${access_token}`,
      'User-Agent': 'Claro/1.0 (buyer intelligence tool)',
    }

    const subreddits = ['EtsySellers', 'Etsy', 'smallbusiness']
    const searchTerms = [
      `buying ${category}`,
      `${category} etsy`,
      `looking for ${category}`,
    ]

    for (const subreddit of subreddits) {
      for (const term of searchTerms.slice(0, 2)) {
        const searchRes = await fetch(
          `https://oauth.reddit.com/r/${subreddit}/search?q=${encodeURIComponent(term)}&sort=relevance&limit=15&type=comment`,
          { headers }
        )

        if (searchRes.ok) {
          const data = await searchRes.json()
          const posts = data.data?.children || []

          for (const post of posts) {
            const d = post.data
            if (d.selftext && d.selftext.length > 30) {
              signals.push(`REDDIT_POST [r/${subreddit}]: ${d.title} — ${d.selftext.slice(0, 400)}`)
            }
          }
        }

        await new Promise(r => setTimeout(r, 300)) // rate limit
      }
    }
  } catch (err) {
    console.error('[Reddit] Signal fetch error:', err)
  }

  return signals
}

// ─── LLM SYNTHESIS ────────────────────────────────────────────────────────────

const SYNTHESIS_PROMPT = (signals: string[], tier: SubscriptionTier, category: string) => `
You are Claro's buyer intelligence engine. Analyze the following buyer signals collected from Etsy reviews, Reddit communities, and product listings for a shop/category: "${category}".

SIGNALS (${signals.length} total):
${signals.slice(0, 80).join('\n')}

Generate a complete buyer intelligence report. Be SPECIFIC — never vague. Use actual phrases from the signals. The more specific, the more valuable.

Return ONLY valid JSON with this exact structure:
{
  "buyer_profile": {
    "persona_name": "string (e.g. 'Sarah, the intentional gift-giver')",
    "age_range": "string",
    "income_range": "string",
    "values": ["string"],
    "shopping_behavior": "string",
    "primary_motivation": "string",
    "summary": "2-3 sentence portrait in plain English"
  },
  "buyer_vocabulary": {
    "phrases": ["exact phrase from signals", "..."],
    "search_terms": ["what they search for"],
    "emotional_words": ["words that carry emotional weight for this buyer"]
  },
  "purchase_triggers": [
    {
      "name": "string",
      "description": "string",
      "implication": "what this means for listings/content"
    }
  ],
  "purchase_barriers": [
    {
      "name": "string",
      "description": "string",
      "how_to_remove": "specific copy/visual approach to overcome this"
    }
  ],
  "content_angles": [
    {
      "title": "string",
      "platform": "Instagram | TikTok | Pinterest | Email",
      "hook": "exact opening line for this content piece",
      "why_it_works": "1 sentence grounded in the signals"
    }
  ],
  "competitor_gaps": [
    {
      "gap": "string",
      "opportunity": "how to exploit it"
    }
  ]${tier === 'tier2' || tier === 'tier3' ? `,
  "brand_voice": {
    "tone_descriptors": ["string"],
    "do_say": ["example phrases"],
    "dont_say": ["example phrases"],
    "sample_caption": "string"
  },
  "positioning": {
    "statement": "string",
    "differentiator": "string",
    "tagline_options": ["string"]
  },
  "messaging_pillars": [
    {
      "pillar": "string",
      "description": "string",
      "example_use": "string"
    }
  ]` : ''}${tier === 'tier3' ? `,
  "content_calendar": {
    "week1": [{"day": "Mon", "platform": "string", "type": "string", "hook": "string"}],
    "week2": [{"day": "Mon", "platform": "string", "type": "string", "hook": "string"}]
  },
  "listing_rewrites": [
    {
      "original": "string",
      "rewritten": "string",
      "why": "string"
    }
  ]` : ''}
}

Ensure content_angles has exactly 10 items. All arrays should have 3-5 items unless specified. Be specific and surprising — generic output is worse than nothing.
`

// ─── MAIN REPORT GENERATOR ────────────────────────────────────────────────────

export async function generateReport(reportId: string): Promise<void> {
  const startTime = Date.now()

  // Mark as processing
  await supabaseAdmin
    .from('reports')
    .update({ status: 'processing', started_at: new Date().toISOString() })
    .eq('id', reportId)

  try {
    // Get report details
    const { data: report } = await supabaseAdmin
      .from('reports')
      .select('*, profiles(email)')
      .eq('id', reportId)
      .single()

    if (!report) throw new Error('Report not found')

    const inputShopUrl = report.input_shop_url || ''
    const inputCategory = report.input_category || ''
    const category = inputCategory || inputShopUrl || 'handmade goods'
    const tier = report.tier_at_generation as SubscriptionTier

    // Pull signals in parallel
    const [etsySignals, redditSignals] = await Promise.all([
      fetchEtsySignals(inputShopUrl),
      fetchRedditSignals(category),
    ])

    const allSignals = [...etsySignals, ...redditSignals]

    // Store raw signals
    if (allSignals.length > 0) {
      const signalRows = allSignals.map((content, i) => ({
        report_id: reportId,
        source: i < etsySignals.length ? 'etsy_reviews' : 'reddit',
        content,
      }))

      await supabaseAdmin.from('report_signals').insert(signalRows)
    }

    // LLM synthesis
    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 4096,
      messages: [
        {
          role: 'user',
          content: SYNTHESIS_PROMPT(allSignals, tier, category),
        },
      ],
    })

    const rawResponse = message.content[0].type === 'text' ? message.content[0].text : ''

    // Parse JSON from response
    const jsonMatch = rawResponse.match(/\{[\s\S]*\}/)
    if (!jsonMatch) throw new Error('LLM did not return valid JSON')

    const output = JSON.parse(jsonMatch[0])
    const processingMs = Date.now() - startTime

    // Save complete output
    await supabaseAdmin.from('reports').update({
      status: 'complete',
      completed_at: new Date().toISOString(),
      signals_etsy_reviews: etsySignals.length,
      signals_reddit: redditSignals.length,
      signals_total: allSignals.length,
      output_buyer_profile: output.buyer_profile || null,
      output_buyer_vocabulary: output.buyer_vocabulary || null,
      output_purchase_triggers: output.purchase_triggers || null,
      output_purchase_barriers: output.purchase_barriers || null,
      output_content_angles: output.content_angles || null,
      output_competitor_gaps: output.competitor_gaps || null,
      output_brand_voice: output.brand_voice || null,
      output_positioning: output.positioning || null,
      output_messaging_pillars: output.messaging_pillars || null,
      output_content_calendar: output.content_calendar || null,
      output_listing_rewrites: output.listing_rewrites || null,
      output_raw_llm_response: rawResponse,
      llm_model: 'claude-3-5-sonnet-20241022',
      llm_tokens_used: message.usage?.input_tokens + message.usage?.output_tokens,
      processing_time_ms: processingMs,
    }).eq('id', reportId)

    // Increment usage counter
    await supabaseAdmin.rpc('increment_reports_used', { p_user_id: report.user_id })

  } catch (err) {
    console.error('[ReportEngine] Failed:', err)
    await supabaseAdmin.from('reports').update({
      status: 'failed',
      failed_reason: err instanceof Error ? err.message : 'Unknown error',
    }).eq('id', reportId)
  }
}
