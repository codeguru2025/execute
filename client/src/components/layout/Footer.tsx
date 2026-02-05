import { Link } from "wouter";
import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Divisions", href: "/divisions" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Divisions",
    links: [
      { label: "Technology & Growth", href: "/technology-growth" },
      { label: "Events & Travel", href: "/events-travel" },
      { label: "Beverage", href: "/beverage" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0F0F0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Execute Group
              </h3>
              <p className="text-[#BDBDBD] text-sm leading-relaxed max-w-md mb-6">
                Dubai-registered business enablement platform helping individuals and companies 
                launch, move, and scale between Africa and the UAE. Sip. Spark. Execute.
              </p>
              <div className="text-sm text-[#BDBDBD]/70 space-y-1">
                <p>Dubai, United Arab Emirates</p>
                <p className="text-[#D4A84B]">+971 50 835 9747</p>
                <p>brighton.hendry@gmail.com</p>
              </div>
            </motion.div>
          </div>

          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <span
                        className="text-sm text-[#BDBDBD] hover:text-[#D4A84B] transition-colors cursor-pointer"
                        data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#BDBDBD]/60">
              © {new Date().getFullYear()} Execute Group. All rights reserved.
            </p>
            <p className="text-xs text-[#D4A84B]">
              Built to Execute.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
