"use client";

/** CSS reveals keep server-rendered content visible without depending on hydration. */
export function FadeUp({
  children,
  delay = 0,
  className = "",
  style,
  ...rest
}) {
  return (
    <div
      className={`reveal-up ${className}`}
      style={{ animationDelay: `${delay}s`, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}

export function MaskedLines({
  lines,
  className = "",
  accentIndex = -1,
  delay = 0,
}) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span
          className="block overflow-hidden pb-[0.12em] -mb-[0.12em]"
          key={line}
        >
          <span
            className={`reveal-line block ${i === accentIndex ? "text-sky" : ""}`}
            style={{ animationDelay: `${delay + i * 0.13}s` }}
          >
            {line}
          </span>
        </span>
      ))}
    </span>
  );
}
