// Product images
import frequencyElixir from "@/assets/products/frequency-elixir.jpg";
import crystalBowl from "@/assets/products/crystal-bowl.jpg";
import auraMist from "@/assets/products/aura-mist.jpg";
import manifestationJournal from "@/assets/products/manifestation-journal.jpg";
import chakraKit from "@/assets/products/chakra-kit.jpg";
import energyCandles from "@/assets/products/energy-candles.jpg";
import sageBundle from "@/assets/products/sage-bundle.jpg";
import roseRoller from "@/assets/products/rose-roller.jpg";
import meditationCushion from "@/assets/products/meditation-cushion.jpg";
import diffuser from "@/assets/products/diffuser.jpg";

export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  price: number;
  comparePrice?: number;
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  badge?: string;
  gradient: string;
  category: string;
  benefits: string[];
  ingredients?: string[];
  howToUse: string[];
  pairsWith: string[];
  inStock: boolean;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Frequency Elixir",
    slug: "frequency-elixir",
    tagline: "Activate Your Flow State",
    description: "Our signature blend of adaptogenic herbs and flower essences designed to harmonize your energy field and activate your highest potential. Each drop is infused with 528Hz frequency for DNA repair and cellular regeneration.",
    price: 48,
    comparePrice: 65,
    image: frequencyElixir,
    images: [frequencyElixir, frequencyElixir, frequencyElixir],
    rating: 5,
    reviewCount: 234,
    badge: "Best Seller",
    gradient: "from-electric-yellow to-hot-pink",
    category: "elixirs",
    benefits: [
      "Enhances mental clarity and focus",
      "Supports emotional balance",
      "Activates flow state consciousness",
      "Promotes cellular regeneration"
    ],
    ingredients: [
      "Organic Ashwagandha Root",
      "Reishi Mushroom Extract",
      "Rose Flower Essence",
      "Frankincense Essential Oil",
      "Crystal-Infused Spring Water"
    ],
    howToUse: [
      "Take 7 drops under tongue morning and evening",
      "Hold in mouth for 30 seconds before swallowing",
      "Set your intention while taking",
      "Best taken during meditation or breathwork"
    ],
    pairsWith: ["crystal-sound-bowl", "manifestation-journal", "aura-mist"],
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Crystal Sound Bowl",
    slug: "crystal-sound-bowl",
    tagline: "528Hz Love Frequency",
    description: "Hand-crafted from pure quartz crystal, this singing bowl produces the sacred 528Hz frequency known as the 'Love Frequency'. Perfect for meditation, sound healing, and space clearing rituals.",
    price: 189,
    image: crystalBowl,
    images: [crystalBowl, crystalBowl, crystalBowl],
    rating: 5,
    reviewCount: 156,
    badge: "New Frequency",
    gradient: "from-deep-purple to-hot-pink",
    category: "sound-healing",
    benefits: [
      "Produces healing 528Hz frequency",
      "Clears negative energy from spaces",
      "Deepens meditation practice",
      "Promotes relaxation and stress relief"
    ],
    howToUse: [
      "Place bowl on included cushion or hold in palm",
      "Use wooden mallet to gently strike or circle the rim",
      "Allow sound to fill the space for 3-5 minutes",
      "Breathe deeply and set intentions"
    ],
    pairsWith: ["frequency-elixir", "meditation-cushion", "sage-bundle"],
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Aura Mist",
    slug: "aura-mist",
    tagline: "Clear Your Energy Field",
    description: "A sacred blend of rose water, sage, and high-vibration essential oils to instantly cleanse and protect your aura. Perfect for use between clients, after difficult conversations, or anytime you need an energy reset.",
    price: 32,
    image: auraMist,
    images: [auraMist, auraMist, auraMist],
    rating: 4,
    reviewCount: 312,
    gradient: "from-hot-pink to-deep-purple",
    category: "cleansing",
    benefits: [
      "Instantly clears negative energy",
      "Creates protective energy shield",
      "Uplifts mood and vibration",
      "Leaves skin feeling refreshed"
    ],
    ingredients: [
      "Rose Hydrosol",
      "White Sage Extract",
      "Palo Santo Essential Oil",
      "Clear Quartz Crystal Essence",
      "Moonwater"
    ],
    howToUse: [
      "Shake well before use",
      "Mist around your body and energy field",
      "Spray in corners of rooms to clear space",
      "Use before meditation or energy work"
    ],
    pairsWith: ["sage-bundle", "frequency-elixir", "chakra-kit"],
    inStock: true,
    featured: false,
  },
  {
    id: "4",
    name: "Manifestation Journal",
    slug: "manifestation-journal",
    tagline: "Script Your Reality",
    description: "A beautifully designed guided journal featuring moon phase tracking, gratitude prompts, and manifestation scripting exercises. The cover is adorned with gold-foil moon phases and crafted from vegan leather.",
    price: 28,
    image: manifestationJournal,
    images: [manifestationJournal, manifestationJournal, manifestationJournal],
    rating: 5,
    reviewCount: 445,
    badge: "Limited Drop",
    gradient: "from-electric-yellow to-deep-purple",
    category: "rituals",
    benefits: [
      "Structured manifestation practice",
      "Moon phase guidance for timing",
      "Gratitude cultivation",
      "Vision clarification"
    ],
    howToUse: [
      "Write your intentions on new moons",
      "Script your desires as if already true",
      "Review and release on full moons",
      "Practice daily gratitude entries"
    ],
    pairsWith: ["energy-candles", "frequency-elixir", "chakra-kit"],
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    name: "Chakra Balancing Kit",
    slug: "chakra-kit",
    tagline: "7 Stones for 7 Centers",
    description: "A complete chakra balancing set featuring seven carefully selected crystals, one for each energy center. Includes a velvet pouch, crystal guide, and chakra meditation audio.",
    price: 75,
    image: chakraKit,
    images: [chakraKit, chakraKit, chakraKit],
    rating: 5,
    reviewCount: 189,
    gradient: "from-deep-purple via-hot-pink to-electric-yellow",
    category: "crystals",
    benefits: [
      "Balances all 7 chakra centers",
      "Promotes energy flow",
      "Supports emotional healing",
      "Enhances meditation practice"
    ],
    howToUse: [
      "Lay crystals on corresponding chakra points",
      "Meditate for 15-20 minutes",
      "Cleanse crystals under moonlight monthly",
      "Carry stones for daily support"
    ],
    pairsWith: ["crystal-sound-bowl", "sage-bundle", "meditation-cushion"],
    inStock: true,
    featured: true,
  },
  {
    id: "6",
    name: "Energy Candle Set",
    slug: "energy-candles",
    tagline: "Intention-Infused Light",
    description: "Three hand-poured soy candles infused with essential oils and crystal energy. Set includes: Manifestation (citrine-infused), Love (rose quartz-infused), and Protection (black tourmaline-infused).",
    price: 42,
    image: energyCandles,
    images: [energyCandles, energyCandles, energyCandles],
    rating: 4,
    reviewCount: 267,
    badge: "New Frequency",
    gradient: "from-hot-pink to-electric-yellow",
    category: "rituals",
    benefits: [
      "Creates sacred atmosphere",
      "Crystal-infused for energy",
      "Clean-burning soy wax",
      "Long 40-hour burn time each"
    ],
    ingredients: [
      "100% Organic Soy Wax",
      "Pure Essential Oil Blend",
      "Cotton Wick",
      "Crystal Chips",
      "Dried Botanicals"
    ],
    howToUse: [
      "Set your intention before lighting",
      "Burn for at least 2 hours first use",
      "Trim wick to 1/4 inch before each use",
      "Never leave unattended"
    ],
    pairsWith: ["manifestation-journal", "aura-mist", "sage-bundle"],
    inStock: true,
    featured: false,
  },
  {
    id: "7",
    name: "Sacred Sage Bundle",
    slug: "sage-bundle",
    tagline: "Ancient Cleansing Ritual",
    description: "Ethically harvested white sage bundled with dried lavender and rose petals for a gentler, more fragrant cleansing experience. Perfect for clearing spaces, objects, and personal energy.",
    price: 18,
    image: sageBundle,
    images: [sageBundle, sageBundle, sageBundle],
    rating: 5,
    reviewCount: 523,
    gradient: "from-green-400 to-teal-500",
    category: "cleansing",
    benefits: [
      "Clears negative energy",
      "Purifies spaces and objects",
      "Creates sacred atmosphere",
      "Natural antimicrobial properties"
    ],
    howToUse: [
      "Open windows for smoke to carry away energy",
      "Light the bundle and let it smolder",
      "Wave smoke around space or body",
      "Extinguish in sand or fireproof dish"
    ],
    pairsWith: ["aura-mist", "chakra-kit", "energy-candles"],
    inStock: true,
    featured: false,
  },
  {
    id: "8",
    name: "Rose Quartz Gua Sha Set",
    slug: "rose-roller",
    tagline: "Self-Love Beauty Ritual",
    description: "Premium rose quartz facial roller and gua sha set for lymphatic drainage, reducing puffiness, and promoting radiant skin. Rose quartz carries the frequency of unconditional love.",
    price: 45,
    image: roseRoller,
    images: [roseRoller, roseRoller, roseRoller],
    rating: 5,
    reviewCount: 398,
    badge: "Best Seller",
    gradient: "from-pink-300 to-hot-pink",
    category: "beauty",
    benefits: [
      "Reduces facial puffiness",
      "Promotes lymphatic drainage",
      "Enhances product absorption",
      "Infused with love frequency"
    ],
    howToUse: [
      "Store in freezer for extra de-puffing",
      "Apply serum or oil to clean face",
      "Roll outward from center of face",
      "Use gua sha in upward strokes"
    ],
    pairsWith: ["aura-mist", "meditation-cushion", "frequency-elixir"],
    inStock: true,
    featured: true,
  },
  {
    id: "9",
    name: "Meditation Cushion",
    slug: "meditation-cushion",
    tagline: "Ground Your Practice",
    description: "Luxuriously soft velvet zafu meditation cushion filled with organic buckwheat hulls for perfect support. Features a gold tassel and removable, washable cover.",
    price: 68,
    image: meditationCushion,
    images: [meditationCushion, meditationCushion, meditationCushion],
    rating: 5,
    reviewCount: 145,
    gradient: "from-pink-400 to-rose-500",
    category: "meditation",
    benefits: [
      "Ergonomic hip elevation",
      "Organic buckwheat hull filling",
      "Washable velvet cover",
      "Perfect for all body types"
    ],
    howToUse: [
      "Sit on edge for hip elevation",
      "Adjust filling for comfort",
      "Use with zabuton mat for extra cushioning",
      "Wash cover monthly"
    ],
    pairsWith: ["crystal-sound-bowl", "sage-bundle", "frequency-elixir"],
    inStock: true,
    featured: false,
  },
  {
    id: "10",
    name: "Ceramic Aroma Diffuser",
    slug: "diffuser",
    tagline: "Sacred Scent Ritual",
    description: "Handcrafted ceramic ultrasonic diffuser with geometric sacred patterns. Features 7 LED color modes, auto shut-off, and whisper-quiet operation. Transforms any space into a sanctuary.",
    price: 55,
    image: diffuser,
    images: [diffuser, diffuser, diffuser],
    rating: 4,
    reviewCount: 234,
    gradient: "from-teal-400 to-green-500",
    category: "aromatherapy",
    benefits: [
      "Ultrasonic mist technology",
      "7 chakra LED colors",
      "4-hour auto shut-off",
      "Whisper-quiet operation"
    ],
    howToUse: [
      "Fill with water to line",
      "Add 5-10 drops essential oil",
      "Select mist intensity and color",
      "Clean weekly with vinegar"
    ],
    pairsWith: ["sage-bundle", "aura-mist", "meditation-cushion"],
    inStock: true,
    featured: false,
  },
];

export const categories = [
  { id: "all", name: "All Products", count: products.length },
  { id: "crystals", name: "Crystals", count: products.filter(p => p.category === "crystals").length },
  { id: "elixirs", name: "Elixirs", count: products.filter(p => p.category === "elixirs").length },
  { id: "sound-healing", name: "Sound Healing", count: products.filter(p => p.category === "sound-healing").length },
  { id: "cleansing", name: "Cleansing", count: products.filter(p => p.category === "cleansing").length },
  { id: "rituals", name: "Rituals", count: products.filter(p => p.category === "rituals").length },
  { id: "beauty", name: "Beauty", count: products.filter(p => p.category === "beauty").length },
  { id: "meditation", name: "Meditation", count: products.filter(p => p.category === "meditation").length },
  { id: "aromatherapy", name: "Aromatherapy", count: products.filter(p => p.category === "aromatherapy").length },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getRelatedProducts = (product: Product): Product[] => {
  return products
    .filter(p => p.id !== product.id && product.pairsWith.includes(p.slug))
    .slice(0, 3);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};
