import { useEffect, useRef, useState } from "react";

export function Counter({ to, suffix = "", decimals = 0, duration = 1400 }: { to: number; suffix?: string; decimals?: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(to * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      }
    }, { threshold: 0.4 });
    io.observe(node);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val.toFixed(decimals)}{suffix}</span>;
}
