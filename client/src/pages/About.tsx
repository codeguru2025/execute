import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useSEO } from "@/hooks/use-seo";
import { MapPin, Target, Eye, Users, Quote, Briefcase } from "lucide-react";
import dubaiLuxury from "../assets/images/dubai-luxury.webp";

const founders = [
  {
    name: "Brighton Sibanda",
    role: "Founder & Beverage Specialist",
    bio: "5+ years in Dubai's hospitality industry. Worked with Avantcha, Bateel, Mawaheb Café, and Mugg & Bean.",
  },
  {
    name: "Handsome Sibanda",
    role: "Co-Founder",
    bio: "Strategic operations and business development across Africa and UAE markets.",
  },
  {
    name: "Augustus Siziba",
    role: "Co-Founder",
    bio: "Technology and growth systems expertise enabling cross-border business solutions.",
  },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every decision, every action—measured and intentional.",
  },
  {
    icon: Eye,
    title: "Clarity",
    description: "Cutting through noise to deliver what matters.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Building lasting relationships that create mutual value.",
  },
];

const experience = [
  { company: "Avantcha", desc: "Luxury tea house — mastered the art of detail and precision" },
  { company: "Bateel", desc: "Premium café culture — learned luxury presentation and service" },
  { company: "Mawaheb Café", desc: "Art studio café for people of determination — shaped leadership and purpose" },
  { company: "Mugg & Bean", desc: "Pre-opening projects in Dubai and South Africa — entrepreneurial foundation" },
];

const testimonials = [
  {
    quote: "Brighton made Mawaheb Café feel like home. It wasn't just about the coffee — it was about the way he connected with people and made everyone feel welcome.",
    author: "Guest, Dubai",
  },
  {
    quote: "I've watched Brighton grow from a young barista into a leader with vision. EXECUTE is the natural next step — a brand that combines his international experience with his deep sense of community.",
    author: "Russel Sanchez, Hospitality Mentor, UAE",
  },
];

export default function About() {
  useSEO({
    title: "About Us",
    description: "Learn about Execute Group's story, mission, vision, and founders. A Dubai-registered platform enabling business between Africa and the UAE.",
  });

  return (
    <Layout>
      <section className="min-h-[60vh] flex items-end relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${dubaiLuxury})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/70 to-black/40" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#D4A84B]/20 border border-[#D4A84B]/40 rounded-full text-[#D4A84B] text-sm font-medium tracking-wide mb-6">
              About Execute Group
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8">
              We don't just consult.<br />
              <span className="text-[#D4A84B]">We execute.</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Execute Group is a Dubai-registered business enablement platform
              helping individuals and companies launch, move, and scale between
              Africa and the UAE. We are not a services company—we are a platform company.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
              <div className="w-16 h-px bg-[#D4A84B] mb-8" />
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  EXECUTE was born out of a simple but powerful dream: to create experiences 
                  that spark moments, connections, and memories. The inspiration came from 
                  living between Dubai's fast-paced café culture and Africa's natural vibrance.
                </p>
                <p>
                  In Dubai, cafés are sleek, creative, and Instagram-worthy; back home, we saw 
                  the gap — locals and tourists alike were missing a modern, global-standard 
                  experience that still felt welcoming and personal.
                </p>
                <p>
                  The name EXECUTE carries our spirit: to stop waiting and start doing. To take 
                  a vision and turn it into reality. Today, we serve entrepreneurs, businesses, 
                  and individuals who demand execution over promises.
                </p>
                <p className="text-[#D4A84B] font-medium italic">
                  "Great moments don't just happen — they're executed."
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-12">
              <AnimatedSection delay={0.1}>
                <div className="p-8 bg-gradient-to-br from-[#D4A84B]/10 to-transparent border border-[#D4A84B]/20 rounded-md">
                  <h3 className="text-lg font-semibold text-[#D4A84B] mb-4">Mission</h3>
                  <p className="text-white">
                    To enable seamless business creation, growth, and mobility between Africa 
                    and the UAE through integrated technology, systems, premium experiences, 
                    and lifestyle brands that elevate everyday moments.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="p-8 bg-gradient-to-br from-[#D4A84B]/10 to-transparent border border-[#D4A84B]/20 rounded-md">
                  <h3 className="text-lg font-semibold text-[#D4A84B] mb-4">Vision</h3>
                  <p className="text-white">
                    To be the most trusted enablement platform for cross-border business and 
                    lifestyle solutions between Africa and the Middle East — known for creativity, 
                    quality, and conscious living.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Values
            </h2>
            <div className="w-16 h-px bg-[#D4A84B] mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="text-center p-8 border border-white/5 rounded-md hover:border-[#D4A84B]/30 transition-colors">
                  <value.icon className="w-10 h-10 text-[#D4A84B] mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Founders
            </h2>
            <div className="w-16 h-px bg-[#D4A84B] mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <AnimatedSection key={founder.name} delay={index * 0.1}>
                <div className="text-center p-8 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-md hover:border-[#D4A84B]/30 transition-colors">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#D4A84B]/30 to-[#D4A84B]/10 rounded-full mx-auto mb-6 flex items-center justify-center border border-[#D4A84B]/30">
                    <span className="text-2xl font-bold text-[#D4A84B]">
                      {founder.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-[#D4A84B] text-sm mb-4">
                    {founder.role}
                  </p>
                  <p className="text-white/60 text-sm">
                    {founder.bio}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="w-8 h-8 text-[#D4A84B]" />
              <h2 className="text-2xl font-bold text-white">Brighton's Journey</h2>
            </div>
            <div className="w-16 h-px bg-[#D4A84B]" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experience.map((exp, index) => (
              <AnimatedSection key={exp.company} delay={index * 0.1}>
                <div className="p-6 border-l-2 border-[#D4A84B]/30 hover:border-[#D4A84B] transition-colors">
                  <h3 className="text-lg font-semibold text-[#D4A84B] mb-2">{exp.company}</h3>
                  <p className="text-white/60 text-sm">{exp.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="mt-12 max-w-3xl">
            <p className="text-white/70 leading-relaxed">
              EXECUTE is the result of all these experiences. Every lesson — from the artistry 
              at Avantcha, the refinement at Bateel, the inclusivity at Mawaheb, and the 
              entrepreneurial spirit of Mugg & Bean — has been poured into this brand. The vision 
              is simple: to build experiences that feel world-class but also human, elegant but 
              still warm and welcoming.
            </p>
          </AnimatedSection>
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
                <div className="p-8 bg-gradient-to-br from-[#D4A84B]/10 to-transparent border border-[#D4A84B]/20 rounded-md h-full">
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
            <div className="flex items-start gap-6 max-w-2xl">
              <div className="p-3 bg-[#D4A84B]/10 rounded-md border border-[#D4A84B]/20">
                <MapPin className="w-8 h-8 text-[#D4A84B] flex-shrink-0" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Headquarters
                </h2>
                <div className="text-white/60 space-y-1">
                  <p>Dubai, United Arab Emirates</p>
                  <p className="text-[#D4A84B]">+971 50 835 9747</p>
                  <p>brighton.hendry@gmail.com</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
