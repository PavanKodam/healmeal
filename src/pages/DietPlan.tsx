import { useSearchParams } from "react-router-dom";
import { recipes } from "@/data/recipes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DietPlan() {
  const [params] = useSearchParams();

  const totalCalories = Number(params.get("calories"));
  const goal = params.get("goal"); // loss | maintain | gain

  // Meal calorie distribution
  const breakfastTarget = totalCalories * 0.25;
  const lunchTarget = totalCalories * 0.4;
  const dinnerTarget = totalCalories * 0.35;

  const filterRecipes = (target: number) => {
    return recipes.filter((r) => {
      // Weight loss → low calorie recipes
      if (goal === "loss") return r.calories <= target / 2;

      // Weight gain → high protein / higher calorie
      if (goal === "gain") return r.calories >= target / 2;

      // Maintain → medium range
      return r.calories >= target / 3 && r.calories <= target / 1.5;
    }).slice(0, 3); // show top 3
  };

  const breakfast = filterRecipes(breakfastTarget);
  const lunch = filterRecipes(lunchTarget);
  const dinner = filterRecipes(dinnerTarget);

  const MealSection = ({ title, data }: { title: string; data: typeof recipes }) => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {data.map((r) => (
          <Card key={r.id}>
            <img src={r.image} alt={r.name} className="h-40 w-full object-cover rounded-t-lg" />
            <CardHeader>
              <CardTitle>{r.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{r.description}</p>
              <p className="mt-2 font-semibold">🔥 {r.calories} kcal</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container py-8 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Your Personalized Diet Plan</h1>
        <p className="text-muted-foreground">
          Goal: <span className="font-semibold capitalize">{goal}</span> | Daily Calories:{" "}
          <span className="font-semibold">{totalCalories} kcal</span>
        </p>
      </div>

      <MealSection title="🍳 Breakfast" data={breakfast} />
      <MealSection title="🍛 Lunch" data={lunch} />
      <MealSection title="🍽️ Dinner" data={dinner} />
    </div>
  );
}
