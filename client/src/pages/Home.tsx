import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useSEO } from "@/hooks/use-seo";
import { ArrowRight, Globe, Building2, Plane, Coffee } from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "Build Businesses",
    subtitle: "Technology & Growth",
    description: "Design, digitize, optimize, and scale businesses with cutting-edge technology and strategic growth systems.",
    href: "/technology-growth",
  },
  {
    icon: Plane,
    title: "Move People",
    subtitle: "Events & Travel",
    description: "Facilitate travel, logistics, and physical experiences between Africa and the UAE.",
    href: "/events-travel",
  },
  {
    icon: Coffee,
    title: "Lifestyle Products",
    subtitle: "Execute Beverage",
    description: "Crafted beverages and premium lifestyle experiences that embody the Execute philosophy.",
    href: "/beverage",
  },
];

const enablements = [
  "Business Creation",
  "Business Growth",
  "Cross-Border Mobility",
  "Premium Experiences",
];

export default function Home() {
  useSEO({
    title: "Built to Execute",
    description: "Execute Group is a Dubai-registered business enablement platform helping individuals and companies launch, move, and scale between Africa and the UAE.",
  });

  return (
    <Layout>
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F0F0F]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[#8FAF9B] text-sm tracking-[0.2em] uppercase mb-6"
            >
              Execute Group
            </motion.p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8">
              Built to Execute.
            </h1>
            
            <p className="text-lg md:text-xl text-[#BDBDBD] max-w-2xl mx-auto leading-relaxed mb-12">
              A Dubai-registered business enablement platform helping individuals
              and companies launch, move, and scale between Africa and the UAE.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/divisions">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-[#0F0F0F] font-medium rounded-md hover-elevate flex items-center gap-2"
                  data-testid="button-explore-divisions"
                >
                  Explore Divisions
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border border-white/20 text-white font-medium rounded-md hover:border-white/40 transition-colors"
                  data-testid="button-contact-us"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #8FAF9B 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </section>

      <section className="py-32 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What We Enable
            </h2>
            <div className="w-16 h-px bg-[#8FAF9B] mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {enablements.map((item, index) => (
              <AnimatedSection key={item} delay={index * 0.1}>
                <div className="text-center p-6">
                  <p className="text-white text-lg font-medium">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Three Pillars
            </h2>
            <p className="text-[#BDBDBD] max-w-xl mx-auto">
              Technology + Business Systems + Travel + Events + Lifestyle Brands
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <AnimatedSection key={pillar.title} delay={index * 0.15}>
                <Link href={pillar.href}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group p-8 bg-[#141414] border border-white/5 rounded-md h-full hover:border-[#8FAF9B]/30 transition-colors cursor-pointer"
                    data-testid={`card-pillar-${index}`}
                  >
                    <pillar.icon className="w-10 h-10 text-[#8FAF9B] mb-6" />
                    <p className="text-[#8FAF9B] text-xs tracking-wider uppercase mb-2">
                      {pillar.subtitle}
                    </p>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-[#BDBDBD] text-sm leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                    <span className="text-white text-sm flex items-center gap-2 group-hover:text-[#8FAF9B] transition-colors">
                      Learn More
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <Globe className="w-16 h-16 text-[#8FAF9B] mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Africa ↔ Dubai Bridge
              </h2>
              <p className="text-[#BDBDBD] leading-relaxed mb-8">
                We serve as the definitive bridge between African markets and Dubai's
                global business ecosystem. Whether you're scaling from Africa to the
                UAE or expanding from Dubai into Africa, we provide the infrastructure,
                expertise, and connections to make it happen.
              </p>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 border border-[#8FAF9B] text-[#8FAF9B] font-medium rounded-md hover:bg-[#8FAF9B] hover:text-[#0F0F0F] transition-all"
                  data-testid="button-learn-more-bridge"
                >
                  Learn Our Story
                </motion.button>
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-[#8FAF9B]/10 to-transparent rounded-md flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-6xl md:text-8xl font-bold text-white/10">
                      AF
                    </p>
                    <div className="w-20 h-px bg-[#8FAF9B] mx-auto my-4" />
                    <p className="text-6xl md:text-8xl font-bold text-white/10">
                      UAE
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Execute?
            </h2>
            <p className="text-[#BDBDBD] mb-10 max-w-xl mx-auto">
              Whether you're building a business, planning travel, or seeking premium
              lifestyle experiences—we're here to execute.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-[#8FAF9B] text-[#0F0F0F] font-semibold rounded-md hover-elevate"
                data-testid="button-get-started"
              >
                Get Started
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
