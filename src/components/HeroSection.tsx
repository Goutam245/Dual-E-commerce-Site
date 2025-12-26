import { motion } from "framer-motion";
import { Zap, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingShape = ({ 
  children, 
  delay = 0, 
  duration = 6,
  className = "" 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  duration?: number;
  className?: string;
}) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [-20, 20, -20],
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

const Particle = ({ delay = 0, left = "50%", top = "50%" }: { delay?: number; left?: string; top?: string }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-electric-yellow"
    style={{ left, top }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
      y: [-10, -30],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
  />
);

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-yellow/20 via-hot-pink/20 to-deep-purple/30 animate-gradient bg-[length:200%_200%]" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* Floating Geometric Shapes */}
      <FloatingShape delay={0} className="top-20 left-[10%]">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-yellow to-hot-pink opacity-60 blur-sm" />
      </FloatingShape>
      
      <FloatingShape delay={1} duration={8} className="top-40 right-[15%]">
        <Zap className="w-12 h-12 text-electric-yellow drop-shadow-lg" />
      </FloatingShape>
      
      <FloatingShape delay={2} className="bottom-40 left-[20%]">
        <Star className="w-10 h-10 text-hot-pink drop-shadow-lg" fill="currentColor" />
      </FloatingShape>
      
      <FloatingShape delay={0.5} duration={7} className="top-60 left-[5%]">
        <div className="w-8 h-8 rotate-45 bg-gradient-to-br from-deep-purple to-hot-pink opacity-70" />
      </FloatingShape>
      
      <FloatingShape delay={1.5} className="bottom-60 right-[10%]">
        <Sparkles className="w-14 h-14 text-deep-purple drop-shadow-lg" />
      </FloatingShape>
      
      <FloatingShape delay={3} duration={9} className="top-32 right-[30%]">
        <div className="w-6 h-6 rounded-full bg-hot-pink opacity-80" />
      </FloatingShape>

      {/* Particles */}
      {[...Array(12)].map((_, i) => (
        <Particle 
          key={i} 
          delay={i * 0.3} 
          left={`${10 + (i * 7)}%`} 
          top={`${20 + (i % 4) * 20}%`} 
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 mb-8"
          >
            <Sparkles className="w-4 h-4 text-electric-yellow" />
            <span className="text-sm font-medium text-foreground">Join 10K+ Activated Souls</span>
            <Sparkles className="w-4 h-4 text-hot-pink" />
          </motion.div>
        </motion.div>

        {/* Main Heading with Glitch Effect */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight mb-6"
        >
          <span className="gradient-text animate-flicker">LIGHT</span>
          <span className="block sm:inline"> </span>
          <span className="gradient-text animate-flicker" style={{ animationDelay: "0.1s" }}>IT</span>
          <span className="block sm:inline"> </span>
          <span className="gradient-text animate-flicker" style={{ animationDelay: "0.2s" }}>UP</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium mb-10 max-w-2xl mx-auto"
        >
          Frequency Tools for{" "}
          <span className="relative inline-block">
            <span className="text-foreground font-semibold">Your Best Life</span>
            <motion.span
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-electric-yellow to-hot-pink rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="hero" size="xl">
            <Zap className="w-5 h-5" />
            Start Elevating
          </Button>
          <Button variant="glass" size="lg">
            Take the Vibe Quiz
            <Sparkles className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-muted-foreground rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
