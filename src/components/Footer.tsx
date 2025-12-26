import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Instagram, Twitter, Youtube, Heart, Mail, CreditCard, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  shop: [
    { name: "New Arrivals", href: "#" },
    { name: "Best Sellers", href: "#" },
    { name: "Frequency Tools", href: "#" },
    { name: "Gift Sets", href: "#" },
    { name: "Sale", href: "#" },
  ],
  connect: [
    { name: "About Us", href: "#" },
    { name: "Our Story", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Community", href: "#" },
    { name: "Affiliates", href: "#" },
  ],
  support: [
    { name: "FAQ", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Track Order", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-purple/90 to-foreground" />
      
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-secondary-foreground/10">
          <div className="container mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4">
                Get Weekly Frequency Activations 🔮
              </h3>
              <p className="text-secondary-foreground/70 mb-8">
                Join 10K+ conscious creators receiving exclusive drops, rituals, and high-vibe content.
              </p>
              
              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-electric-yellow to-hot-pink text-primary-foreground rounded-full font-semibold"
                >
                  <Zap className="w-5 h-5" />
                  You're activated! Check your inbox.
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-3 bg-secondary-foreground/10 border border-secondary-foreground/20 rounded-full text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:border-electric-yellow focus:ring-2 focus:ring-electric-yellow/20 transition-all"
                      required
                    />
                  </div>
                  <Button variant="hero" type="submit" className="rounded-full">
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <motion.a
                href="/"
                className="inline-flex items-center gap-1 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <span className="font-display text-2xl font-bold text-secondary-foreground">
                  LGH<Zap className="inline w-6 h-6 text-electric-yellow" />NUP
                </span>
              </motion.a>
              <p className="text-secondary-foreground/70 text-sm mb-6">
                Frequency tools for your best life. Elevate, activate, transform.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, color: "hsl(var(--electric-yellow))" }}
                    className="p-2 rounded-full bg-secondary-foreground/10 text-secondary-foreground/70 hover:text-electric-yellow transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-display font-bold text-secondary-foreground mb-4">Shop</h4>
              <ul className="space-y-2">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-secondary-foreground mb-4">Connect</h4>
              <ul className="space-y-2">
                {footerLinks.connect.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-secondary-foreground mb-4">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-secondary-foreground/60 text-sm flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-hot-pink" fill="currentColor" /> for Conscious Creators
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-secondary-foreground/60 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-secondary-foreground/60" />
                  <span className="text-secondary-foreground/60 text-xs">Visa • Mastercard • PayPal • Klarna</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
