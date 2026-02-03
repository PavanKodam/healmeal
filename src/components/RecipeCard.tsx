import { Clock, Flame } from "lucide-react";
import { Recipe } from "@/data/recipes";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
  index: number;
}

const RecipeCard = ({ recipe, onClick, index }: RecipeCardProps) => {
  return (
    <article
      onClick={onClick}
      className={cn(
        "group cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl bg-card shadow-soft transition-all duration-300",
        "hover:shadow-elevated hover:-translate-y-1 sm:hover:-translate-y-2"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Tags overlay */}
        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 flex flex-wrap gap-1 sm:gap-1.5">
          {recipe.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="health" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 lg:p-5">
        <h3 className="mb-1.5 sm:mb-2 font-heading text-base sm:text-lg lg:text-xl font-semibold text-foreground transition-colors group-hover:text-primary line-clamp-1">
          {recipe.name}
        </h3>
        
        <p className="mb-3 sm:mb-4 line-clamp-2 text-xs sm:text-sm text-muted-foreground">
          {recipe.description}
        </p>

        {/* Meta info */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-1 sm:gap-1.5">
            <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
            <span>{recipe.prepTime}</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5">
            <Flame className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-food-coral" />
            <span>{recipe.calories} cal</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RecipeCard;
