import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/hooks/use-seo";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  useSEO({
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist or has been moved.",
  });

  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-8xl font-bold text-[#8FAF9B]/20 mb-4">404</p>
            <h1 className="text-3xl font-bold text-white mb-4">
              Page Not Found
            </h1>
            <p className="text-[#BDBDBD] mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-white text-[#0F0F0F] font-medium rounded-md hover-elevate flex items-center gap-2 mx-auto"
                data-testid="button-back-home"
              >
                <ArrowLeft size={18} />
                Back to Home
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
