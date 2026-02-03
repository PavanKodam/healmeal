import { X, Clock, Flame, ChefHat } from "lucide-react";
import { Recipe } from "@/data/recipes";
import { diseases } from "@/data/diseases";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface RecipeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

const RecipeModal = ({ recipe, isOpen, onClose }: RecipeModalProps) => {
  if (!recipe) return null;

  const suitableConditions = recipe.suitableFor.map(
    (id) => diseases.find((d) => d.id === id)?.name || id,
  );

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="h-[90vh] w-[95vw] sm:w-full max-w-3xl overflow-hidden p-0 rounded-xl sm:rounded-2xl">
        {/* Hero image */}
        <div className="relative w-full h-[220px] sm:h-[300px] overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              {recipe.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="health"
                  className="text-[10px] sm:text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-primary-foreground">
                {recipe.name}
              </DialogTitle>
            </DialogHeader>
          </div>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto h-full">
          {/* Meta info */}
          <div className="mb-4 sm:mb-6 flex flex-wrap gap-2 sm:gap-4">
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-lg bg-muted px-3 sm:px-4 py-1.5 sm:py-2">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-sm sm:text-base font-medium">
                {recipe.prepTime}
              </span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-lg bg-muted px-3 sm:px-4 py-1.5 sm:py-2">
              <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-food-coral" />
              <span className="text-sm sm:text-base font-medium">
                {recipe.calories} calories
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="mb-4 sm:mb-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {recipe.description}
          </p>

          {/* Suitable for */}
          <div className="mb-4 sm:mb-6">
            <h3 className="mb-2 sm:mb-3 font-heading text-base sm:text-lg font-semibold text-foreground">
              Suitable For
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {suitableConditions.map((condition) => (
                <Badge
                  key={condition}
                  variant="food"
                  className="text-xs sm:text-sm"
                >
                  {condition}
                </Badge>
              ))}
            </div>
          </div>

          {/* Nutrition facts */}
          <div className="mb-4 sm:mb-6 rounded-lg sm:rounded-xl bg-health-green-light p-3 sm:p-4">
            <h3 className="mb-2 sm:mb-3 font-heading text-base sm:text-lg font-semibold text-foreground">
              Nutrition Facts
            </h3>
            <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
              <div>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-health-green">
                  {recipe.nutritionFacts.protein}
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  Protein
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-health-green">
                  {recipe.nutritionFacts.carbs}
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  Carbs
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-health-green">
                  {recipe.nutritionFacts.fat}
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  Fat
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-health-green">
                  {recipe.nutritionFacts.fiber}
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  Fiber
                </p>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="mb-4 sm:mb-6">
            <h3 className="mb-2 sm:mb-3 font-heading text-base sm:text-lg font-semibold text-foreground">
              Ingredients
            </h3>
            <ul className="grid gap-2 grid-cols-1 md:grid-cols-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground"
                >
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary shrink-0" />
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="mb-4 sm:mb-6">
            <h3 className="mb-2 sm:mb-3 flex items-center gap-2 font-heading text-base sm:text-lg font-semibold text-foreground">
              <ChefHat className="h-4 w-4 sm:h-5 sm:w-5 text-food-coral" />
              Instructions
            </h3>
            <ol className="space-y-2 sm:space-y-3">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="flex gap-2 sm:gap-3">
                  <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] sm:text-xs font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-0.5">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          {/* Cooking Video */}
          {recipe.videoUrl && (
            <div className="mb-6">
              <h3 className="mb-3 font-heading text-base sm:text-lg font-semibold text-foreground">
                🎥 Watch How to Cook
              </h3>

              <div className="aspect-video w-full overflow-hidden rounded-xl border">
                <iframe
                  src={recipe.videoUrl}
                  title={`${recipe.name} Cooking Video`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                Video tutorial for better cooking guidance.
              </p>
            </div>
          )}

          {/* Close button */}
          <Button
            onClick={onClose}
            className="w-full"
            variant="coral"
            size="sm"
          >
            Close Recipe
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RecipeModal;
