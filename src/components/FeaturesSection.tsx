import { motion } from "framer-motion";
import { Leaf, Heart, Truck, Sparkles, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Ethically Sourced",
    description: "Every ingredient traced to its origin",
    gradient: "from-green-400 to-teal-500",
    size: "col-span-1 row-span-1",
  },
  {
    icon: Heart,
    title: "Intentionally Made",
    description: "Infused with love and high vibrations",
    gradient: "from-hot-pink to-deep-purple",
    size: "col-span-1 row-span-2 lg:row-span-1",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $75",
    gradient: "from-electric-yellow to-orange-500",
    size: "col-span-1 row-span-1",
  },
  {
    icon: Users,
    title: "10K+ Community",
    description: "Join activated souls worldwide",
    gradient: "from-deep-purple to-blue-500",
    size: "col-span-1 lg:col-span-2 row-span-1",
  },
  {
    icon: Shield,
    title: "Satisfaction Guaranteed",
    description: "30-day energy-back promise",
    gradient: "from-teal-400 to-green-500",
    size: "col-span-1 row-span-1",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Only the highest frequency ingredients",
    gradient: "from-electric-yellow via-hot-pink to-deep-purple",
    size: "col-span-1 row-span-1",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Why Choose LGHTNUP?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We're more than a brand—we're a movement for conscious creators.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`${feature.size} relative group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className="relative h-full p-6 bg-card rounded-2xl border border-border/50 hover:border-transparent hover:shadow-xl transition-all duration-300 flex flex-col justify-center">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} w-fit mb-4`}
                >
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <h3 className="font-display text-lg font-bold text-card-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
