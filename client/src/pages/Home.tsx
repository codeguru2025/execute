import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useSEO } from "@/hooks/use-seo";
import { ArrowRight, Globe, Building2, Plane, Coffee } from "lucide-react";
import dubaiSkyline from "../assets/images/dubai-skyline.jpg";
import dubaiBusiness from "../assets/images/dubai-business.jpg";
import travelLuxury from "../assets/images/travel-luxury.jpg";
import beveragePremium from "../assets/images/beverage-premium.jpg";

const pillars = [
  {
    icon: Building2,
    title: "Build Businesses",
    subtitle: "Technology & Growth",
    description: "Design, digitize, optimize, and scale businesses with cutting-edge technology and strategic growth systems.",
    href: "/technology-growth",
    image: dubaiBusiness,
  },
  {
    icon: Plane,
    title: "Move People",
    subtitle: "Events & Travel",
    description: "Facilitate travel, logistics, and physical experiences between Africa and the UAE.",
    href: "/events-travel",
    image: travelLuxury,
  },
  {
    icon: Coffee,
    title: "Lifestyle Products",
    subtitle: "Execute Beverage",
    description: "Crafted beverages and premium lifestyle experiences that embody the Execute philosophy.",
    href: "/beverage",
    image: beveragePremium,
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
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${dubaiSkyline})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0F0F0F]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 bg-[#D4A84B]/20 border border-[#D4A84B]/40 rounded-full text-[#D4A84B] text-sm font-medium tracking-wide">
                Dubai Business Enablement Platform
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white tracking-tight mb-8">
              <span className="block">Sip. Spark.</span>
              <span className="text-[#D4A84B]">Execute.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-12">
              A Dubai-registered business enablement platform helping individuals and companies 
              launch, move, and scale between Africa and the UAE. Premium beverages, technology, 
              events, and business solutions — all in one platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/divisions">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-[#D4A84B] text-black font-semibold rounded-md hover-elevate flex items-center gap-2"
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
                  className="px-8 py-4 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 backdrop-blur-sm transition-all"
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
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-[#D4A84B] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What We Enable
            </h2>
            <div className="w-16 h-px bg-[#D4A84B] mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {enablements.map((item, index) => (
              <AnimatedSection key={item} delay={index * 0.1}>
                <div className="text-center p-6 border border-white/5 rounded-md bg-white/[0.02] hover:border-[#D4A84B]/30 transition-colors">
                  <p className="text-white text-lg font-medium">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Three Pillars
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Technology + Business Systems + Travel + Events + Lifestyle Brands
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <AnimatedSection key={pillar.title} delay={index * 0.15}>
                <Link href={pillar.href}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group relative overflow-hidden rounded-md h-[400px] cursor-pointer"
                    data-testid={`card-pillar-${index}`}
                  >
                    <img 
                      src={pillar.image} 
                      alt={pillar.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <pillar.icon className="w-10 h-10 text-[#D4A84B] mb-4" />
                      <p className="text-[#D4A84B] text-xs tracking-wider uppercase mb-2">
                        {pillar.subtitle}
                      </p>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-4">
                        {pillar.description}
                      </p>
                      <span className="text-white text-sm flex items-center gap-2 group-hover:text-[#D4A84B] transition-colors">
                        Learn More
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <Globe className="w-16 h-16 text-[#D4A84B] mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Africa ↔ Dubai Bridge
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                We serve as the definitive bridge between African markets and Dubai's
                global business ecosystem. Whether you're scaling from Africa to the
                UAE or expanding from Dubai into Africa, we provide the infrastructure,
                expertise, and connections to make it happen.
              </p>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 border border-[#D4A84B] text-[#D4A84B] font-medium rounded-md hover:bg-[#D4A84B] hover:text-black transition-all"
                  data-testid="button-learn-more-bridge"
                >
                  Learn Our Story
                </motion.button>
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-[#D4A84B]/20 to-transparent rounded-md flex items-center justify-center border border-[#D4A84B]/10">
                  <div className="text-center">
                    <p className="text-6xl md:text-8xl font-bold text-white/10">
                      AF
                    </p>
                    <div className="w-20 h-px bg-[#D4A84B] mx-auto my-4" />
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

      <section className="py-32 bg-[#0F0F0F] relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${dubaiSkyline})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/90 to-[#0F0F0F]" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Execute?
            </h2>
            <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg">
              Whether you're building a business, planning travel, or seeking premium
              lifestyle experiences—we're here to execute.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-[#D4A84B] text-black font-semibold rounded-md hover-elevate text-lg"
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
