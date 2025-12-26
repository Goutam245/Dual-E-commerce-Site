import { useState } from "react";
import { motion } from "framer-motion";
import { Volume2, Play, Pause, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const frequencies = [
  { hz: 396, name: "Liberation", color: "from-red-500 to-orange-500", benefit: "Release fear & guilt" },
  { hz: 417, name: "Change", color: "from-orange-500 to-yellow-500", benefit: "Facilitate change" },
  { hz: 432, name: "Peace", color: "from-green-400 to-teal-500", benefit: "Universal harmony" },
  { hz: 528, name: "Love", color: "from-teal-500 to-blue-500", benefit: "DNA repair & love" },
  { hz: 639, name: "Connection", color: "from-blue-500 to-indigo-500", benefit: "Relationships" },
  { hz: 741, name: "Expression", color: "from-indigo-500 to-purple-500", benefit: "Self-expression" },
  { hz: 852, name: "Intuition", color: "from-purple-500 to-pink-500", benefit: "Spiritual awakening" },
  { hz: 963, name: "Unity", color: "from-pink-500 to-red-500", benefit: "Divine connection" },
];

const WaveBar = ({ delay, isPlaying }: { delay: number; isPlaying: boolean }) => (
  <motion.div
    className="w-1 bg-gradient-to-t from-deep-purple to-hot-pink rounded-full"
    animate={isPlaying ? {
      height: [20, 60, 30, 80, 40, 20],
    } : { height: 20 }}
    transition={{
      duration: 1,
      delay: delay * 0.1,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

export const FrequencySection = () => {
  const [selectedFrequency, setSelectedFrequency] = useState(frequencies[3]); // 528Hz default
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="frequency" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/90 via-hot-pink/70 to-deep-purple/90" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-secondary-foreground mb-4">
            What's Your Frequency?
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            Explore the ancient wisdom of sound healing. Each frequency carries unique benefits for your mind, body, and soul.
          </p>
        </motion.div>

        {/* Wave Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-end justify-center gap-1 h-24 mb-8"
        >
          {[...Array(40)].map((_, i) => (
            <WaveBar key={i} delay={i} isPlaying={isPlaying} />
          ))}
        </motion.div>

        {/* Play Button */}
        <div className="text-center mb-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-3 px-6 py-3 bg-secondary-foreground/20 backdrop-blur-sm rounded-full border border-secondary-foreground/30 text-secondary-foreground font-semibold"
          >
            {isPlaying ? (
              <>
                <Pause className="w-5 h-5" fill="currentColor" />
                Pause {selectedFrequency.hz}Hz
              </>
            ) : (
              <>
                <Play className="w-5 h-5" fill="currentColor" />
                Play {selectedFrequency.hz}Hz
              </>
            )}
            <Volume2 className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Frequency Selector */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-3 mb-8">
            {frequencies.map((freq) => (
              <motion.button
                key={freq.hz}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFrequency(freq)}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  selectedFrequency.hz === freq.hz
                    ? `bg-gradient-to-br ${freq.color} shadow-lg`
                    : "bg-secondary-foreground/10 hover:bg-secondary-foreground/20"
                }`}
              >
                <span className="block text-lg font-bold text-secondary-foreground">{freq.hz}</span>
                <span className="block text-xs text-secondary-foreground/80">{freq.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Selected Frequency Info */}
          <motion.div
            key={selectedFrequency.hz}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center p-6 bg-secondary-foreground/10 backdrop-blur-sm rounded-2xl border border-secondary-foreground/20"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${selectedFrequency.color} mb-4`}>
              <span className="text-2xl font-bold text-secondary-foreground">{selectedFrequency.hz}Hz</span>
              <span className="text-secondary-foreground/90">• {selectedFrequency.name}</span>
            </div>
            <p className="text-xl text-secondary-foreground font-medium">{selectedFrequency.benefit}</p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="xl">
            <Sparkles className="w-5 h-5" />
            Take Our Vibe Quiz
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
