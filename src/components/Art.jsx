// Small reusable SVG / CSS illustrations (swap for real photos anytime).

export function Leaf({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 100 140" fill="none" aria-hidden="true">
      <path d="M50 4C88 34 96 86 50 136 4 86 12 34 50 4Z" fill="currentColor" />
      <path d="M50 20V128M50 60L28 42M50 84L24 62M50 60L72 42M50 84L76 62" stroke="rgba(255,255,255,.35)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function Fern({ className = '', style }) {
  const blades = [-58, -40, -22, 0, 22, 40, 58]
  return (
    <svg className={className} style={style} viewBox="0 0 200 200" fill="none" aria-hidden="true">
      {blades.map((a) => (
        <g key={a} transform={`rotate(${a} 100 190)`}>
          <path d="M100 190C90 120 92 60 100 10 108 60 110 120 100 190Z" fill="currentColor" opacity={0.9 - Math.abs(a) / 200} />
        </g>
      ))}
    </svg>
  )
}

export function Bottle() {
  return (
    <svg viewBox="0 0 80 140" aria-hidden="true">
      <rect x="30" y="4" width="20" height="10" rx="3" fill="#B98A45" />
      <rect x="34" y="14" width="12" height="12" fill="#D9AE62" />
      <rect x="14" y="26" width="52" height="108" rx="16" fill="#E7B65C" opacity=".92" />
      <rect x="20" y="34" width="8" height="90" rx="4" fill="#fff" opacity=".35" />
      <rect x="24" y="64" width="34" height="34" rx="6" fill="#fff" opacity=".55" />
    </svg>
  )
}

export function Flower() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      {Array.from({ length: 14 }).map((_, i) => (
        <ellipse key={i} cx="60" cy="24" rx="7" ry="26" fill={i % 2 ? '#F2875A' : '#F7A06F'} transform={`rotate(${i * (360 / 14)} 60 60)`} />
      ))}
      <circle cx="60" cy="60" r="12" fill="#7A3B22" />
    </svg>
  )
}

export function Bowl({ tone = '#F0B7A8' }) {
  return (
    <svg viewBox="0 0 140 100" aria-hidden="true">
      <ellipse cx="70" cy="90" rx="58" ry="8" fill="rgba(0,0,0,.1)" />
      <path d="M12 40H128C128 76 104 90 70 90S12 76 12 40Z" fill={tone} />
      <ellipse cx="70" cy="40" rx="58" ry="14" fill="#F7EAE0" />
      <circle cx="52" cy="34" r="9" fill="#fff" /><circle cx="72" cy="30" r="10" fill="#fff" />
      <circle cx="90" cy="36" r="8" fill="#fff" /><circle cx="64" cy="42" r="8" fill="#FBF3EC" />
    </svg>
  )
}

export function Candle() {
  return (
    <svg viewBox="0 0 100 110" aria-hidden="true">
      <ellipse cx="50" cy="102" rx="38" ry="6" fill="rgba(0,0,0,.1)" />
      <rect x="10" y="40" width="80" height="60" rx="22" fill="#FBF7F1" />
      <ellipse cx="50" cy="42" rx="40" ry="10" fill="#F1E6D8" />
      <path className="flame" d="M50 14C60 26 58 36 50 38 42 36 40 26 50 14Z" fill="#F7B550" />
    </svg>
  )
}

export function Fingerprint() {
  return (
    <svg viewBox="0 0 120 140" aria-hidden="true">
      <rect x="4" y="4" width="112" height="132" rx="30" fill="#FBF3EC" />
      <g stroke="#0E5A45" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M30 68C30 44 43 30 60 30S90 44 90 68" />
        <path d="M40 74C40 54 48 41 60 41S80 54 80 70V78" />
        <path d="M50 70C50 60 54 52 60 52S70 60 70 70C70 84 72 94 77 104" />
        <path d="M60 64C60 78 60 92 55 106" />
        <path d="M40 84C40 96 37 106 31 114" />
        <path d="M50 88C50 98 47 108 42 116" />
        <path d="M84 84C84 96 86 106 91 113" />
        <path d="M30 84C30 90 29 94 27 98" opacity=".7" />
      </g>
      <g stroke="#E9822F" strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M18 30V22a4 4 0 0 1 4-4h8" /><path d="M102 30V22a4 4 0 0 0-4-4h-8" />
        <path d="M18 110v8a4 4 0 0 0 4 4h8" /><path d="M102 110v8a4 4 0 0 1-4 4h-8" />
      </g>
      <rect className="scan" x="16" y="34" width="88" height="4" rx="2" fill="#F4A94E" />
    </svg>
  )
}

export function Transfer() {
  return (
    <svg viewBox="0 0 140 100" aria-hidden="true">
      <rect x="6" y="14" width="46" height="72" rx="12" fill="#FBF3EC" />
      <rect x="88" y="14" width="46" height="72" rx="12" fill="#FBF3EC" />
      <circle cx="29" cy="40" r="10" fill="#E39A85" /><rect x="16" y="58" width="26" height="6" rx="3" fill="#E9D3C7" />
      <circle cx="111" cy="40" r="10" fill="#F4A94E" /><rect x="98" y="58" width="26" height="6" rx="3" fill="#E9D3C7" />
      <path d="M58 40h24m-8-8 8 8-8 8M82 66H58m8-8-8 8 8 8" stroke="#0E5A45" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export function Phone() {
  return (
    <svg viewBox="0 0 80 130" aria-hidden="true">
      <rect x="6" y="4" width="68" height="122" rx="16" fill="#0E5A45" />
      <rect x="12" y="16" width="56" height="94" rx="8" fill="#FBF7F1" />
      <circle cx="40" cy="120" r="3" fill="#BBD5C6" />
      <path d="M46 26 32 60h12l-6 32 20-40H46Z" fill="#F4A94E" />
    </svg>
  )
}

export function Bill() {
  return (
    <svg viewBox="0 0 100 130" aria-hidden="true">
      <path d="M10 6h80v118l-13-9-14 9-13-9-14 9-13-9-13 9Z" fill="#FBF7F1" />
      <rect x="24" y="26" width="34" height="6" rx="3" fill="#0E5A45" />
      <rect x="24" y="44" width="52" height="5" rx="2.5" fill="#BBD5C6" />
      <rect x="24" y="58" width="52" height="5" rx="2.5" fill="#BBD5C6" />
      <rect x="24" y="72" width="36" height="5" rx="2.5" fill="#BBD5C6" />
      <circle cx="68" cy="98" r="12" fill="#F4A94E" /><path d="m62 98 4 4 8-8" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Atm() {
  return (
    <svg viewBox="0 0 120 100" aria-hidden="true">
      <rect x="8" y="12" width="104" height="70" rx="14" fill="#F4A94E" />
      <rect x="8" y="30" width="104" height="14" fill="#7A3B22" opacity=".85" />
      <rect x="20" y="56" width="34" height="8" rx="4" fill="#fff" opacity=".8" />
      <circle cx="92" cy="60" r="10" fill="#fff" opacity=".55" /><circle cx="82" cy="60" r="10" fill="#fff" opacity=".55" />
    </svg>
  )
}

export function Shield() {
  return (
    <svg viewBox="0 0 100 120" aria-hidden="true">
      <path d="M50 6 90 20v34c0 30-18 50-40 60C28 104 10 84 10 54V20Z" fill="#0E5A45" />
      <path d="M50 16 80 27v27c0 23-13 39-30 48V16Z" fill="#157055" />
      <path d="m34 58 12 12 22-26" stroke="#fff" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
