import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useSEO } from "@/hooks/use-seo";
import { ArrowRight, Code, Plane, Coffee } from "lucide-react";
import dubaiBusiness from "../assets/images/dubai-business.webp";
import travelLuxury from "../assets/images/travel-luxury.webp";
import beveragePremium from "../assets/images/beverage-premium.webp";

const divisions = [
  {
    icon: Code,
    title: "Technology & Growth",
    pillar: "Build Businesses",
    description: "Design, digitize, optimize, and scale businesses with cutting-edge technology, revenue systems, training, and business enablement services.",
    href: "/technology-growth",
    services: ["Digital Build", "Revenue Systems", "Training", "Business Enablement"],
    image: dubaiBusiness,
  },
  {
    icon: Plane,
    title: "Events, Travel & Tourism",
    pillar: "Move People",
    description: "Facilitate travel, logistics, and physical experiences through events, cross-border travel services, and local Dubai experiences.",
    href: "/events-travel",
    services: ["Conferences & Events", "Africa → Dubai Travel", "Dubai → Africa Tours", "Local Hospitality"],
    image: travelLuxury,
  },
  {
    icon: Coffee,
    title: "Execute Beverage",
    pillar: "Lifestyle Products",
    description: "Crafted beverages that embody clarity and precision—matcha, mocktails, juices, and premium drinks for discerning tastes.",
    href: "/beverage",
    services: ["Signature Drinks", "Cloud Kitchen", "Event Supply", "Office Supply"],
    image: beveragePremium,
  },
];

export default function Divisions() {
  useSEO({
    title: "Our Divisions",
    description: "Explore Execute Group's three pillars: Technology & Growth, Events & Travel, and Executive Beverage. Build Businesses. Move People. Lifestyle Products.",
  });

  return (
    <Layout>
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mb-20">
            <span className="inline-block px-4 py-2 bg-[#D4A84B]/20 border border-[#D4A84B]/40 rounded-full text-[#D4A84B] text-sm font-medium tracking-wide mb-6">
              Our Divisions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8">
              Three Pillars.<br />
              <span className="text-[#D4A84B]">One Platform.</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Execute Group operates through three specialized divisions, each
              focused on a distinct pillar of our platform. Together, they form
              a comprehensive ecosystem for business enablement.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {divisions.map((division, index) => (
              <AnimatedSection key={division.title} delay={index * 0.15}>
                <Link href={division.href}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="group relative overflow-hidden rounded-md cursor-pointer"
                    data-testid={`card-division-${index}`}
                  >
                    <div className="absolute inset-0">
                      <img 
                        src={division.image} 
                        alt={division.title}
                        className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
                    </div>
                    
                    <div className="relative p-8 lg:p-12">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-1">
                          <div className="p-3 bg-[#D4A84B]/10 rounded-md border border-[#D4A84B]/20 inline-block">
                            <division.icon className="w-8 h-8 text-[#D4A84B]" />
                          </div>
                        </div>
                        
                        <div className="lg:col-span-7">
                          <p className="text-[#D4A84B] text-xs tracking-wider uppercase mb-2">
                            {division.pillar}
                          </p>
                          <h2 className="text-2xl font-bold text-white mb-3">
                            {division.title}
                          </h2>
                          <p className="text-white/70 leading-relaxed">
                            {division.description}
                          </p>
                        </div>
                        
                        <div className="lg:col-span-3">
                          <div className="flex flex-wrap gap-2">
                            {division.services.map((service) => (
                              <span
                                key={service}
                                className="px-3 py-1 text-xs text-white/80 bg-white/10 backdrop-blur-sm rounded-md border border-white/10"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="lg:col-span-1 flex justify-end">
                          <ArrowRight
                            className="w-6 h-6 text-white/60 group-hover:text-[#D4A84B] group-hover:translate-x-2 transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Three Pillars.<br />
              <span className="text-[#D4A84B]">One Vision.</span>
            </h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto">
              Technology & Growth to build businesses. Events & Travel to move people. 
              Execute Beverage to fuel lifestyles. Three divisions working together 
              to help you thrive between Africa and the UAE.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-[#D4A84B] text-black font-semibold rounded-md hover-elevate"
                data-testid="button-partner-with-us"
              >
                Partner With Us
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
