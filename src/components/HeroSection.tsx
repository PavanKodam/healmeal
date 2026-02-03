import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToRecipes = () => {
    document.getElementById("conditions")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] overflow-hidden bg-gradient-hero">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 sm:-right-20 sm:-top-20 h-48 w-48 sm:h-72 sm:w-72 lg:h-96 lg:w-96 rounded-full bg-health-green-light opacity-60 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 h-40 w-40 sm:h-60 sm:w-60 lg:h-80 lg:w-80 rounded-full bg-food-coral-light opacity-60 blur-3xl" />
      </div>

      <div className="container relative z-10 flex min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 lg:py-20 text-center">
        <div className="opacity-0 animate-fade-in-up">
          <span className="mb-3 sm:mb-4 inline-block rounded-full bg-health-green-light px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-health-green">
            🌿 Personalized Nutrition
          </span>
        </div>

        <h1 className="opacity-0 animate-fade-in-up stagger-1 mb-4 sm:mb-6 max-w-4xl font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground">
          Nourish Your Body,{" "}
          <span className="bg-gradient-to-r from-health-green to-food-coral bg-clip-text text-transparent">
            Heal Naturally
          </span>
        </h1>

        <p className="opacity-0 animate-fade-in-up stagger-2 mb-6 sm:mb-8 lg:mb-10 max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground px-2">
          Discover delicious recipes tailored to your health conditions. 
          From diabetes to heart disease, find meals that support your wellness journey.
        </p>

        <div className="opacity-0 animate-fade-in-up stagger-3 flex flex-col gap-3 sm:gap-4 sm:flex-row w-full sm:w-auto px-4 sm:px-0">
          <Button variant="hero" onClick={scrollToRecipes} className="w-full sm:w-auto">
            Find Your Recipes
          </Button>
          <Button variant="green-outline" size="xl" className="w-full sm:w-auto">
            Learn More
          </Button>
        </div>

        <div className="opacity-0 animate-fade-in stagger-4 mt-8 sm:mt-12 lg:mt-16">
          <button 
            onClick={scrollToRecipes}
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="text-xs sm:text-sm">Scroll to explore</span>
            <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
