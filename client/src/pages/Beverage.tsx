import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useSEO } from "@/hooks/use-seo";
import { ArrowRight, Leaf, Droplets, Coffee, Quote } from "lucide-react";
import beveragePremium from "../assets/images/beverage-premium.webp";

const drinks = [
  { name: "Classic Iced Matcha Latte", category: "Matcha", description: "Japanese matcha with oat or almond milk" },
  { name: "Matcha Vanilla Cloud", category: "Matcha", description: "Vanilla-infused matcha with a creamy layer" },
  { name: "Coconut Matcha Frappe", category: "Matcha", description: "Blended matcha with coconut cream" },
  { name: "Matcha Lemon Spark", category: "Matcha", description: "Sparkling lemonade with matcha infusion" },
  { name: "Strawberry Matcha Fusion", category: "Matcha", description: "Matcha layered with strawberry puree" },
  { name: "Tropical Sunrise", category: "Mocktail", description: "Passionfruit, mango, and pineapple blend" },
  { name: "Green Detox", category: "Juice", description: "Cucumber, apple, spinach, and lemon" },
  { name: "Berry Hibiscus Cooler", category: "Mocktail", description: "Hibiscus tea with berry syrup" },
  { name: "Lemon Mint Refresher", category: "Juice", description: "Classic lemon and mint, chilled and sealed" },
  { name: "Peach Paradise", category: "Mocktail", description: "Peach syrup with sparkling water and citrus" },
  { name: "Brown Sugar Milk Tea", category: "Bubble Tea", description: "Signature boba with brown sugar pearls" },
  { name: "Mango Tango Boba", category: "Bubble Tea", description: "Mango base with chewy tapioca" },
  { name: "Matcha Boba Latte", category: "Bubble Tea", description: "Matcha meets milk tea boba" },
  { name: "Caramel Cream Cold Brew", category: "Specialty", description: "Smooth coffee-based beverage" },
  { name: "Pink Dragon Lemonade", category: "Mocktail", description: "Dragon fruit and lemon mocktail blend" },
];

const operations = [
  {
    icon: Coffee,
    title: "Pop-ups",
    description: "Premium beverage experiences at events, venues, and high-traffic locations.",
  },
  {
    icon: Droplets,
    title: "Cloud Kitchen",
    description: "Delivery-first operations through Instagram, TikTok, and WhatsApp ordering.",
  },
  {
    icon: Leaf,
    title: "Event Supply",
    description: "Catering services for corporate events, offices, and private gatherings.",
  },
];

const testimonials = [
  {
    quote: "Brighton has a rare gift for turning every cup of tea into an experience. His attention to detail and passion for hospitality is something I've seen inspire both colleagues and guests.",
    author: "Team Leader, Avantcha Dubai",
  },
  {
    quote: "Victoria Falls is ready for something fresh and global, and EXECUTE is exactly that. It's not just another café — it's a lifestyle brand that will put our town on the map.",
    author: "Local Tourism Partner, Victoria Falls",
  },
];

