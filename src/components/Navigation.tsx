import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Zap, ShoppingBag, Menu, X, Sparkles, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Shop Vibes", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get time-based greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning, Lightworker ☀️";
    if (hour < 17) return "Good Afternoon, Lightworker ✨";
    return "Good Evening, Lightworker 🌙";
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-deep-purple via-hot-pink to-electric-yellow text-primary-foreground py-2 text-center text-sm font-medium">
        <span className="hidden sm:inline">{getGreeting()}</span>
        <span className="sm:hidden">✨ Free Shipping Over $75 ✨</span>
      </div>

      {/* Main Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-1 group"
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                <span className="text-foreground">LGH</span>
                <Zap className="inline w-6 h-6 sm:w-8 sm:h-8 text-electric-yellow animate-pulse" />
                <span className="text-foreground">NUP</span>
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-foreground font-medium transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-yellow to-hot-pink group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Moon Phase Indicator */}
              <div className="hidden md:flex items-center gap-1 text-muted-foreground text-sm">
                <Moon className="w-4 h-4" />
                <span className="text-xs">Waxing</span>
              </div>

              {/* Vibe Quiz CTA */}
              <Button variant="purple" size="sm" className="hidden sm:flex">
                <Sparkles className="w-4 h-4" />
                Vibe Quiz
              </Button>

              {/* Cart */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 rounded-full bg-card/50 hover:bg-card transition-colors"
              >
                <ShoppingBag className="w-5 h-5 text-foreground" />
                {cartCount > 0 && (
                  <motion.span
                    key={cartCount}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-hot-pink text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.button>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-card/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          className="lg:hidden overflow-hidden glass border-t border-border/50"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-foreground/80 hover:text-foreground font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="purple" className="w-full">
              <Sparkles className="w-4 h-4" />
              Take the Vibe Quiz
            </Button>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
};
