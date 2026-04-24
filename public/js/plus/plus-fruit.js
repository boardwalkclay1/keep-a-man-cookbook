// plus-fruit.js — minimal, clean, working version

const PLUS_FRUITS = [

  {
    name: "Bananas",
    emoji: "🍌",
    image: "https://source.unsplash.com/400x300/?bananas,fruit,food",
    tags: ["sweet", "cheap", "snack", "smoothies", "energy"],
    time: { prep: "0–2 min", cook: "none" },
    difficulty: "very easy",

    directions: [
      "Eat raw as a quick snack or pre‑workout energy boost.",
      "Slice into oatmeal, yogurt, cereal, or peanut‑butter toast.",
      "Blend into smoothies for natural sweetness and creaminess."
    ],

    mealPrep: [
      "Lasts 3–5 days at room temperature.",
      "Refrigerate ripe bananas to slow browning.",
      "Freeze peeled bananas for smoothies or desserts."
    ],

    pairsWith: {
      meats: [],
      fillers: ["oats", "yogurt", "rice cakes"],
      vegetables: [],
      plus: ["peanut butter", "honey", "cinnamon", "nuts"]
    },

    links: {
      walmart: "https://www.walmart.com/search?q=bananas"
    }
  },

  {
    name: "Apples",
    emoji: "🍎",
    image: "https://source.unsplash.com/400x300/?apples,fruit,food",
    tags: ["crisp", "sweet", "snack", "fiber"],
    time: { prep: "1–3 min", cook: "0–10 min" },
    difficulty: "very easy",

    directions: [
      "Slice raw for snacks, salads, or lunch boxes.",
      "Dip in peanut butter, yogurt, or caramel.",
      "Cook with cinnamon for warm dessert-style apples."
    ],

    mealPrep: [
      "Lasts up to 2 weeks refrigerated.",
      "Slice and soak in lemon water to prevent browning."
    ],

    pairsWith: {
      meats: ["pork chops"],
      fillers: ["oats", "yogurt"],
      vegetables: [],
      plus: ["honey", "peanut butter", "cinnamon"]
    },

    links: {
      walmart: "https://www.walmart.com/search?q=apples"
    }
  },

  {
    name: "Strawberries",
    emoji: "🍓",
    image: "https://source.unsplash.com/400x300/?strawberries,fruit,food",
    tags: ["sweet", "fresh", "snack", "smoothies"],
    time: { prep: "1–3 min", cook: "0–5 min" },
    difficulty: "very easy",

    directions: [
      "Rinse and eat fresh as a snack.",
      "Slice into yogurt, oatmeal, or cereal.",
      "Blend into smoothies or milkshakes."
    ],

    mealPrep: [
      "Lasts 3–5 days refrigerated.",
      "Wash only before eating to prevent mold."
    ],

    pairsWith: {
      meats: [],
      fillers: ["yogurt", "oats"],
      vegetables: ["spinach"],
      plus: ["chocolate", "honey", "whipped cream"]
    },

    links: {
      walmart: "https://www.walmart.com/search?q=strawberries"
    }
  },

  {
    name: "Pineapple",
    emoji: "🍍",
    image: "https://source.unsplash.com/400x300/?pineapple,fruit,food",
    tags: ["tropical", "juicy", "sweet", "acidic"],
    time: { prep: "3–5 min", cook: "0–10 min" },
    difficulty: "easy",

    directions: [
      "Slice fresh pineapple into rings or chunks.",
      "Add to yogurt, smoothies, or fruit bowls.",
      "Grill slices for caramelized flavor."
    ],

    mealPrep: [
      "Lasts 4–5 days once cut.",
      "Freeze chunks for smoothies."
    ],

    pairsWith: {
      meats: ["ham", "chicken"],
      fillers: ["rice", "yogurt"],
      vegetables: ["peppers"],
      plus: ["coconut", "lime", "mint"]
    },

    links: {
      walmart: "https://www.walmart.com/search?q=pineapple"
    }
  },

  {
    name: "Mango",
    emoji: "🥭",
    image: "https://source.unsplash.com/400x300/?mango,fruit,food",
    tags: ["tropical", "sweet", "juicy", "smoothies"],
    time: { prep: "2–4 min", cook: "none" },
    difficulty: "easy",

    directions: [
      "Slice mango around the pit and score into cubes.",
      "Scoop with a spoon for fresh eating.",
      "Blend into smoothies or lassi."
    ],

    mealPrep: [
      "Lasts 3–5 days once cut.",
      "Freeze cubes for smoothies."
    ],

    pairsWith: {
      meats: ["shrimp", "chicken"],
      fillers: ["rice", "yogurt"],
      vegetables: ["peppers"],
      plus: ["lime", "coconut", "mint"]
    },

    links: {
      walmart: "https://www.walmart.com/search?q=mango"
    }
  }

];

export default PLUS_FRUITS;
