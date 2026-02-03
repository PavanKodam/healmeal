import { Check } from "lucide-react";
import { diseases, Disease } from "@/data/diseases";
import { cn } from "@/lib/utils";

interface DiseaseSelectorProps {
  selectedDiseases: string[];
  onToggleDisease: (diseaseId: string) => void;
}

const DiseaseSelector = ({ selectedDiseases, onToggleDisease }: DiseaseSelectorProps) => {
  return (
    <section id="conditions" className="py-12 sm:py-16 lg:py-20">
      <div className="container px-4 sm:px-6">
        <div className="mb-8 sm:mb-10 lg:mb-12 text-center">
          <span className="mb-3 sm:mb-4 inline-block rounded-full bg-food-coral-light px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-food-coral">
            Step 1
          </span>
          <h2 className="mb-3 sm:mb-4 font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Select Your Health Conditions
          </h2>
          <p className="mx-auto max-w-xl sm:max-w-2xl text-sm sm:text-base text-muted-foreground px-2">
            Choose one or more conditions to discover recipes tailored to your dietary needs. 
            Our recipes are crafted by nutritionists to support your health journey.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {diseases.map((disease, index) => (
              <DiseaseCard
                key={disease.id}
                disease={disease}
                isSelected={selectedDiseases.includes(disease.id)}
                onToggle={() => onToggleDisease(disease.id)}
                index={index}
              />
            ))}
          </div>

          {selectedDiseases.length > 0 && (
            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-xs sm:text-sm text-muted-foreground">
                <span className="font-semibold text-primary">{selectedDiseases.length}</span>
                {selectedDiseases.length === 1 ? " condition" : " conditions"} selected
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

interface DiseaseCardProps {
  disease: Disease;
  isSelected: boolean;
  onToggle: () => void;
  index: number;
}

const DiseaseCard = ({ disease, isSelected, onToggle, index }: DiseaseCardProps) => {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "group relative flex flex-col items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border-2 p-3 sm:p-4 lg:p-6 text-center transition-all duration-300",
        "hover:shadow-card hover:-translate-y-1",
        isSelected
          ? "border-primary bg-health-green-light shadow-card"
          : "border-border bg-card hover:border-primary/50"
      )}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Selection indicator */}
      <div
        className={cn(
          "absolute right-2 top-2 sm:right-3 sm:top-3 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full transition-all duration-300",
          isSelected
            ? "bg-primary text-primary-foreground scale-100"
            : "bg-muted text-muted-foreground scale-90 opacity-0 group-hover:opacity-100"
        )}
      >
        <Check className="h-3 w-3 sm:h-4 sm:w-4" />
      </div>

      {/* Icon */}
      <span className="text-2xl sm:text-3xl">{disease.icon}</span>

      {/* Content */}
      <div>
        <h3 className="mb-0.5 sm:mb-1 font-heading text-sm sm:text-base lg:text-lg font-semibold text-foreground leading-tight">
          {disease.name}
        </h3>
        <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2">{disease.description}</p>
      </div>
    </button>
  );
};

export default DiseaseSelector;
