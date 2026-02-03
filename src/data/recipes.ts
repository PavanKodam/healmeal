export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  prepTime: string;
  calories: number;
  suitableFor: string[];
  ingredients: string[];
  instructions: string[];
  nutritionFacts: {
    protein: string;
    carbs: string;
    fat: string;
    fiber: string;
  };
  tags: string[];
  videoUrl?: string;
}

export const recipes: Recipe[] = [
  {
    id: "1",
    name: "Paneer Tikka Bowl",
    description: "Grilled paneer cubes marinated in yogurt and spices, served with fresh salad. Suitable for vegetarians and diabetes-friendly.",
    image: "https://thumbs.dreamstime.com/b/bowl-fresh-delicious-paneer-tikka-masala-white-rice-served-table-blur-background-image-320292936.jpg",
    prepTime: "30 min",
    calories: 400,
    suitableFor: ["diabetes", "vegetarian", "heart-disease", "obesity"],
    ingredients: [
      "150g paneer, cubed",
      "2 tbsp yogurt",
      "1 tsp red chili powder",
      "1/2 tsp turmeric",
      "1 tsp garam masala",
      "1 tbsp lemon juice",
      "1 cup chopped cucumber and tomato",
      "Fresh coriander for garnish"
    ],
    instructions: [
      "Mix yogurt and spices to make marinade.",
      "Add paneer cubes and coat well.",
      "Grill or bake paneer until lightly charred.",
      "Arrange salad in a bowl.",
      "Place grilled paneer on top and garnish with coriander."
    ],
    nutritionFacts: {
      protein: "18g",
      carbs: "20g",
      fat: "22g",
      fiber: "5g"
    },
    tags: ["Vegetarian", "High Protein", "Diabetes-Friendly"]
  },
  {
    id: "2",
    name: "Masoor Dal with Brown Rice",
    description: "A heart-friendly lentil curry served with brown rice. Rich in protein and fiber, suitable for diabetics and low-fat diets.",
    image: "https://thumbs.dreamstime.com/b/indian-masoor-dal-rice-brown-bowl-ai-generative-image-indian-masoor-dal-rice-brown-bowl-365336046.jpg?w=992",
    prepTime: "40 min",
    calories: 350,
    suitableFor: ["diabetes", "heart-disease", "low-fat", "vegetarian"],
    ingredients: [
      "1 cup masoor dal (red lentils)",
      "1 cup brown rice",
      "1 onion, finely chopped",
      "2 tomatoes, chopped",
      "1 tsp turmeric",
      "1 tsp cumin seeds",
      "2 tsp olive oil",
      "Fresh coriander for garnish"
    ],
    instructions: [
      "Rinse dal and cook with turmeric until soft.",
      "Cook brown rice separately.",
      "Heat oil, add cumin seeds and sauté onion.",
      "Add tomatoes and cook till soft.",
      "Mix cooked dal and simmer 5 min.",
      "Serve with brown rice and garnish with coriander."
    ],
    nutritionFacts: {
      protein: "18g",
      carbs: "55g",
      fat: "6g",
      fiber: "12g"
    },
    videoUrl: "https://www.youtube.com/embed/h-1H4PkU9fE?si=VfshGVOxsqsaxwIs",
    tags: ["Vegetarian", "High Fiber", "Diabetes-Friendly"]
  },
  {
    id: "3",
    name: "Vegetable Upma",
    description: "A healthy South Indian breakfast made with semolina and mixed vegetables. Low-calorie and diabetic-friendly.",
    image: "https://tastedrecipes.com/wp-content/uploads/2021/02/Veg-Upma-2.jpg",
    prepTime: "20 min",
    calories: 280,
    suitableFor: ["diabetes", "vegetarian", "low-calorie", "heart-disease"],
    ingredients: [
      "1 cup semolina (rava)",
      "2 cups water",
      "1/2 cup chopped carrots, beans, peas",
      "1 small onion, chopped",
      "1 tsp mustard seeds",
      "1 tsp ghee",
      "Fresh curry leaves",
      "Salt to taste"
    ],
    instructions: [
      "Dry roast semolina lightly and set aside.",
      "Heat ghee, add mustard seeds and curry leaves.",
      "Sauté onions and vegetables.",
      "Add water and salt, bring to boil.",
      "Slowly add semolina, stirring to avoid lumps.",
      "Cook 5-7 min until water is absorbed, serve hot."
    ],
    nutritionFacts: {
      protein: "8g",
      carbs: "50g",
      fat: "7g",
      fiber: "5g"
    },
    tags: ["Vegetarian", "Low Calorie", "Breakfast"]
  },
  {
    id: "4",
    name: "Chole with Whole Wheat Roti",
    description: "Spicy chickpea curry paired with whole wheat roti. Rich in fiber and protein, suitable for diabetes and vegetarian diets.",
    image: "https://www.dietitianshubhra.com/wp-content/uploads/2025/03/20190622_121926.webp",
    prepTime: "35 min",
    calories: 420,
    suitableFor: ["vegetarian", "diabetes", "high-protein", "heart-disease"],
    ingredients: [
      "1 cup chickpeas, soaked overnight",
      "1 onion, chopped",
      "2 tomatoes, pureed",
      "1 tsp ginger-garlic paste",
      "1 tsp cumin seeds",
      "1 tsp garam masala",
      "2 tsp oil",
      "Fresh coriander for garnish"
    ],
    instructions: [
      "Cook chickpeas until soft.",
      "Heat oil, add cumin and sauté onion.",
      "Add ginger-garlic paste and tomato puree, cook 5 min.",
      "Add chickpeas, garam masala, simmer 10 min.",
      "Serve with whole wheat roti and garnish with coriander."
    ],
    nutritionFacts: {
      protein: "15g",
      carbs: "55g",
      fat: "10g",
      fiber: "12g"
    },
    tags: ["Vegetarian", "High Fiber", "Protein-Rich"]
  },
  {
    id: "5",
    name: "Moong Dal Khichdi",
    description: "A light, easy-to-digest dish suitable for all ages and those with digestive issues. Often recommended in Indian households for comfort food.",
    image: "https://images.hindustantimes.com/img/2021/09/03/1600x900/Moond_Dal_Khichdi_1630666387151_1630666399808.jpg",
    prepTime: "30 min",
    calories: 300,
    suitableFor: ["vegetarian", "low-fat", "easily-digestible", "diabetes"],
    ingredients: [
      "1/2 cup moong dal",
      "1/2 cup rice",
      "1/2 tsp turmeric",
      "1 tsp ghee",
      "1 tsp cumin seeds",
      "2 cups water",
      "Salt to taste"
    ],
    instructions: [
      "Rinse rice and dal together.",
      "Heat ghee, add cumin seeds and sauté briefly.",
      "Add dal, rice, turmeric, salt, and water.",
      "Cook until soft and mushy, stirring occasionally.",
      "Serve warm, optionally with a dollop of ghee."
    ],
    nutritionFacts: {
      protein: "10g",
      carbs: "50g",
      fat: "5g",
      fiber: "4g"
    },
    tags: ["Vegetarian", "Comfort Food", "Easily Digestible"]
  },
   {
    id: "6",
    name: "Palak Paneer",
    description: "Creamy spinach curry with paneer cubes. High in protein and iron, perfect for vegetarians and heart-healthy diets.",
    image: "https://png.pngtree.com/thumb_back/fw800/background/20240916/pngtree-indian-vegan-cuisine-palak-paneer-cheese-with-spinach-image_16222375.jpg",
    prepTime: "30 min",
    calories: 380,
    suitableFor: ["vegetarian", "heart-disease", "diabetes"],
    ingredients: [
      "200g paneer, cubed",
      "2 cups spinach puree",
      "1 onion, chopped",
      "1 tomato, chopped",
      "1 tsp ginger-garlic paste",
      "1 tsp cumin seeds",
      "1 tsp garam masala",
      "2 tsp oil"
    ],
    instructions: [
      "Heat oil and add cumin seeds.",
      "Sauté onion, ginger-garlic paste, and tomato.",
      "Add spinach puree and cook 5 min.",
      "Add paneer cubes and garam masala, simmer 10 min.",
      "Serve hot with roti or rice."
    ],
    nutritionFacts: { protein: "20g", carbs: "18g", fat: "24g", fiber: "6g" },
    tags: ["Vegetarian", "High Protein", "Iron-Rich"]
  },
  {
    id: "7",
    name: "Rajma Masala with Rice",
    description: "Kidney bean curry cooked with spices, served with steamed rice. Rich in protein and fiber, suitable for vegetarians and diabetics.",
    image: "https://th.bing.com/th/id/OIP.D_E2XsAGwy1sOW_xgPrlxwHaDt?w=349&h=174&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    prepTime: "45 min",
    calories: 420,
    suitableFor: ["vegetarian", "high-fiber", "diabetes"],
    ingredients: [
      "1 cup kidney beans, soaked overnight",
      "1 onion, chopped",
      "2 tomatoes, pureed",
      "1 tsp ginger-garlic paste",
      "1 tsp cumin seeds",
      "1 tsp garam masala",
      "2 tsp oil"
    ],
    instructions: [
      "Cook kidney beans until soft.",
      "Heat oil, add cumin seeds, onion, and ginger-garlic paste.",
      "Add tomato puree and cook 5 min.",
      "Add beans, garam masala, simmer 10 min.",
      "Serve with steamed rice."
    ],
    nutritionFacts: { protein: "18g", carbs: "60g", fat: "8g", fiber: "15g" },
    tags: ["Vegetarian", "Protein-Rich", "High Fiber"]
  },
  {
    id: "8",
    name: "Vegetable Pulao",
    description: "Fragrant rice cooked with mixed vegetables and mild spices. Low-fat and nutritious, suitable for all diets.",
    image: "https://thumbs.dreamstime.com/b/fragrant-veg-pulao-bliss-colorful-rice-fresh-veggies-bowl-aromatic-vegetable-pulao-india-colorful-veggies-372269437.jpg",
    prepTime: "30 min",
    calories: 320,
    suitableFor: ["vegetarian", "low-fat", "diabetes-friendly"],
    ingredients: [
      "1 cup basmati rice",
      "1 cup mixed vegetables (carrot, beans, peas)",
      "1 onion, sliced",
      "1 tsp cumin seeds",
      "2 tsp oil",
      "2 cups water",
      "Salt to taste"
    ],
    instructions: [
      "Heat oil, add cumin seeds and onions.",
      "Add vegetables and sauté 2-3 min.",
      "Add rice and water, bring to boil.",
      "Cover and cook until rice is fluffy.",
      "Serve hot."
    ],
    nutritionFacts: { protein: "8g", carbs: "60g", fat: "7g", fiber: "6g" },
    tags: ["Vegetarian", "Low Fat", "Rice Dish"]
  },
  {
    id: "9",
    name: "Dahi Bhindi",
    description: "Okra cooked in yogurt-based gravy with Indian spices. A healthy, protein-rich dish suitable for diabetics.",
    image: "https://th.bing.com/th/id/OIP.loEbMoDLUJIi02la_aACLQHaEK?w=331&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    prepTime: "25 min",
    calories: 250,
    suitableFor: ["vegetarian", "diabetes-friendly", "high-protein"],
    ingredients: [
      "200g okra, chopped",
      "1/2 cup yogurt",
      "1 onion, chopped",
      "1 tsp cumin seeds",
      "1 tsp coriander powder",
      "1 tsp turmeric",
      "2 tsp oil"
    ],
    instructions: [
      "Heat oil and add cumin seeds.",
      "Sauté onions until golden.",
      "Add okra and spices, cook 5-7 min.",
      "Add yogurt, simmer 5 min.",
      "Serve warm with roti."
    ],
    nutritionFacts: { protein: "10g", carbs: "20g", fat: "12g", fiber: "5g" },
    tags: ["Vegetarian", "Diabetes-Friendly", "High Protein"]
  },
  {
    id: "10",
    name: "Tandoori Chicken",
    description: "Marinated chicken cooked in tandoor-style oven or baked. High-protein, low-carb, and perfect for a healthy Indian diet.",
    image: "https://blog.swiggy.com/wp-content/uploads/2024/10/Image1_-Tandoori-Chicken.jpg",
    prepTime: "40 min",
    calories: 350,
    suitableFor: ["non-vegetarian", "high-protein", "low-carb"],
    ingredients: [
      "300g chicken pieces",
      "2 tbsp yogurt",
      "1 tsp red chili powder",
      "1 tsp turmeric",
      "1 tsp garam masala",
      "1 tsp ginger-garlic paste",
      "1 tsp lemon juice"
    ],
    instructions: [
      "Mix yogurt and spices to make marinade.",
      "Coat chicken, refrigerate 20 min.",
      "Bake/grill until chicken is cooked through.",
      "Serve with lemon wedges."
    ],
    nutritionFacts: { protein: "35g", carbs: "5g", fat: "18g", fiber: "1g" },
    tags: ["Non-Vegetarian", "High Protein", "Low Carb"]
  },
  {
    id: "11",
    name: "Masala Oats",
    description: "Quick and healthy breakfast with oats, vegetables, and Indian spices. High fiber and diabetes-friendly.",
    image: "https://indianbreakfastrecipes.com/wp-content/uploads/2024/06/masala-oats-2-1024x575.jpg",
    prepTime: "15 min",
    calories: 220,
    suitableFor: ["vegetarian", "high-fiber", "diabetes-friendly"],
    ingredients: [
      "1 cup oats",
      "1/2 cup chopped vegetables (carrot, beans, peas)",
      "1/2 tsp turmeric",
      "1 tsp cumin seeds",
      "1 tsp oil",
      "2 cups water",
      "Salt to taste"
    ],
    instructions: [
      "Heat oil, add cumin seeds and vegetables.",
      "Add water and bring to boil.",
      "Add oats, cook 5 min.",
      "Serve hot."
    ],
    nutritionFacts: { protein: "8g", carbs: "38g", fat: "6g", fiber: "8g" },
    tags: ["Vegetarian", "High Fiber", "Breakfast"]
  },
  {
    id: "12",
    name: "Vegetable Dhokla",
    description: "Steamed gram flour cake with vegetables. Low-fat, protein-rich, and perfect for Indian snacks or breakfast.",
    image: "https://thumbs.dreamstime.com/b/famous-vegetarian-gujarati-dish-dhokla-ready-to-serve-dhokla-spongy-savory-cake-made-fermented-rice-chickpea-318939403.jpg",
    prepTime: "25 min",
    calories: 200,
    suitableFor: ["vegetarian", "low-fat", "protein-rich"],
    ingredients: [
      "1 cup gram flour (besan)",
      "1/2 cup yogurt",
      "1 tsp ENO fruit salt",
      "1/2 cup chopped vegetables",
      "1 tsp mustard seeds",
      "1 tsp oil",
      "Salt to taste"
    ],
    instructions: [
      "Mix besan, yogurt, salt and vegetables.",
      "Add ENO just before steaming.",
      "Steam for 15-20 min.",
      "Tempering with mustard seeds optional.",
      "Serve hot."
    ],
    nutritionFacts: { protein: "10g", carbs: "30g", fat: "4g", fiber: "5g" },
    tags: ["Vegetarian", "Low Fat", "Snack"]
  },
  {
    id: "13",
    name: "Methi Thepla",
    description: "Spiced flatbread with fenugreek leaves. Perfect for breakfast or light meal. Rich in fiber and low glycemic index.",
    image: "https://img.freepik.com/premium-photo/methi-thepla-white-background_893610-26921.jpg?w=996",
    prepTime: "20 min",
    calories: 250,
    suitableFor: ["vegetarian", "high-fiber", "diabetes-friendly"],
    ingredients: [
      "1 cup whole wheat flour",
      "1/2 cup chopped methi (fenugreek leaves)",
      "1/2 tsp turmeric",
      "1/2 tsp chili powder",
      "Salt to taste",
      "Water to knead",
      "1 tsp oil"
    ],
    instructions: [
      "Mix all ingredients to form dough.",
      "Roll into thin flatbreads.",
      "Cook on hot griddle with little oil.",
      "Serve with yogurt or pickle."
    ],
    nutritionFacts: { protein: "8g", carbs: "40g", fat: "6g", fiber: "8g" },
    tags: ["Vegetarian", "High Fiber", "Breakfast"]
  },
  {
    id: "14",
    name: "Idli with Sambar",
    description: "Steamed rice cakes served with spicy lentil stew. A classic South Indian breakfast, light and nutritious.",
    image: "https://tse4.mm.bing.net/th/id/OIP.2MVaE7wVNlwZ1dYknzbSswHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    prepTime: "40 min",
    calories: 300,
    suitableFor: ["vegetarian", "low-fat", "high-fiber"],
    ingredients: [
      "1 cup rice batter",
      "1/2 cup urad dal batter",
      "1 cup sambar (lentil stew with vegetables)",
      "Salt to taste"
    ],
    instructions: [
      "Pour batter into idli molds and steam 10-12 min.",
      "Serve hot with sambar."
    ],
    nutritionFacts: { protein: "10g", carbs: "50g", fat: "2g", fiber: "6g" },
    tags: ["Vegetarian", "Breakfast", "South Indian"]
  },
  {
    id: "15",
    name: "Bhindi Masala",
    description: "Spiced okra stir fry, a popular Indian side dish. Low-calorie and diabetes-friendly.",
    image: "https://th.bing.com/th/id/R.a0259932b09e04703599925173ac64c9?rik=IDHX%2bJgFivOegA&riu=http%3a%2f%2f3.bp.blogspot.com%2f_PCFFDNBbwno%2fS8P6f7OucyI%2fAAAAAAAAIEk%2fakgAJt1W8UM%2fs1600%2fbhindi%2bmasala3.jpg&ehk=6Y%2bkRfi%2fB55qU1MsnQLFZtSCfwgCspXAswtlQjGccHs%3d&risl=&pid=ImgRaw&r=0  ",
    prepTime: "25 min",
    calories: 200,
    suitableFor: ["arthritis", "diabetes", "heart-disease", "liver-disease"],
    ingredients: [
      "200g okra, chopped",
      "1 onion, sliced",
      "1 tsp turmeric",
      "1 tsp cumin seeds",
      "1 tsp coriander powder",
      "2 tsp oil",
      "Salt to taste"
    ],
    instructions: [
      "Heat oil, add cumin seeds and onions.",
      "Add okra and spices, cook 10 min until tender.",
      "Serve hot with roti."
    ],
    nutritionFacts: { protein: "6g", carbs: "15g", fat: "10g", fiber: "5g" },
    tags: ["Vegetarian", "Low Calorie", "Side Dish"]
  },
  {
    id: "16",
    name: "Aloo Gobi",
    description: "Potato and cauliflower cooked with Indian spices. Low-fat, vegetarian and suitable for diabetes-friendly diets.",
    image: "https://cdn.shopify.com/s/files/1/0604/6345/articles/Aloo_Gobi.jpg?v=1459177658",
    prepTime: "30 min",
    calories: 300,
    suitableFor: ["vegetarian", "low-fat", "diabetes-friendly"],
    ingredients: [
      "1 cup cauliflower florets",
      "1 cup potatoes, diced",
      "1 onion, chopped",
      "1 tsp turmeric",
      "1 tsp cumin seeds",
      "1 tsp coriander powder",
      "2 tsp oil"
    ],
    instructions: [
      "Heat oil, add cumin seeds and onions.",
      "Add potatoes, cauliflower, and spices.",
      "Cook 15-20 min until tender.",
      "Serve hot with roti or rice."
    ],
    nutritionFacts: { protein: "6g", carbs: "35g", fat: "8g", fiber: "6g" },
    tags: ["Vegetarian", "Low Fat", "Diabetes-Friendly"]
  }

];
