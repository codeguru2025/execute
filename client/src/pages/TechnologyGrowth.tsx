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
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mb-20">
            <p className="text-[#8FAF9B] text-sm tracking-[0.2em] uppercase mb-6">
              Technology & Growth
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8">
              Build Businesses.
            </h1>
            <p className="text-lg text-[#BDBDBD] leading-relaxed">
              Design, digitize, optimize, and scale businesses with cutting-edge
              technology and strategic growth systems. Anything that helps a
              company operate or scale belongs here.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-32 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
            <div className="w-16 h-px bg-[#8FAF9B]" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="p-8 bg-[#0F0F0F] border border-white/5 rounded-md h-full">
                  <service.icon className="w-10 h-10 text-[#8FAF9B] mb-6" />
                  <h3 className="text-xl font-bold text-white mb-6">
                    {service.title}
                  </h3>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="text-[#BDBDBD] text-sm flex items-center gap-3"
                      >
                        <span className="w-1 h-1 bg-[#8FAF9B] rounded-full" />
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

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Our Approach</h2>
            <div className="w-16 h-px bg-[#8FAF9B]" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="p-6">
                  <p className="text-5xl font-bold text-[#8FAF9B]/20 mb-4">
                    {item.step}
                  </p>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#BDBDBD] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#141414]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build?
            </h2>
            <p className="text-[#BDBDBD] mb-10 max-w-xl mx-auto">
              Whether you need digital infrastructure, revenue systems, or
              business enablement—we execute.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-[#8FAF9B] text-[#0F0F0F] font-semibold rounded-md hover-elevate flex items-center gap-2 mx-auto"
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
