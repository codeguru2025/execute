import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useSEO } from "@/hooks/use-seo";
import {
  Monitor,
  TrendingUp,
  GraduationCap,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import dubaiBusiness from "../assets/images/dubai-business.webp";

const services = [
  {
    icon: Monitor,
    title: "Digital Build",
    items: [
      "Websites & Mobile Apps",
      "E-commerce Platforms",
      "Dashboards & Internal Tools",
      "Automations & CRM Systems",
      "AI Integrations",
      "System Architecture",
    ],
  },
  {
    icon: TrendingUp,
    title: "Revenue Systems",
    items: [
      "Sales Funnels",
      "Acquisition Systems",
      "Marketing Strategy",
      "Analytics & Optimization",
      "Growth Optimization",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training",
    items: [
      "Sales Training",
      "Marketing Training",
      "Team Building",
      "Leadership Workshops",
      "Seminars & Coaching",
    ],
  },
  {
    icon: Briefcase,
    title: "Business Enablement",
    items: [
      "Dubai Company Formation",
      "Registration Support",
      "Operational Audits",
      "Process Design & Restructuring",
      "HR Consultancy & Talent Sourcing",
      "Compliance Advisory",
    ],
  },
];

const approach = [
  {
    step: "01",
    title: "Discovery",
    description: "We analyze your current state, goals, and constraints to develop a clear roadmap.",
  },
  {
    step: "02",
    title: "Design",
    description: "We architect solutions that align with your vision and scale with your growth.",
  },
  {
    step: "03",
    title: "Build",
    description: "We execute with precision, delivering systems that work from day one.",
  },
  {
    step: "04",
    title: "Optimize",
    description: "We continuously refine and improve to maximize performance and ROI.",
  },
];

export default function TechnologyGrowth() {
  useSEO({
    title: "Technology & Growth",
    description: "Build businesses with Execute Group. Digital build, revenue systems, training, and business enablement services including Dubai company formation.",
  });

  return (
    <Layout>
      <section className="min-h-[50vh] flex items-end relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${dubaiBusiness})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/70 to-black/40" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#D4A84B]/20 border border-[#D4A84B]/40 rounded-full text-[#D4A84B] text-sm font-medium tracking-wide mb-6">
              Technology & Growth
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8">
              <span className="text-[#D4A84B]">Build</span> Businesses.
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Design, digitize, optimize, and scale businesses with cutting-edge
              technology and strategic growth systems. Anything that helps a
              company operate or scale belongs here.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
            <div className="w-16 h-px bg-[#D4A84B]" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-md h-full hover:border-[#D4A84B]/30 transition-colors">
                  <div className="p-3 bg-[#D4A84B]/10 rounded-md border border-[#D4A84B]/20 inline-block mb-6">
                    <service.icon className="w-6 h-6 text-[#D4A84B]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6">
                    {service.title}
                  </h3>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="text-white/60 text-sm flex items-center gap-3"
                      >
                        <span className="w-1.5 h-1.5 bg-[#D4A84B] rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Our Approach</h2>
            <div className="w-16 h-px bg-[#D4A84B]" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="p-6 border-l-2 border-[#D4A84B]/30 hover:border-[#D4A84B] transition-colors">
                  <p className="text-5xl font-bold text-[#D4A84B]/30 mb-4">
                    {item.step}
                  </p>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to <span className="text-[#D4A84B]">Build</span>?
            </h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto">
              Whether you need digital infrastructure, revenue systems, or
              business enablement—we execute.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-[#D4A84B] text-black font-semibold rounded-md hover-elevate flex items-center gap-2 mx-auto"
                data-testid="button-start-project"
              >
                Start Your Project
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
