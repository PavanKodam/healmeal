import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DiseaseSelector from "@/components/DiseaseSelector";
import RecipeGrid from "@/components/RecipeGrid";
import RecipeModal from "@/components/RecipeModal";
import Footer from "@/components/Footer";
import { recipes } from "@/data/recipes";

const Index = () => {
  const [selectedDiseases, setSelectedDiseases] = useState<string[]>([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);

  const handleToggleDisease = (diseaseId: string) => {
    setSelectedDiseases((prev) =>
      prev.includes(diseaseId)
        ? prev.filter((id) => id !== diseaseId)
        : [...prev, diseaseId]
    );
  };

  const handleClearFilters = () => {
    setSelectedDiseases([]);
  };

  const handleRecipeClick = (recipeId: string) => {
    setSelectedRecipeId(recipeId);
  };

  const handleCloseModal = () => {
    setSelectedRecipeId(null);
  };

  const selectedRecipe = selectedRecipeId
    ? recipes.find((r) => r.id === selectedRecipeId) || null
    : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DiseaseSelector
          selectedDiseases={selectedDiseases}
          onToggleDisease={handleToggleDisease}
        />
        <RecipeGrid
          selectedDiseases={selectedDiseases}
          onRecipeClick={handleRecipeClick}
          onClearFilters={handleClearFilters}
        />
      </main>
      <Footer />
      <RecipeModal
        recipe={selectedRecipe}
        isOpen={!!selectedRecipeId}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
