import { Link, useLocation } from "wouter";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/EXECUTE_LOGO_1770211576197.jpeg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/divisions", label: "Divisions" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F]/90 backdrop-blur-md border-b border-white/5"
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-home-logo">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3"
            >
              <img
                src={logoImage}
                alt="Execute Group"
                className="h-10 w-auto object-contain"
              />
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.span
                  whileHover={{ opacity: 1 }}
                  className={`text-sm tracking-wide transition-colors cursor-pointer ${
                    location === link.href
                      ? "text-white"
                      : "text-[#BDBDBD] hover:text-white"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F0F0F] border-t border-white/5"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 text-lg ${
                      location === link.href
                        ? "text-white"
                        : "text-[#BDBDBD]"
                    }`}
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
