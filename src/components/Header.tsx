import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Problems", href: "#pain-points" },
    { name: "Solutions", href: "#solutions" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Backend & DB", href: "#backend-db" },
    { name: "Our Services", href: "#offerings" },
    { name: "FAQs", href: "#faq" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-md shadow-md border-b border-red-900/50 py-3" 
          : "bg-black border-b border-red-900 py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-red-600 text-white border-b-2 border-red-500 shadow-sm transition-all duration-300 group-hover:bg-red-700">
              <Globe className="h-5 w-5 text-white group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold font-display tracking-tight text-white leading-none">
                ECOMDEV
              </span>
              <span className="text-[10px] font-bold font-mono tracking-widest text-red-400 uppercase mt-0.5 leading-none">
                AUSTRALIA
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-semibold text-zinc-100 hover:text-red-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center rounded-sm bg-red-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-red-700 transition-colors"
            >
              Consultation
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-sm border border-red-900 bg-black text-white hover:bg-red-900"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[65px] left-0 right-0 bottom-0 bg-black z-40 border-t border-red-900 flex flex-col p-6 animate-fade-in">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-white font-display pb-2 border-b border-red-900"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-6 w-full text-center inline-flex items-center justify-center rounded-sm bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-red-700"
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
