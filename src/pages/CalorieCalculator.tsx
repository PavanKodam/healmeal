import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

export default function CalorieCalculator() {
  const navigate = useNavigate();

  const [age, setAge] = useState("");
  const [height, setHeight] = useState(""); // cm
  const [weight, setWeight] = useState(""); // kg
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("1.2");
  const [goal, setGoal] = useState("maintain"); // ✅ FIXED: inside component
  const [calories, setCalories] = useState<number | null>(null);

  const calculateCalories = () => {
    const a = Number(age);
    const h = Number(height);
    const w = Number(weight);

    if (!a || !h || !w) {
      alert("Please fill all fields");
      return;
    }

    // BMR Formula (Mifflin-St Jeor)
    let bmr = 0;
    if (gender === "male") {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    const totalCalories = bmr * Number(activity);
    setCalories(Math.round(totalCalories));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Calorie Calculator
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input
            placeholder="Age (years)"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <Input
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <Input
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          {/* Gender */}
          <Select value={gender} onValueChange={setGender}>
            <SelectTrigger>
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>

          {/* Activity */}
          <Select value={activity} onValueChange={setActivity}>
            <SelectTrigger>
              <SelectValue placeholder="Activity Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1.2">Sedentary (little exercise)</SelectItem>
              <SelectItem value="1.375">Light (1–3 days/week)</SelectItem>
              <SelectItem value="1.55">Moderate (3–5 days/week)</SelectItem>
              <SelectItem value="1.725">Active (6–7 days/week)</SelectItem>
            </SelectContent>
          </Select>

          {/* Goal */}
          <Select value={goal} onValueChange={setGoal}>
            <SelectTrigger>
              <SelectValue placeholder="Select Goal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="loss">Weight Loss</SelectItem>
              <SelectItem value="maintain">Maintain Weight</SelectItem>
              <SelectItem value="gain">Weight Gain</SelectItem>
            </SelectContent>
          </Select>

          {/* Calculate Button */}
          <Button className="w-full" onClick={calculateCalories}>
            Calculate Calories
          </Button>

          {/* Result */}
          {calories && (
            <div className="text-center mt-6 space-y-2">
              <p className="text-lg font-semibold">Your Daily Calorie Needs</p>

              <div className="bg-muted rounded-lg p-4 space-y-2">
                <p className="text-sm">
                  🔻 Weight Loss:{" "}
                  <span className="font-bold text-red-500">
                    {calories - 500} kcal
                  </span>
                </p>
                <p className="text-sm">
                  ⚖️ Maintain:{" "}
                  <span className="font-bold text-green-600">
                    {calories} kcal
                  </span>
                </p>
                <p className="text-sm">
                  🔺 Weight Gain:{" "}
                  <span className="font-bold text-blue-600">
                    {calories + 500} kcal
                  </span>
                </p>
              </div>

              {/* Go to Diet Plan */}
              <Button
                className="w-full mt-4"
                onClick={() =>
                  navigate(`/diet-plan?calories=${calories}&goal=${goal}`)
                }
              >
                Show My Diet Plan
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
