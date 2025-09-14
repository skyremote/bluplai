import React from 'react';

type Props = {
  name: string;
  subtitle?: string;
  price?: string;
  bullets: string[];
  cta: string;
  onClick: () => void;
  eyebrow?: string; // e.g., "BluplAI" or "NavAIgate"
  badgeText?: string; // optional small badge in header
};

const MobilePlanCard: React.FC<Props> = ({ name, subtitle, price, bullets, cta, onClick, eyebrow = 'BluplAI', badgeText }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-gray-800/80 text-white p-5 shadow-[0_2px_0_rgba(255,255,255,0.06)_inset]">
      {/* Eyebrow / Badge */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs text-gray-300">{eyebrow}</span>
        {badgeText && (
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-gray-200 border border-white/10">{badgeText}</span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-extrabold leading-snug">{name}</h3>
      {subtitle && <div className="text-sm text-purple-200 font-semibold mt-0.5">{subtitle}</div>}

      {/* Price (hidden when not provided) */}
      {price && (
        <div className="mt-3 text-base text-gray-200 font-medium">{price}</div>
      )}

      <hr className="my-4 border-white/10" />

      {/* Bullets */}
      <ul className="space-y-2 text-[15px] text-gray-200 list-disc pl-5">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      {/* CTA */}
      <button
        type="button"
        onClick={onClick}
        className="mt-5 w-full rounded-full bg-cyan-400/25 text-cyan-200 border border-cyan-300/40 py-3 font-semibold active:scale-[0.99] transition"
      >
        {cta}
      </button>

      {/* Small fine print slot (optional) */}
      {/* <p className="mt-3 text-xs text-gray-400">Terms apply.</p> */}
    </div>
  );
};

export default MobilePlanCard;
