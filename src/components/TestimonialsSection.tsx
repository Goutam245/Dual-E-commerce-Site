import { motion } from "framer-motion";
import { Quote, Zap } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "LGHTNUP literally changed my morning routine. I feel so much more aligned and ready to manifest my dreams!",
    name: "Sarah M.",
    story: "Went from anxious mornings to peaceful rituals",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
    gradient: "from-electric-yellow to-hot-pink",
  },
  {
    id: 2,
    quote: "The Crystal Sound Bowl is EVERYTHING. My meditation practice has reached new depths I never knew possible.",
    name: "Marcus T.",
    story: "Meditation practice transformed completely",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
    gradient: "from-deep-purple to-hot-pink",
  },
  {
    id: 3,
    quote: "Found my soul tribe here. The community is so supportive and the products are next level quality.",
    name: "Luna K.",
    story: "Connected with like-minded souls",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    gradient: "from-hot-pink to-deep-purple",
  },
];

const EnergyMeter = ({ level }: { level: number }) => (
  <div className="flex gap-1 items-end h-8">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ height: 0 }}
        whileInView={{ height: i < level ? `${(i + 1) * 20}%` : "20%" }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1, duration: 0.4 }}
        className={`w-2 rounded-full ${
          i < level 
            ? "bg-gradient-to-t from-electric-yellow to-hot-pink" 
            : "bg-muted"
        }`}
        style={{ minHeight: "8px" }}
      />
    ))}
  </div>
);

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-soft-lavender/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Transformation Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Real people, real frequency shifts, real results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-0.5 blur-sm`} />
              
              <div className="relative bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-muted-foreground/30 mb-4" />
                
                {/* Quote */}
                <p className="text-card-foreground font-medium text-lg mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>
                
                {/* User Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-full blur-sm opacity-60`} />
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="relative w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="font-display font-bold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.story}</p>
                  </div>
                  <EnergyMeter level={testimonial.rating} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
