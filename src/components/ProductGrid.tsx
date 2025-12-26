import { motion } from "framer-motion";
import { Zap, Star, Heart, ShoppingBag, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  tagline: string;
  price: number;
  image: string;
  rating: number;
  badge?: string;
  gradient: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Frequency Elixir",
    tagline: "Activate Your Flow State",
    price: 48,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=500&fit=crop",
    rating: 5,
    badge: "Best Seller",
    gradient: "from-electric-yellow to-hot-pink",
  },
  {
    id: 2,
    name: "Crystal Sound Bowl",
    tagline: "528Hz Love Frequency",
    price: 189,
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&h=600&fit=crop",
    rating: 5,
    badge: "New Frequency",
    gradient: "from-deep-purple to-hot-pink",
  },
  {
    id: 3,
    name: "Aura Mist",
    tagline: "Clear Your Energy Field",
    price: 32,
    image: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=450&fit=crop",
    rating: 4,
    gradient: "from-hot-pink to-deep-purple",
  },
  {
    id: 4,
    name: "Manifestation Journal",
    tagline: "Script Your Reality",
    price: 28,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=550&fit=crop",
    rating: 5,
    badge: "Limited Drop",
    gradient: "from-electric-yellow to-deep-purple",
  },
  {
    id: 5,
    name: "Chakra Balancing Kit",
    tagline: "7 Stones for 7 Centers",
    price: 75,
    image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&h=480&fit=crop",
    rating: 5,
    gradient: "from-deep-purple via-hot-pink to-electric-yellow",
  },
  {
    id: 6,
    name: "Energy Candle Set",
    tagline: "Intention-Infused Light",
    price: 42,
    image: "https://images.unsplash.com/photo-1602607434047-f12a3baedd20?w=400&h=520&fit=crop",
    rating: 4,
    badge: "New Frequency",
    gradient: "from-hot-pink to-electric-yellow",
  },
];

const EnergyRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Zap
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-electric-yellow fill-electric-yellow" : "text-muted-foreground/30"
        }`}
      />
    ))}
  </div>
);

const ProductCard = ({ product, index }: { product: Product; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group relative"
  >
    {/* Gradient Border */}
    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-0.5 blur-sm`} />
    
    <div className="relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${product.gradient} text-primary-foreground`}>
            {product.badge}
          </span>
        </div>
      )}

      {/* Quick Actions (Visible on Hover) */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-card/90 backdrop-blur-sm shadow-md hover:bg-card transition-colors"
        >
          <Heart className="w-4 h-4 text-hot-pink" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-card/90 backdrop-blur-sm shadow-md hover:bg-card transition-colors"
        >
          <Eye className="w-4 h-4 text-deep-purple" />
        </motion.button>
      </div>

      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <EnergyRating rating={product.rating} />
        <h3 className="font-display text-lg font-bold mt-2 text-card-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{product.tagline}</p>
        
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-xs text-muted-foreground">Investment:</span>
            <p className="text-xl font-bold text-card-foreground">${product.price}</p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Button variant="glow" size="sm">
              <ShoppingBag className="w-4 h-4" />
              Add to Ritual
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);

export const ProductGrid = () => {
  return (
    <section id="products" className="py-20 bg-soft-lavender/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-deep-purple font-accent text-lg mb-4">
            <Star className="w-5 h-5" fill="currentColor" />
            Curated for Your Journey
            <Star className="w-5 h-5" fill="currentColor" />
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4">
            Shop the Vibes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each product is intentionally designed to elevate your frequency and support your highest self.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="purple" size="xl">
            View All Products
            <Zap className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
