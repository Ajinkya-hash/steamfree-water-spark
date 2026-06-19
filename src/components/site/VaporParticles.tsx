export function VaporParticles() {
  // Deterministic pseudo-random positions for SSR consistency.
  const dots = Array.from({ length: 24 }, (_, i) => {
    const x = (i * 37) % 100;
    const delay = (i * 0.4) % 9;
    const size = 2 + ((i * 7) % 4);
    return { x, delay, size };
  });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="particle absolute rounded-full bg-white/40"
          style={{
            left: `${d.x}%`,
            bottom: "-20px",
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
