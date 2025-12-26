import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Heart, ShoppingBag, Minus, Plus, ChevronDown, ChevronUp, Star, Truck, Shield, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { getProductBySlug, getRelatedProducts, Product } from "@/data/products";

const EnergyRating = ({ rating, reviewCount }: { rating: number; reviewCount: number }) => (
  <div className="flex items-center gap-2">
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Zap
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-electric-yellow fill-electric-yellow" : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
    <span className="text-muted-foreground">({reviewCount} reviews)</span>
  </div>
);

interface AccordionItemProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const AccordionItem = ({ title, icon, children, defaultOpen = false }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left hover:text-deep-purple transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon}
          <span className="font-semibold">{title}</span>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="pb-4 text-muted-foreground">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

const RelatedProductCard = ({ product }: { product: Product }) => (
  <Link to={`/product/${product.slug}`}>
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
    >
      <div className="aspect-square overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h4 className="font-display font-bold text-card-foreground">{product.name}</h4>
        <p className="text-sm text-muted-foreground">${product.price}</p>
      </div>
    </motion.div>
  </Link>
);

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/shop">
            <Button variant="purple">Back to Shop</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center gap-2 text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link></li>
              <li>/</li>
              <li className="text-foreground">{product.name}</li>
            </ol>
          </nav>

          {/* Product Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Images */}
            <div className="space-y-4">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="aspect-square rounded-2xl overflow-hidden bg-card"
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? "border-deep-purple" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              {product.badge && (
                <span className={`inline-block px-3 py-1 text-sm font-bold rounded-full bg-gradient-to-r ${product.gradient} text-primary-foreground mb-4`}>
                  {product.badge}
                </span>
              )}

              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">{product.tagline}</p>

              <EnergyRating rating={product.rating} reviewCount={product.reviewCount} />

              <div className="my-6">
                <span className="text-sm text-muted-foreground">Invest in Your Frequency</span>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-4xl font-bold text-foreground">${product.price}</span>
                  {product.comparePrice && (
                    <span className="text-xl text-muted-foreground line-through">${product.comparePrice}</span>
                  )}
                  {product.comparePrice && (
                    <span className="px-2 py-1 bg-hot-pink/20 text-hot-pink text-sm font-semibold rounded">
                      Save ${product.comparePrice - product.price}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{product.description}</p>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="px-6 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                <Button variant="hero" size="xl" className="flex-grow">
                  <ShoppingBag className="w-5 h-5" />
                  Elevate My Life — ${product.price * quantity}
                </Button>

                <Button
                  variant="glass"
                  size="icon"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="w-14 h-14"
                >
                  <Heart className={`w-6 h-6 ${isWishlisted ? "fill-hot-pink text-hot-pink" : ""}`} />
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8 p-4 bg-soft-lavender/50 rounded-xl">
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="w-5 h-5 text-deep-purple" />
                  <span>Free shipping over $75</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-5 h-5 text-deep-purple" />
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <RotateCcw className="w-5 h-5 text-deep-purple" />
                  <span>30-day returns</span>
                </div>
              </div>

              {/* Accordion */}
              <div className="border-t border-border">
                <AccordionItem
                  title="What It Does"
                  icon={<Zap className="w-5 h-5 text-electric-yellow" />}
                  defaultOpen
                >
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-electric-yellow mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </AccordionItem>

                {product.ingredients && (
                  <AccordionItem
                    title="Ingredients"
                    icon={<span className="text-lg">🌿</span>}
                  >
                    <ul className="space-y-1">
                      {product.ingredients.map((ing, idx) => (
                        <li key={idx}>• {ing}</li>
                      ))}
                    </ul>
                  </AccordionItem>
                )}

                <AccordionItem
                  title="How to Use"
                  icon={<span className="text-lg">🔮</span>}
                >
                  <ol className="space-y-2">
                    {product.howToUse.map((step, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-deep-purple/20 text-deep-purple flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {idx + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </AccordionItem>

                <AccordionItem
                  title="Shipping & Returns"
                  icon={<span className="text-lg">📦</span>}
                >
                  <p>Free shipping on orders over $75. Standard shipping takes 3-5 business days.</p>
                  <p className="mt-2">We offer a 30-day satisfaction guarantee. If you're not completely aligned with your purchase, return it for a full refund.</p>
                </AccordionItem>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section>
              <h2 className="font-display text-3xl font-bold gradient-text mb-8 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-electric-yellow" />
                Pairs Well With
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedProducts.map((rp) => (
                  <RelatedProductCard key={rp.id} product={rp} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;
