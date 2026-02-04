import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
