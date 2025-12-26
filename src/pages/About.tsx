import { motion } from "framer-motion";
import { Heart, Sparkles, Leaf, Users, Star, Zap } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import founderImage from "@/assets/founder.jpg";
import teamImage from "@/assets/about-team.jpg";

const values = [
  { icon: Heart, title: "Love-Infused", description: "Every product is created with intention and high vibrations." },
  { icon: Leaf, title: "Ethically Sourced", description: "We trace every ingredient to its origin with care." },
  { icon: Users, title: "Community First", description: "We're building a movement, not just a brand." },
  { icon: Sparkles, title: "High Frequency", description: "Only the purest, highest-vibe ingredients make the cut." },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-soft-lavender via-background to-soft-lavender">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-5xl md:text-7xl font-bold gradient-text mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe everyone deserves access to tools that elevate their frequency and unlock their highest potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={founderImage} alt="Founder" className="rounded-2xl shadow-xl" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-deep-purple font-accent text-lg">Meet the Founder</span>
              <h2 className="font-display text-4xl font-bold mt-2 mb-6">From Burnout to Breakthrough</h2>
              <p className="text-muted-foreground mb-4">
                LGHTNUP was born from a personal transformation. After years of corporate burnout, our founder discovered the power of frequency healing, crystal energy, and intentional living.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as a personal journey became a mission: to make high-frequency wellness tools accessible to everyone seeking to elevate their life.
              </p>
              <p className="text-muted-foreground">
                Today, LGHTNUP serves over 10,000 conscious creators worldwide, helping them activate their highest selves through curated frequency tools.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-soft-lavender/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold gradient-text text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-card p-6 rounded-2xl text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-electric-yellow to-hot-pink flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold gradient-text mb-6">The LGHTNUP Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">A collective of healers, creators, and dreamers united by one mission: helping you light up.</p>
          <img src={teamImage} alt="Our Team" className="rounded-2xl shadow-xl mx-auto" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
