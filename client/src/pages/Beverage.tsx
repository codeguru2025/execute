import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useSEO } from "@/hooks/use-seo";
import { ArrowRight, Leaf, Droplets, Coffee } from "lucide-react";

const drinks = [
  { name: "Classic Matcha", category: "Matcha", description: "Pure ceremonial grade matcha" },
  { name: "Iced Matcha Latte", category: "Matcha", description: "Smooth matcha with oat milk" },
  { name: "Matcha Espresso Fusion", category: "Matcha", description: "Bold espresso meets matcha" },
  { name: "Citrus Sunrise", category: "Mocktail", description: "Orange, grapefruit, ginger" },
  { name: "Berry Bliss", category: "Mocktail", description: "Mixed berries, mint, lime" },
  { name: "Tropical Execute", category: "Mocktail", description: "Pineapple, coconut, passion fruit" },
  { name: "Green Clarity", category: "Juice", description: "Cucumber, apple, celery, ginger" },
  { name: "Beetroot Power", category: "Juice", description: "Beetroot, carrot, orange" },
  { name: "Immunity Boost", category: "Juice", description: "Turmeric, ginger, lemon, honey" },
  { name: "Classic Bubble", category: "Bubble Tea", description: "Black tea, tapioca, brown sugar" },
  { name: "Taro Dream", category: "Bubble Tea", description: "Taro, milk, tapioca pearls" },
  { name: "Mango Passion", category: "Bubble Tea", description: "Mango, passion fruit, popping boba" },
  { name: "Cold Brew Original", category: "Bottled", description: "24-hour cold brewed coffee" },
  { name: "Sparkling Hibiscus", category: "Bottled", description: "Hibiscus, sparkling water, rose" },
  { name: "Execute Elixir", category: "Bottled", description: "Signature wellness blend" },
];

const operations = [
  {
    icon: Coffee,
    title: "Pop-ups",
    description: "Premium beverage experiences at events and venues.",
  },
  {
    icon: Droplets,
    title: "Cloud Kitchen",
    description: "Delivery-first operations for wider reach.",
  },
  {
    icon: Leaf,
    title: "Event Supply",
    description: "Catering services for corporate and private events.",
  },
];

export default function Beverage() {
  useSEO({
    title: "Execute Beverage",
    description: "Crafted clarity in every sip. Premium matcha, mocktails, juices, and bubble tea. 15 signature drinks for discerning tastes.",
  });

  return (
    <Layout>
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mb-8">
            <p className="text-[#8FAF9B] text-sm tracking-[0.2em] uppercase mb-6">
              Execute Beverage
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8">
              Crafted Clarity<br />in Every Sip.
            </h1>
            <p className="text-lg text-[#BDBDBD] leading-relaxed">
              Our lifestyle products division brings the Execute philosophy to
              beverages—precision, quality, and exceptional experiences.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-32 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">The Story</h2>
            <div className="w-16 h-px bg-[#8FAF9B] mx-auto" />
          </AnimatedSection>

          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="text-[#BDBDBD] leading-relaxed mb-6">
              Execute Beverage was born from a simple belief: what you consume
              should reflect how you live. We craft beverages for those who
              demand clarity—in thought, in action, and in taste.
            </p>
            <p className="text-[#BDBDBD] leading-relaxed">
              Every drink is designed with intention, using premium ingredients
              and precise techniques to deliver experiences that fuel
              performance and pleasure.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">
              15 Signature Drinks
            </h2>
            <div className="w-16 h-px bg-[#8FAF9B]" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drinks.map((drink, index) => (
              <AnimatedSection key={drink.name} delay={index * 0.05}>
                <div className="p-6 bg-[#141414] border border-white/5 rounded-md group hover:border-[#8FAF9B]/30 transition-colors">
                  <p className="text-[#8FAF9B] text-xs tracking-wider uppercase mb-2">
                    {drink.category}
                  </p>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {drink.name}
                  </h3>
                  <p className="text-[#BDBDBD] text-sm">
                    {drink.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Operations</h2>
            <div className="w-16 h-px bg-[#8FAF9B]" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {operations.map((op, index) => (
              <AnimatedSection key={op.title} delay={index * 0.1}>
                <div className="p-8 bg-[#0F0F0F] border border-white/5 rounded-md text-center">
                  <op.icon className="w-10 h-10 text-[#8FAF9B] mx-auto mb-6" />
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {op.title}
                  </h3>
                  <p className="text-[#BDBDBD] text-sm">
                    {op.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="p-12 bg-[#141414] border border-white/5 rounded-md">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Partnership Opportunities
                  </h2>
                  <p className="text-[#BDBDBD] leading-relaxed mb-6">
                    Looking to feature Execute Beverage at your venue, event, or
                    office? We offer flexible partnership models for:
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["Event Catering", "Office Supply Programs", "Venue Partnerships", "Private Label"].map((item) => (
                      <li key={item} className="text-[#BDBDBD] text-sm flex items-center gap-3">
                        <span className="w-1 h-1 bg-[#8FAF9B] rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center lg:text-right">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-10 py-4 bg-[#8FAF9B] text-[#0F0F0F] font-semibold rounded-md hover-elevate flex items-center gap-2 mx-auto lg:ml-auto lg:mr-0"
                      data-testid="button-become-partner"
                    >
                      Become a Partner
                      <ArrowRight size={18} />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
