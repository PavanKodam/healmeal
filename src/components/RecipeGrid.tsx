import { useMemo } from "react";
import { recipes } from "@/data/recipes";
import { diseases } from "@/data/diseases";
import RecipeCard from "./RecipeCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface RecipeGridProps {
  selectedDiseases: string[];
  onRecipeClick: (recipeId: string) => void;
  onClearFilters: () => void;
}

const RecipeGrid = ({ selectedDiseases, onRecipeClick, onClearFilters }: RecipeGridProps) => {
  const filteredRecipes = useMemo(() => {
    if (selectedDiseases.length === 0) {
      return recipes;
    }
    return recipes.filter((recipe) =>
      selectedDiseases.some((disease) => recipe.suitableFor.includes(disease))
    );
  }, [selectedDiseases]);

  const selectedDiseaseNames = useMemo(() => {
    return selectedDiseases.map(
      (id) => diseases.find((d) => d.id === id)?.name || id
    );
  }, [selectedDiseases]);

  return (
    <section id="recipes" className="bg-muted/30 py-12 sm:py-16 lg:py-20">
      <div className="container px-4 sm:px-6">
        <div className="mb-8 sm:mb-10 lg:mb-12 text-center">
          <span className="mb-3 sm:mb-4 inline-block rounded-full bg-health-green-light px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-health-green">
            Step 2
          </span>
          <h2 className="mb-3 sm:mb-4 font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Discover Healing Recipes
          </h2>
          <p className="mx-auto max-w-xl sm:max-w-2xl text-sm sm:text-base text-muted-foreground px-2">
            {selectedDiseases.length > 0
              ? `Showing ${filteredRecipes.length} recipes suitable for your selected conditions`
              : "Browse all our nutritionist-approved recipes"}
          </p>
        </div>

        {/* Active filters */}
        {selectedDiseases.length > 0 && (
          <div className="mb-6 sm:mb-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-2">
            <span className="text-xs sm:text-sm text-muted-foreground">Filtering by:</span>
            {selectedDiseaseNames.map((name, index) => (
              <Badge key={index} variant="health" className="text-xs">
                {name}
              </Badge>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="ml-1 sm:ml-2 h-6 sm:h-7 gap-1 text-xs text-muted-foreground hover:text-foreground px-2"
            >
              <X className="h-3 w-3" />
              Clear
            </Button>
          </div>
        )}

        {/* Recipe grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRecipes.map((recipe, index) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={() => onRecipeClick(recipe.id)}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="py-12 sm:py-16 lg:py-20 text-center">
            <p className="mb-4 text-sm sm:text-base lg:text-lg text-muted-foreground">
              No recipes found for the selected conditions.
            </p>
            <Button variant="outline" onClick={onClearFilters} size="sm">
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecipeGrid;
