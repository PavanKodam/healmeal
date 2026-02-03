import { Heart, Salad } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-8 sm:py-10 lg:py-12">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:gap-6 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-primary">
              <Salad className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-lg sm:text-xl font-semibold text-foreground">
              HealMeal
            </span>
          </div>

          {/* Tagline */}
          <p className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            Made with <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-food-coral text-food-coral" /> for your wellness
          </p>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-muted-foreground">
            © 2024 HealMeal. All rights reserved.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 sm:mt-8 rounded-lg bg-muted/50 p-3 sm:p-4 text-center">
          <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
            <strong>Disclaimer:</strong> The recipes and information provided are for educational purposes only 
            and should not replace professional medical advice. Always consult with your healthcare provider 
            before making dietary changes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
