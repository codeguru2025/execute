import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useSEO } from "@/hooks/use-seo";
import { ArrowRight, Code, Plane, Coffee } from "lucide-react";

const divisions = [
  {
    icon: Code,
    title: "Technology & Growth",
    pillar: "Build Businesses",
    description: "Design, digitize, optimize, and scale businesses with cutting-edge technology, revenue systems, training, and business enablement services.",
    href: "/technology-growth",
    services: ["Digital Build", "Revenue Systems", "Training", "Business Enablement"],
  },
  {
    icon: Plane,
    title: "Events, Travel & Tourism",
    pillar: "Move People",
    description: "Facilitate travel, logistics, and physical experiences through events, cross-border travel services, and local Dubai experiences.",
    href: "/events-travel",
    services: ["Conferences & Events", "Africa → Dubai Travel", "Dubai → Africa Tours", "Local Hospitality"],
  },
  {
    icon: Coffee,
    title: "Execute Beverage",
    pillar: "Lifestyle Products",
    description: "Crafted beverages that embody clarity and precision—matcha, mocktails, juices, and premium drinks for discerning tastes.",
    href: "/beverage",
    services: ["Signature Drinks", "Cloud Kitchen", "Event Supply", "Office Supply"],
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
            <p className="text-[#8FAF9B] text-sm tracking-[0.2em] uppercase mb-6">
              Our Divisions
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8">
              Three Pillars.<br />
              One Platform.
            </h1>
            <p className="text-lg text-[#BDBDBD] leading-relaxed">
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
                    className="group p-8 lg:p-12 bg-[#141414] border border-white/5 rounded-md hover:border-[#8FAF9B]/30 transition-all cursor-pointer"
                    data-testid={`card-division-${index}`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-1">
                        <division.icon className="w-12 h-12 text-[#8FAF9B]" />
                      </div>
                      
                      <div className="lg:col-span-7">
                        <p className="text-[#8FAF9B] text-xs tracking-wider uppercase mb-2">
                          {division.pillar}
                        </p>
                        <h2 className="text-2xl font-bold text-white mb-3">
                          {division.title}
                        </h2>
                        <p className="text-[#BDBDBD] leading-relaxed">
                          {division.description}
                        </p>
                      </div>
                      
                      <div className="lg:col-span-3">
                        <div className="flex flex-wrap gap-2">
                          {division.services.map((service) => (
                            <span
                              key={service}
                              className="px-3 py-1 text-xs text-[#BDBDBD] bg-white/5 rounded-md"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="lg:col-span-1 flex justify-end">
                        <ArrowRight
                          className="w-6 h-6 text-[#BDBDBD] group-hover:text-[#8FAF9B] group-hover:translate-x-2 transition-all"
                        />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#141414]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not a services company.<br />
              A platform company.
            </h2>
            <p className="text-[#BDBDBD] mb-10 max-w-xl mx-auto">
              We combine Technology + Business Systems + Travel + Events + Lifestyle
              Brands into one cohesive platform that executes.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-[#8FAF9B] text-[#0F0F0F] font-semibold rounded-md hover-elevate"
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
