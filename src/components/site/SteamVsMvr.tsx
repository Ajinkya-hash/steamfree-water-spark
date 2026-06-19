export function SteamVsMvr() {
  return (
    <svg viewBox="0 0 600 280" className="w-full h-auto" role="img" aria-label="Steam vs MVR comparison">
      <defs>
        <linearGradient id="steamFade" x1="0" x2="1">
          <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#94a3b8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="aquaG" x1="0" x2="1">
          <stop offset="0%" stopColor="var(--aqua)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--aqua)" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Steam-based (top) - fading */}
      <g opacity="0.55">
        <text x="20" y="28" className="font-mono" fontSize="11" fill="#64748b" letterSpacing="2">STEAM-BASED</text>
        <rect x="20" y="48" width="120" height="60" rx="2" fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" />
        <text x="80" y="84" textAnchor="middle" fontSize="10" fill="#64748b" className="font-mono">BOILER</text>
        <path d="M140 78 L 240 78" stroke="url(#steamFade)" strokeWidth="2" />
        <rect x="240" y="48" width="120" height="60" rx="2" fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" />
        <text x="300" y="84" textAnchor="middle" fontSize="10" fill="#64748b" className="font-mono">EVAPORATOR</text>
        {/* Drifting steam puffs */}
        {[0,1,2].map((i) => (
          <circle key={i} cx={300 + i*8} cy={48} r={6 + i*2} fill="#94a3b8" opacity={0.25 - i*0.07}>
            <animate attributeName="cy" from="48" to="-10" dur={`${3+i}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.4" to="0" dur={`${3+i}s`} repeatCount="indefinite" />
          </circle>
        ))}
        <text x="380" y="84" fontSize="11" fill="#94a3b8" className="font-mono">→ heat lost</text>
      </g>

      {/* divider */}
      <line x1="20" y1="138" x2="580" y2="138" stroke="var(--ink)" strokeOpacity="0.1" strokeWidth="1" />

      {/* MVR (bottom) - alive */}
      <g>
        <text x="20" y="166" className="font-mono" fontSize="11" fill="var(--aqua)" letterSpacing="2">MVR — STEAM-FREE</text>
        <rect x="20" y="186" width="120" height="60" rx="2" fill="none" stroke="var(--aqua)" strokeWidth="1.5" />
        <text x="80" y="222" textAnchor="middle" fontSize="10" fill="var(--ink)" className="font-mono">COMPRESSOR</text>
        <text x="80" y="234" textAnchor="middle" fontSize="8" fill="var(--aqua)" className="font-mono">⚡ ELECTRIC</text>

        <rect x="240" y="186" width="120" height="60" rx="2" fill="none" stroke="var(--aqua)" strokeWidth="1.5" />
        <text x="300" y="222" textAnchor="middle" fontSize="10" fill="var(--ink)" className="font-mono">EVAPORATOR</text>

        <rect x="430" y="186" width="140" height="60" rx="2" fill="none" stroke="var(--aqua)" strokeWidth="1.5" />
        <text x="500" y="218" textAnchor="middle" fontSize="10" fill="var(--ink)" className="font-mono">CLEAN WATER</text>
        <text x="500" y="232" textAnchor="middle" fontSize="9" fill="var(--aqua)" className="font-mono">+ SALT</text>

        {/* flowing dashed lines */}
        <path d="M140 216 L 240 216" stroke="var(--aqua)" strokeWidth="2" fill="none" className="flow-dash" />
        <path d="M360 216 L 430 216" stroke="var(--aqua)" strokeWidth="2" fill="none" className="flow-dash" />

        {/* recirc loop */}
        <path d="M300 186 Q 220 130 80 186" stroke="var(--aqua)" strokeWidth="1.5" fill="none" strokeOpacity="0.6" className="flow-dash" />
        <text x="200" y="148" fontSize="9" fill="var(--aqua)" className="font-mono">vapour recompressed</text>
      </g>
    </svg>
  );
}
