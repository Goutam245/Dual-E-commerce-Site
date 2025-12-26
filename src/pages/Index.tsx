import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProductGrid } from "@/components/ProductGrid";
import { FeaturesSection } from "@/components/FeaturesSection";
import { FrequencySection } from "@/components/FrequencySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CommunitySection } from "@/components/CommunitySection";
import { LifestyleBanner } from "@/components/LifestyleBanner";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProductGrid />
        <LifestyleBanner />
        <FeaturesSection />
        <FrequencySection />
        <TestimonialsSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