export default function Beverage() {
  useSEO({
    title: "Execute Beverage",
    description: "Crafted clarity in every sip. Premium matcha, mocktails, juices, and bubble tea. 15 signature drinks designed for visual appeal, taste balance, and modern health values.",
  });

  return (
    <Layout>
      <section className="min-h-[50vh] flex items-end relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${beveragePremium})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/70 to-black/40" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#D4A84B]/20 border border-[#D4A84B]/40 rounded-full text-[#D4A84B] text-sm font-medium tracking-wide mb-6">
              Execute Beverage
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8">
              Crafted <span className="text-[#D4A84B]">Clarity</span><br />in Every Sip.
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Sip. Spark. Execute. — Modern beverages where mixology meets mindfulness, 
              crafted to energize, inspire, and create unforgettable moments.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">The Story</h2>
            <div className="w-16 h-px bg-[#D4A84B] mx-auto" />
          </AnimatedSection>

          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="text-white/70 leading-relaxed mb-6">
              EXECUTE was born out of a simple but powerful dream: to create a café space that 
              goes beyond just serving drinks — a place that sparks moments, connections, and memories. 
              The inspiration came from living between Dubai's fast-paced café culture and Africa's natural vibrance.
            </p>
            <p className="text-white/70 leading-relaxed mb-6">
              Our café concept is bold, modular, and sustainable — built inside container spaces that 
              symbolize adaptability, innovation, and eco-conscious design. With Victoria Falls welcoming 
              over 61,000 international visitors in Q1 2025 alone, we're positioned at the intersection of 
              tourism growth and the sober-curious movement — creating Instagram-worthy experiences for 
              wellness-focused consumers seeking premium non-alcoholic beverages.
            </p>
            <p className="text-white/70 leading-relaxed mb-6">
              For the traveler visiting Victoria Falls, it's a taste of global café culture in Africa. 
              For the local community, it's a gathering point to experience something new. 
              For everyone, EXECUTE is about creating those small but unforgettable moments.
            </p>
            <p className="text-[#D4A84B] font-medium italic">
              "Great moments don't just happen — they're executed."
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-32 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">
              15 Signature Drinks
            </h2>
            <p className="text-white/60 text-sm">
              Each drink crafted for visual appeal, taste balance, and modern health values
            </p>
            <div className="w-16 h-px bg-[#D4A84B] mt-4" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drinks.map((drink, index) => (
              <AnimatedSection key={drink.name} delay={index * 0.05}>
                <div className="p-6 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-md group hover:border-[#D4A84B]/30 transition-colors">
                  <p className="text-[#D4A84B] text-xs tracking-wider uppercase mb-2">
                    {drink.category}
                  </p>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {drink.name}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {drink.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">What Sets Us Apart</h2>
            <div className="w-16 h-px bg-[#D4A84B]" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Container Café Model", desc: "Modular, sustainable, and eco-conscious design that symbolizes adaptability and innovation" },
              { title: "Sober-Curious Movement", desc: "Catering to Gen Z & millennials choosing wellness, taste, and experience over alcohol" },
              { title: "Instagram-Worthy Design", desc: "Vibrant colors, garnishes, and visual appeal that drive social media engagement" },
              { title: "Health & Wellness Focus", desc: "Botanical infusions, fresh ingredients, and functional drinks for modern consumers" },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="p-6 border-l-2 border-[#D4A84B]/30 hover:border-[#D4A84B] transition-colors">
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Operations</h2>
            <div className="w-16 h-px bg-[#D4A84B]" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {operations.map((op, index) => (
              <AnimatedSection key={op.title} delay={index * 0.1}>
                <div className="p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-md text-center hover:border-[#D4A84B]/30 transition-colors">
                  <div className="p-3 bg-[#D4A84B]/10 rounded-md border border-[#D4A84B]/20 inline-block mb-6">
                    <op.icon className="w-6 h-6 text-[#D4A84B]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {op.title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {op.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">What People Say</h2>
            <div className="w-16 h-px bg-[#D4A84B] mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="p-8 bg-gradient-to-br from-[#D4A84B]/10 to-transparent border border-[#D4A84B]/20 rounded-md">
                  <Quote className="w-8 h-8 text-[#D4A84B]/40 mb-4" />
                  <p className="text-white/80 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-[#D4A84B] text-sm font-medium">
                    — {testimonial.author}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="p-12 bg-gradient-to-br from-[#D4A84B]/10 to-transparent border border-[#D4A84B]/20 rounded-md">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Partnership Opportunities
                  </h2>
                  <p className="text-white/70 leading-relaxed mb-6">
                    Looking to feature Execute Beverage at your venue, event, or
                    office? We offer flexible partnership models for:
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["Event Catering", "Office Supply Programs", "Venue Partnerships", "Cloud Kitchen Collaboration"].map((item) => (
                      <li key={item} className="text-white/60 text-sm flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#D4A84B] rounded-full" />
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
                      className="px-10 py-4 bg-[#D4A84B] text-black font-semibold rounded-md hover-elevate flex items-center gap-2 mx-auto lg:ml-auto lg:mr-0"
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
