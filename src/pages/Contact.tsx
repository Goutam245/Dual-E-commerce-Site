import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold gradient-text mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              {isSubmitted ? (
                <div className="bg-gradient-to-br from-electric-yellow/20 to-hot-pink/20 p-8 rounded-2xl text-center">
                  <h3 className="font-display text-2xl font-bold mb-4">Message Sent! ✨</h3>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-deep-purple/20" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-deep-purple/20" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input type="text" required value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-deep-purple/20" placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-deep-purple/20 resize-none" placeholder="Your message..." />
                  </div>
                  <Button variant="hero" size="xl" type="submit" className="w-full">
                    <Send className="w-5 h-5" /> Send Message
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-8">
              <div className="bg-card p-6 rounded-2xl">
                <h3 className="font-display text-xl font-bold mb-4">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4"><Mail className="w-5 h-5 text-deep-purple" /><span>hello@lghtnup.com</span></div>
                  <div className="flex items-center gap-4"><Phone className="w-5 h-5 text-deep-purple" /><span>+1 (555) 123-4567</span></div>
                  <div className="flex items-center gap-4"><MapPin className="w-5 h-5 text-deep-purple" /><span>Los Angeles, CA</span></div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-2xl">
                <h3 className="font-display text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="p-3 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-secondary-foreground hover:scale-110 transition-transform"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="p-3 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-secondary-foreground hover:scale-110 transition-transform"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="p-3 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-secondary-foreground hover:scale-110 transition-transform"><Youtube className="w-5 h-5" /></a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-deep-purple to-hot-pink p-6 rounded-2xl text-secondary-foreground">
                <h3 className="font-display text-xl font-bold mb-2">Support Hours</h3>
                <p className="text-secondary-foreground/80">Mon - Fri: 9am - 6pm PST</p>
                <p className="text-secondary-foreground/80">We respond within 24 hours</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
