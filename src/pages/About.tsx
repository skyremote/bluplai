import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, List, Compass, Users, Sparkles, Layers, BarChart3, Link as LinkIcon, Shield, BookOpen, ChevronRight, ChevronDown, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};

const Section: React.FC<{ title: string; icon?: React.ReactNode; children: React.ReactNode }>
= ({ title, icon, children }) => (
  <motion.section
    className="py-10"
    initial={fadeUp.initial}
    whileInView={fadeUp.whileInView}
    viewport={{ once: true, amount: 0.2 }}
  >
    <motion.div
      className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur p-6 md:p-8"
      initial={fadeUp.initial}
      whileInView={fadeUp.whileInView}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex items-center gap-3">
        {icon && <span className="text-cyan-300/90">{icon}</span>}
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
      <div className="mt-4 text-gray-300 leading-relaxed">
        {children}
      </div>
    </motion.div>
  </motion.section>
);

const BulletList: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="mt-1 text-cyan-300/90">
          <CheckCircle2 className="w-4 h-4" />
        </span>
        <span className="text-gray-300">{item}</span>
      </li>
    ))}
  </ul>
);

const ProductFlow: React.FC = () => {
  const steps = [
    { label: 'Discover', icon: <Compass className="w-5 h-5" /> },
    { label: 'Align', icon: <Target className="w-5 h-5" /> },
    { label: 'Deliver', icon: <Layers className="w-5 h-5" /> },
    { label: 'Prove', icon: <BarChart3 className="w-5 h-5" /> },
  ];
  return (
    <motion.div
      className="relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur p-6 md:p-8 overflow-hidden"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <svg className="flow-lines" viewBox="0 0 800 200" preserveAspectRatio="none">
        <path d="M-10 20 C 120 60, 260 -10, 400 20 S 680 70, 810 20" />
        <path d="M-10 60 C 120 100, 260 30, 400 60 S 680 110, 810 60" />
        <path d="M-10 100 C 120 140, 260 70, 400 100 S 680 150, 810 100" />
        <path d="M-10 140 C 120 180, 260 110, 400 140 S 680 190, 810 140" />
        <path d="M-10 180 C 120 220, 260 150, 400 180 S 680 230, 810 180" />
      </svg>
      <h3 className="text-xl md:text-2xl font-semibold text-gray-100 text-center">Product flow</h3>
      <p className="text-gray-300 text-center mt-2">A simple, continuous path from first conversation to measurable ROI.</p>

      {/* Desktop version */}
      <div className="hidden md:grid mt-6 grid-cols-7 items-center gap-4 justify-items-center">
        {steps.map((s, idx) => (
          <React.Fragment key={s.label}>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300">
                {s.icon}
              </div>
              <div className="mt-2 text-gray-200 text-sm font-medium">{s.label}</div>
            </motion.div>
            {idx < steps.length - 1 && (
              <motion.div
                className="flex items-center justify-center text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 + 0.05 }}
                viewport={{ once: true }}
              >
                <ChevronRight className="w-5 h-5" />
                <ChevronRight className="w-5 h-5 -ml-2" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile version */}
      <div className="md:hidden mt-6 flex flex-col items-center gap-3">
        {steps.map((s, idx) => (
          <React.Fragment key={s.label}>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300">
                {s.icon}
              </div>
              <div className="mt-2 text-gray-200 text-sm font-medium">{s.label}</div>
            </motion.div>
            {idx < steps.length - 1 && (
              <div className="flex items-center justify-center text-gray-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

const About: React.FC = () => {
  const onCTA = (subject: string) => () => {
    const email = 'dw@bluplai.com';
    const body = encodeURIComponent('Hi BluplAI team,\n\nWe would like to get started.');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
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

        <motion.header
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-cyan-300">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Customer Engagement Platform</span>
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            About
          </h1>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Transform how your team discovers needs, plans outcomes, and proves value—end to end.
          </p>
        </motion.header>

        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur p-6 md:p-8 mb-10">
          <p className="text-gray-300">
            Our Customer Engagement Platform brings discovery, planning, execution, and measurement into one collaborative workspace. From your first workshop to your ROI report, it keeps teams aligned, actions moving, and impact visible.
          </p>
        </div>

        <Section title="Why we exist" icon={<Target className="w-5 h-5" />}>
          <p>
            Customer initiatives fail when insights, plans, and execution live in different tools. We help you turn conversations into outcomes—and outcomes into measurable results.
          </p>
        </Section>

        <Section title="What you can do" icon={<List className="w-5 h-5" />}>
          <BulletList
            items={[
              <span key="1">Discover needs: Run structured discovery with industry drivers, outcome frameworks, and whiteboards.</span>,
              <span key="2">Assess readiness: Score digital capability, technology fit, and skills to identify gaps and priorities.</span>,
              <span key="3">Plan with clarity: Build Customer Success Plans with timelines, swimlanes, ownership, and milestones.</span>,
              <span key="4">Execute together: Map workflows, assign tasks, and track progress across teams and functions.</span>,
              <span key="5">Measure value: Monitor engagement, adoption, and ROI with dashboards and analytics.</span>,
              <span key="6">Close the loop: Survey departments, capture feedback, and feed insights back into the plan.</span>,
              <span key="7">Integrate your stack: Connect CRM and collaboration tools to keep work where your teams already are.</span>,
              <span key="8">Move faster with AI: Get AI-assisted summaries, next steps, and plan suggestions from your notes and data.</span>,
            ]}
          />
        </Section>

        <Section title="How it works" icon={<Compass className="w-5 h-5" />}>
          <BulletList
            items={[
              <span key="1"><strong className="text-gray-200">Discover:</strong> Capture business context, drivers, and desired outcomes in guided sessions.</span>,
              <span key="2"><strong className="text-gray-200">Align:</strong> Turn insights into a shared, living plan with owners, dependencies, and timelines.</span>,
              <span key="3"><strong className="text-gray-200">Deliver:</strong> Track execution, risks, and status while keeping stakeholders in the loop.</span>,
              <span key="4"><strong className="text-gray-200">Prove:</strong> Report on outcomes, impact, and ROI—clearly and credibly.</span>,
            ]}
          />
        </Section>

        <motion.section
          className="py-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ProductFlow />
        </motion.section>

        <Section title="Who it’s for" icon={<Users className="w-5 h-5" />}>
          <BulletList
            items={[
              <span key="1">Customer Success & Account Teams: Build and deliver value plans with customers.</span>,
              <span key="2">Program & Delivery Teams: Orchestrate cross-functional work streams and dependencies.</span>,
              <span key="3">Executives & Sponsors: See progress, risks, and ROI at a glance.</span>,
            ]}
          />
        </Section>

        <Section title="What makes it different" icon={<Sparkles className="w-5 h-5" />}>
          <BulletList
            items={[
              <span key="1">End‑to‑end: One continuous flow from discovery to ROI—no copy/paste between tools.</span>,
              <span key="2">Collaborative by design: Whiteboards, workshops, and live editing built in.</span>,
              <span key="3">AI‑assisted: Intelligent summaries and recommendations that speed up planning and reporting.</span>,
              <span key="4">Configurable: Adapt assessments, workflows, and dashboards to your operating model.</span>,
            ]}
          />
        </Section>

        <Section title="Key capabilities" icon={<Layers className="w-5 h-5" />}>
          <BulletList
            items={[
              <span key="1">Workshops & Whiteboards: Co-create in real time.</span>,
              <span key="2">Assessments: Digital scorecards and skill matrices.</span>,
              <span key="3">CSP & Timelines: Milestones, ownership, and Gantt-style views.</span>,
              <span key="4">Workflows: Templates for repeatable delivery.</span>,
              <span key="5">Surveys: Department-level feedback and CSAT tracking.</span>,
              <span key="6">Analytics: Engagement, adoption, and ROI dashboards.</span>,
              <span key="7"><span className="inline-flex items-center gap-2"><LinkIcon className="w-4 h-4" /> Integrations: CRM and collaboration tool connectors.</span></span>,
            ]}
          />
        </Section>

        <Section title="Security & trust" icon={<Shield className="w-5 h-5" />}>
          <p>
            We take security and privacy seriously, with sensible defaults and clear data boundaries. Ask us about deployment options and compliance fit for your organization.
          </p>
        </Section>

        <Section title="Our story" icon={<BookOpen className="w-5 h-5" />}>
          <p>
            We built this platform after years of watching great plans get lost between slides, spreadsheets, and status meetings. Teams needed one place to align, deliver, and prove value—so we created it.
          </p>
        </Section>

        <motion.section
          className="py-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur p-6 md:p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Ready to show value faster?</h3>
            <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
              Bring your next customer initiative into the platform and go from “what’s the plan?” to “here’s the impact.”
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button onClick={onCTA('Start a guided discovery')} className="btn-shimmer hover-lift inline-flex items-center rounded-full bg-cyan-400/20 px-5 py-2.5 text-cyan-300 hover:bg-cyan-400/30 transition-colors border border-cyan-300/40">
                Start a guided discovery
              </button>
              <button onClick={onCTA('Create your first success plan')} className="btn-shimmer hover-lift inline-flex items-center rounded-full bg-purple-400/20 px-5 py-2.5 text-purple-300 hover:bg-purple-400/30 transition-colors border border-purple-300/40">
                Create your first success plan
              </button>
              <button onClick={onCTA('Connect your CRM and collaborate')} className="btn-shimmer hover-lift inline-flex items-center rounded-full bg-teal-400/20 px-5 py-2.5 text-teal-300 hover:bg-teal-400/30 transition-colors border border-teal-300/40">
                Connect your CRM and collaborate
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default About;


