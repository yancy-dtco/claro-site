export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        fontFamily: "'DM Serif Display', Georgia, serif",
        fontSize: "inherit",
        color: "var(--midnight)",
        letterSpacing: "-0.01em",
      }}
    >
      Claro
      <span
        style={{
          display: "inline-block",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "var(--horizon)",
          marginLeft: "1px",
          marginBottom: "2px",
          verticalAlign: "baseline",
          position: "relative",
          top: "-1px",
        }}
        aria-hidden="true"
      />
    </span>
  );
}
