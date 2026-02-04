import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useSEO } from "@/hooks/use-seo";
import {
  Calendar,
  Plane,
  MapPin,
  Building,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Events",
    items: [
      "Conferences & Exhibitions",
      "Brand Activations",
      "Corporate Events",
      "Event Logistics",
    ],
  },
  {
    icon: Plane,
    title: "Travel: Africa → Dubai",
    items: [
      "Visa Processing",
      "Documentation Support",
      "Flight Coordination",
      "Compliance Management",
      "Group Coordination",
    ],
  },
  {
    icon: MapPin,
    title: "Travel: Dubai → Africa",
    items: [
      "Cultural Tours",
      "Business Partnerships",
      "Custom Itineraries",
      "Local Experiences",
    ],
  },
  {
    icon: Building,
    title: "Local Dubai",
    items: [
      "Hospitality Experiences",
      "Guided Tours",
      "Premium Concierge",
      "Corporate Hosting",
    ],
  },
];

const stats = [
  { value: "20+", label: "Countries Served" },
  { value: "500+", label: "Travelers Facilitated" },
  { value: "50+", label: "Events Executed" },
  { value: "100%", label: "Visa Success Rate" },
];

export default function EventsTravel() {
  useSEO({
    title: "Events, Travel & Tourism",
    description: "Move people between Africa and the UAE. Events, conferences, visa processing, travel coordination, and premium hospitality experiences.",
  });

  return (
    <Layout>
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mb-20">
            <p className="text-[#8FAF9B] text-sm tracking-[0.2em] uppercase mb-6">
              Events, Travel & Tourism
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8">
              Move People.
            </h1>
            <p className="text-lg text-[#BDBDBD] leading-relaxed">
              Facilitate travel, logistics, and physical experiences between
              Africa and the UAE. Anything involving people and movement belongs here.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center p-6">
                  <p className="text-4xl md:text-5xl font-bold text-[#8FAF9B] mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[#BDBDBD]">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
            <div className="w-16 h-px bg-[#8FAF9B]" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="p-8 bg-[#141414] border border-white/5 rounded-md h-full">
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

      <section className="py-32 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-white mb-6">
                The Africa ↔ Dubai Corridor
              </h2>
              <div className="space-y-6 text-[#BDBDBD] leading-relaxed">
                <p>
                  We specialize in facilitating movement between African markets
                  and Dubai. Whether you're bringing delegations from Africa for
                  business conferences or organizing exclusive tours from Dubai
                  into African destinations—we handle every detail.
                </p>
                <p>
                  Our comprehensive approach covers visas, documentation, flights,
                  accommodation, local transport, and on-ground coordination to
                  ensure seamless experiences.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-[#8FAF9B]/10 to-transparent rounded-md flex items-center justify-center">
                  <div className="text-center">
                    <Plane className="w-16 h-16 text-[#8FAF9B]/40 mx-auto mb-4" />
                    <p className="text-white/30 text-sm">Seamless Movement</p>
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
              Planning an Event or Trip?
            </h2>
            <p className="text-[#BDBDBD] mb-10 max-w-xl mx-auto">
              Let us handle the logistics. From visa processing to event
              execution—we make movement effortless.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-[#8FAF9B] text-[#0F0F0F] font-semibold rounded-md hover-elevate flex items-center gap-2 mx-auto"
                data-testid="button-plan-with-us"
              >
                Plan With Us
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
