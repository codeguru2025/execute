import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useSEO } from "@/hooks/use-seo";
import { MapPin, Target, Eye, Users } from "lucide-react";

const founders = [
  {
    name: "Brighton Sibanda",
    role: "Co-Founder",
  },
  {
    name: "Handsome Sibanda",
    role: "Co-Founder",
  },
  {
    name: "Augustus Siziba",
    role: "Co-Founder",
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

export default function About() {
  useSEO({
    title: "About Us",
    description: "Learn about Execute Group's story, mission, vision, and founders. A Dubai-registered platform enabling business between Africa and the UAE.",
  });

  return (
    <Layout>
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <p className="text-[#8FAF9B] text-sm tracking-[0.2em] uppercase mb-6">
              About Execute Group
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8">
              We don't just consult.<br />
              We execute.
            </h1>
            <p className="text-lg text-[#BDBDBD] leading-relaxed">
              Execute Group is a Dubai-registered business enablement platform
              helping individuals and companies launch, move, and scale between
              Africa and the UAE. We are not a services company—we are a platform company.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-32 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-6 text-[#BDBDBD] leading-relaxed">
                <p>
                  Founded in Dubai, Execute Group emerged from a simple observation:
                  the immense potential between African markets and the UAE remained
                  largely untapped due to fragmented services and lack of integrated
                  solutions.
                </p>
                <p>
                  We built Execute Group to be the definitive bridge—combining
                  technology, business systems, travel, events, and lifestyle brands
                  into a single, cohesive platform that delivers results.
                </p>
                <p>
                  Today, we serve entrepreneurs, businesses, and individuals who
                  demand execution over promises. Our institutional approach ensures
                  every engagement is backed by systems, not just intentions.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-12">
              <AnimatedSection delay={0.1}>
                <div className="p-8 bg-[#0F0F0F] border border-white/5 rounded-md">
                  <h3 className="text-lg font-semibold text-[#8FAF9B] mb-4">Mission</h3>
                  <p className="text-white">
                    To enable seamless business creation, growth, and mobility
                    between Africa and the UAE through integrated technology,
                    systems, and premium experiences.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="p-8 bg-[#0F0F0F] border border-white/5 rounded-md">
                  <h3 className="text-lg font-semibold text-[#8FAF9B] mb-4">Vision</h3>
                  <p className="text-white">
                    To be the most trusted enablement platform for cross-border
                    business and lifestyle solutions between Africa and the Middle East.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Values
            </h2>
            <div className="w-16 h-px bg-[#8FAF9B] mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="text-center p-8">
                  <value.icon className="w-10 h-10 text-[#8FAF9B] mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[#BDBDBD] text-sm">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Founders
            </h2>
            <div className="w-16 h-px bg-[#8FAF9B] mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <AnimatedSection key={founder.name} delay={index * 0.1}>
                <div className="text-center p-8 bg-[#0F0F0F] border border-white/5 rounded-md">
                  <div className="w-20 h-20 bg-[#8FAF9B]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#8FAF9B]">
                      {founder.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-[#BDBDBD] text-sm">
                    {founder.role}
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
            <div className="flex items-start gap-6 max-w-2xl">
              <MapPin className="w-8 h-8 text-[#8FAF9B] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Headquarters
                </h2>
                <div className="text-[#BDBDBD] space-y-1">
                  <p>Office No: BC-889841</p>
                  <p>26th Floor, Amber Gem Tower</p>
                  <p>Sheikh Khalifa Street</p>
                  <p>Ajman, UAE</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
