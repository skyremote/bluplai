import React from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import MobilePlanCard from '../components/MobilePlanCard';

const packages = [
  {
    id: 'iris',
    name: 'IRIS',
    subtitle: 'Starter – Insight',
    price: '€100 / month',
    bullets: [
      'Discovery surveys & digital success plans',
      'Basic API integrations'
    ],
    cta: 'Get IRIS',
  },
  {
    id: 'lumen',
    name: 'LUMEN',
    subtitle: 'Pro – Illumination',
    price: '€1,500 / month',
    bullets: [
      'Everything in IRIS + ROI calculators & workshops',
      'AI-driven insights & workflow automation',
      'Multi-app integration (Slack, Miro, Teams)'
    ],
    cta: 'Get LUMEN',
  },
  {
    id: 'orion',
    name: 'ORION',
    subtitle: 'Enterprise – Navigation',
    price: '€5,000+ / month',
    bullets: [
      'Full AI-powered suite + advanced forecasting',
      'Real-time collaboration & predictive analytics',
      'Enterprise compliance & dedicated advisor',
      'CRM integration'
    ],
    cta: 'Contact Sales',
  }
];

const services = [
  {
    id: 'aura',
    name: 'AURA',
    subtitle: 'Starter',
    price: '€5,000 / project',
    bullets: [
      'AI readiness assessment',
      'Leadership workshop'
    ],
    cta: 'Start AURA',
  },
  {
    id: 'prism',
    name: 'PRISM',
    subtitle: 'Growth',
    price: '€25,000 / project',
    bullets: [
      'Tailored AI use-case design + integration',
      'Playbooks + governance frameworks'
    ],
    cta: 'Start PRISM',
  },
  {
    id: 'ignis',
    name: 'IGNIS',
    subtitle: 'Enterprise',
    price: '€75,000+ / year',
    bullets: [
      'End-to-end AI enablement suite',
      'Dedicated advisors + training academies'
    ],
    cta: 'Contact Sales',
  }
];

const SectionHeading: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-10">
    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
      {title}
    </h1>
    {subtitle && (
      <p className="mt-3 text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

const PlanPanel: React.FC<{ bullets: string[]; price: string; label: string }> = ({ bullets, price, label }) => (
  <div className="mt-4 rounded-xl border border-white/10 bg-gray-900/60 backdrop-blur p-5">
    <div className="flex items-baseline justify-between">
      <div className="text-lg font-semibold text-gray-200">{label}</div>
      <div className="text-sm text-gray-300">{price}</div>
    </div>
    <hr className="my-3 border-white/10" />
    <ul className="space-y-2 list-disc pl-5 text-gray-300 text-sm">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  </div>
);

const Offerings: React.FC = () => {
  const onCTA = (plan: string) => () => {
    const emails = ['dw@bluplai.com', 'llc@bluplai.com'];
    const subject = encodeURIComponent(`Interested in ${plan}`);
    const body = encodeURIComponent('Hi BluplAI team,\n\nWe would like to learn more.');
    window.location.href = `mailto:${emails.join(',')}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-200 hover:bg-white/10 transition-colors"
          >
            <span aria-hidden>←</span>
            <span>Back to Home</span>
          </Link>
        </div>
        <SectionHeading title="What We Offer" subtitle="Plai ecosystem packages and AI enablement services" />

        <h2 className="sr-only">Packages</h2>
        {/* Desktop */}
        <div className="hidden md:grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map(p => (
            <div key={p.id} className="flex flex-col">
              <ProfileCard
                name={p.name}
                title={`${p.subtitle}`}
                avatarUrl="/bluplai-logo.png"
                handle="bluplai"
                status={p.price}
                contactText={p.cta}
                onContactClick={onCTA(p.name)}
                showUserInfo
                enableTilt={true}
              />
              <PlanPanel bullets={p.bullets} price={p.price} label="Includes" />
            </div>
          ))}
        </div>
        {/* Mobile */}
        <div className="md:hidden space-y-6">
          {packages.map(p => (
            <MobilePlanCard
              key={p.id}
              name={p.name}
              subtitle={p.subtitle}
              price={p.price}
              bullets={p.bullets}
              cta={p.cta}
              onClick={onCTA(p.name)}
              eyebrow="BluplAI"
            />
          ))}
        </div>

        <h2 className="mt-16 text-2xl font-bold text-gray-100">AI Enablement Services</h2>
        <p className="text-gray-300 mt-2">Consulting and services for adopting and scaling AI.</p>
        <div className="hidden md:grid mt-6 gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(s => (
            <div key={s.id} className="flex flex-col">
              <ProfileCard
                name={s.name}
                title={`${s.subtitle}`}
                avatarUrl="/bluplai-logo.png"
                handle="navAIgate"
                status={s.price}
                contactText={s.cta}
                onContactClick={onCTA(s.name)}
                showUserInfo
                enableTilt={true}
              />
              <PlanPanel bullets={s.bullets} price={s.price} label="Includes" />
            </div>
          ))}
        </div>
        <div className="md:hidden mt-6 space-y-6">
          {services.map(s => (
            <MobilePlanCard
              key={s.id}
              name={s.name}
              subtitle={s.subtitle}
              price={s.price}
              bullets={s.bullets}
              cta={s.cta}
              onClick={onCTA(s.name)}
              eyebrow="NavAIgate"
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Offerings;
