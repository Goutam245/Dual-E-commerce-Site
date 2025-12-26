import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Star, Heart, ShoppingBag, Eye, Filter, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { products, categories, Product } from "@/data/products";

const EnergyRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Zap
        key={i}
        className={`w-3 h-3 ${
          i < rating ? "text-electric-yellow fill-electric-yellow" : "text-muted-foreground/30"
        }`}
      />
    ))}
  </div>
);

const ProductCard = ({ product, index }: { product: Product; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05, duration: 0.4 }}
    className="group relative"
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-0.5 blur-sm`} />
    
    <div className="relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
      {product.badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className={`px-2 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${product.gradient} text-primary-foreground`}>
            {product.badge}
          </span>
        </div>
      )}

      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-card/90 backdrop-blur-sm shadow-md hover:bg-card transition-colors"
        >
          <Heart className="w-4 h-4 text-hot-pink" />
        </motion.button>
        <Link to={`/product/${product.slug}`}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-card/90 backdrop-blur-sm shadow-md hover:bg-card transition-colors"
          >
            <Eye className="w-4 h-4 text-deep-purple" />
          </motion.button>
        </Link>
      </div>

      <Link to={`/product/${product.slug}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      <div className="p-4">
        <EnergyRating rating={product.rating} />
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-display text-base font-bold mt-2 text-card-foreground hover:text-deep-purple transition-colors">{product.name}</h3>
        </Link>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{product.tagline}</p>
        
        <div className="flex items-center justify-between mt-3">
          <div>
            <span className="text-xs text-muted-foreground">From</span>
            <div className="flex items-center gap-2">
              <p className="text-lg font-bold text-card-foreground">${product.price}</p>
              {product.comparePrice && (
                <p className="text-sm text-muted-foreground line-through">${product.comparePrice}</p>
              )}
            </div>
          </div>
          
          <Button variant="glow" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity text-xs px-3">
            <ShoppingBag className="w-3 h-3" />
            Add
          </Button>
        </div>
      </div>
    </div>
  </motion.div>
);

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = products
    .filter(p => selectedCategory === "all" || p.category === selectedCategory)
    .filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return b.featured ? 1 : -1;
    });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-soft-lavender via-background to-soft-lavender">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 text-deep-purple font-accent text-lg mb-4">
              <Star className="w-5 h-5" fill="currentColor" />
              Curated for Your Journey
              <Star className="w-5 h-5" fill="currentColor" />
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold gradient-text mb-4">
              Shop the Vibes
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each product is intentionally designed to elevate your frequency and support your highest self.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-deep-purple/20 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? "bg-gradient-to-r from-deep-purple to-hot-pink text-secondary-foreground"
                      : "bg-card border border-border hover:border-deep-purple/50"
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-4 pr-10 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-deep-purple/20 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground mb-6">
            Showing {filteredProducts.length} products
          </p>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
              <Button variant="purple" className="mt-4" onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShopPage;
