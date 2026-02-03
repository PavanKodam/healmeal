export interface Disease {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: "health" | "food" | "muted";
}

export const diseases: Disease[] = [
  {
    id: "diabetes",
    name: "Diabetes",
    description: "Low glycemic, sugar-controlled meals",
    icon: "🩸",
    color: "health",
  },
  {
    id: "heart-disease",
    name: "Heart Disease",
    description: "Low sodium, heart-healthy options",
    icon: "❤️",
    color: "food",
  },
  {
    id: "hypertension",
    name: "Hypertension",
    description: "Low salt, blood pressure friendly",
    icon: "💓",
    color: "health",
  },
  {
    id: "celiac",
    name: "Celiac Disease",
    description: "Gluten-free recipes",
    icon: "🌾",
    color: "muted",
  },
  {
    id: "kidney-disease",
    name: "Kidney Disease",
    description: "Low phosphorus, kidney-friendly",
    icon: "🫘",
    color: "health",
  },
  {
    id: "gerd",
    name: "GERD / Acid Reflux",
    description: "Low acid, easy digestion",
    icon: "🔥",
    color: "food",
  },
  {
    id: "ibs",
    name: "IBS",
    description: "Low FODMAP, gut-friendly meals",
    icon: "🦠",
    color: "muted",
  },
  {
    id: "obesity",
    name: "Weight Management",
    description: "Calorie-controlled, nutritious",
    icon: "⚖️",
    color: "health",
  },
  {
    id: "liver-disease",
    name: "Liver Disease",
    description: "Low fat, liver-supporting meals",
    icon: "🫀",
    color: "food",
  },
  {
    id: "anemia",
    name: "Anemia",
    description: "Iron-rich, blood-building foods",
    icon: "🩺",
    color: "health",
  },
  {
    id: "thyroid",
    name: "Thyroid Disorders",
    description: "Iodine-balanced, metabolism support",
    icon: "🦋",
    color: "muted",
  },
  {
    id: "arthritis",
    name: "Arthritis",
    description: "Anti-inflammatory, joint-friendly",
    icon: "🦴",
    color: "food",
  },
];
