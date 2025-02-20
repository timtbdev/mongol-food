import { DishType } from "@/types";

export const allDishes: DishType[] = [
  {
    name: "Buuz",
    slug: "/buuz",
    description: "Steamed dumplings filled with juicy meat.",
    calories: { kcals: 350, emoji: "🔥" },
    burnTime: { duration: "30m", emoji: "🏃" },
    dishEmoji: "🥟🥟",
    taste: { level: "9/10", emoji: "🏆" },
    health: "moderate",
    rank: 1,
    globalRanking: 1,
    category: "meat",
    wikipedia: "https://en.wikipedia.org/wiki/Buuz",
    photoUrl: "/images/dishes/meat-dishes/buuz.png",
  },
  {
    name: "Khuushuur",
    slug: "/khuushuur",
    description: "Deep-fried meat pockets with a crunchy kick.",
    calories: { kcals: 400, emoji: "🔥" },
    burnTime: { duration: "35m", emoji: "🏃" },
    dishEmoji: "🔥🥟",
    taste: { level: "9/10", emoji: "🏆" },
    health: "moderate",
    rank: 2,
    globalRanking: 2,
    category: "meat",
    wikipedia: "https://en.wikipedia.org/wiki/Khuushuur",
    photoUrl: "/images/dishes/meat-dishes/khuushuur.png",
  },
  {
    name: "Tsuivan",
    slug: "/tsuivan",
    description: "Stir-fried noodles with meat.",
    calories: { kcals: 600, emoji: "🔥" },
    burnTime: { duration: "50m", emoji: "🏃" },
    dishEmoji: "🍜🍖",
    taste: { level: "8/10", emoji: "🏆" },
    health: "moderate",
    rank: 3,
    globalRanking: 3,
    category: "meat",
    wikipedia: "https://en.wikipedia.org/wiki/Tsuivan",
    photoUrl: "/images/dishes/meat-dishes/tsuivan.png",
  },
  {
    name: "Khorkhog",
    slug: "/khorkhog",
    description: "Stone-cooked BBQ with tender meat.",
    calories: { kcals: 800, emoji: "🔥" },
    burnTime: { duration: "1h10m", emoji: "🏃" },
    dishEmoji: "🪨🔥",
    taste: { level: "10/10", emoji: "🏆" },
    health: "heavy",
    rank: 4,
    globalRanking: 4,
    category: "meat",
    wikipedia: "https://en.wikipedia.org/wiki/Khorkhog",
    photoUrl: "/images/dishes/meat-dishes/khorkhog.png",
  },
  {
    name: "Boodog",
    slug: "/boodog",
    description: "Whole goat cooked inside its own skin.",
    calories: { kcals: 750, emoji: "🔥" },
    burnTime: { duration: "1h", emoji: "🏃" },
    dishEmoji: "🐐🔥",
    taste: { level: "9/10", emoji: "🏆" },
    health: "heavy",
    rank: 5,
    globalRanking: 5,
    category: "meat",
    wikipedia: "https://en.wikipedia.org/wiki/Boodog",
    photoUrl: "/images/dishes/meat-dishes/boodog.png",
  },
  {
    name: "Shorlog",
    slug: "/shorlog",
    description: "Mongolian grilled meat skewers.",
    calories: { kcals: 450, emoji: "🔥" },
    burnTime: { duration: "40m", emoji: "🏃" },
    dishEmoji: "🍢🔥",
    taste: { level: "8/10", emoji: "🏆" },
    health: "heavy",
    rank: 6,
    globalRanking: 6,
    category: "meat",
    wikipedia: "https://en.wikipedia.org/wiki/Shorlog",
    photoUrl: "/images/dishes/meat-dishes/shorlog.png",
  },
  {
    name: "Chanasan Makh",
    slug: "/chanasan-makh",
    description: "Simple boiled meat dish with bone broth.",
    calories: { kcals: 400, emoji: "🔥" },
    burnTime: { duration: "35m", emoji: "🏃" },
    dishEmoji: "🍖💧",
    taste: { level: "7/10", emoji: "🏆" },
    health: "heavy",
    rank: 7,
    globalRanking: 7,
    category: "meat",
    wikipedia: "https://en.wikipedia.org/wiki/Chanasan_makh",
    photoUrl: "/images/dishes/meat-dishes/chanasan-makh.png",
  },
  {
    name: "Horhog",
    slug: "/horhog",
    description: "Traditional Mongolian hot stone cooked meat.",
    calories: { kcals: 850, emoji: "🔥" },
    burnTime: { duration: "1h15m", emoji: "🏃" },
    dishEmoji: "🔥🥩",
    taste: { level: "9/10", emoji: "🏆" },
    health: "heavy",
    rank: 8,
    globalRanking: 8,
    category: "meat",
    wikipedia: "https://en.wikipedia.org/wiki/Horhog",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Horhog.jpg",
  },
  {
    name: "Borts",
    slug: "/borts",
    description: "Dried meat used as a preserved food for soups and stews.",
    calories: { kcals: 300, emoji: "🔥" },
    burnTime: { duration: "25m", emoji: "🏃" },
    dishEmoji: "🥩❄️",
    taste: { level: "8/10", emoji: "🏆" },
    health: "light",
    rank: 9,
    globalRanking: 9,
    category: "meat",
    wikipedia: "https://en.wikipedia.org/wiki/Borts",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Borts.jpg",
  },
  // Dairy foods
  {
    name: "Airag",
    slug: "/airag",
    description: "Fermented mare’s milk with a refreshing tangy taste.",
    calories: { kcals: 150, emoji: "🔥" },
    burnTime: { duration: "15m", emoji: "🏃" },
    dishEmoji: "🍶🐎",
    taste: { level: "7/10", emoji: "🏆" },
    health: "light",
    rank: 1,
    globalRanking: 10,
    category: "dairy",
    wikipedia: "https://en.wikipedia.org/wiki/Airag",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Airag_in_Mongolia.jpg/800px-Airag_in_Mongolia.jpg",
  },
  {
    name: "Tarag",
    slug: "/tarag",
    description: "Traditional Mongolian yogurt, smooth and slightly sour.",
    calories: { kcals: 120, emoji: "🔥" },
    burnTime: { duration: "12m", emoji: "🏃" },
    dishEmoji: "🥄🥛",
    taste: { level: "7/10", emoji: "🏆" },
    health: "light",
    rank: 2,
    globalRanking: 11,
    category: "dairy",
    wikipedia: "https://en.wikipedia.org/wiki/Tarag",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mongolian_Tarag.jpg",
  },
  {
    name: "Aaruul",
    slug: "/aaruul",
    description: "Rock-hard dried yogurt bites, rich in nutrients.",
    calories: { kcals: 100, emoji: "🔥" },
    burnTime: { duration: "10m", emoji: "🏃" },
    dishEmoji: "🪨🥛",
    taste: { level: "6/10", emoji: "🏆" },
    health: "light",
    rank: 3,
    globalRanking: 12,
    category: "dairy",
    wikipedia: "https://en.wikipedia.org/wiki/Aaruul",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Aaruul_Mongolian_Dried_Curd.jpg",
  },
  {
    name: "Öröm",
    slug: "/orom",
    description: "Thick clotted cream made from fresh milk.",
    calories: { kcals: 200, emoji: "🔥" },
    burnTime: { duration: "20m", emoji: "🏃" },
    dishEmoji: "🥛🍯",
    taste: { level: "8/10", emoji: "🏆" },
    health: "moderate",
    rank: 4,
    globalRanking: 13,
    category: "dairy",
    wikipedia: "https://en.wikipedia.org/wiki/Clotted_cream",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Orum_Mongolian_Clotted_Cream.jpg/800px-Orum_Mongolian_Clotted_Cream.jpg",
  },
  {
    name: "Byaslag",
    slug: "/byaslag",
    description: "Mongolian homemade cheese, firm and slightly salty.",
    calories: { kcals: 180, emoji: "🔥" },
    burnTime: { duration: "18m", emoji: "🏃" },
    dishEmoji: "🧀",
    taste: { level: "7/10", emoji: "🏆" },
    health: "light",
    rank: 5,
    globalRanking: 14,
    category: "dairy",
    wikipedia: "https://en.wikipedia.org/wiki/Byaslag",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mongolian_Byaslag_Cheese.jpg/800px-Mongolian_Byaslag_Cheese.jpg",
  },
  {
    name: "Uurag",
    slug: "/uurag",
    description: "Colostrum milk, thick and nutritious.",
    calories: { kcals: 200, emoji: "🔥" },
    burnTime: { duration: "20m", emoji: "🏃" },
    dishEmoji: "🥛🔥",
    taste: { level: "8/10", emoji: "🏆" },
    health: "light",
    rank: 6,
    globalRanking: 15,
    category: "dairy",
    wikipedia: "https://en.wikipedia.org/wiki/Colostrum",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Uurag_Colostrum_Milk.jpg/800px-Uurag_Colostrum_Milk.jpg",
  },
  {
    name: "Shar Tos",
    slug: "/shar-tos",
    description: "Melted golden ghee, rich in healthy fats.",
    calories: { kcals: 90, emoji: "🔥" },
    burnTime: { duration: "9m", emoji: "🏃" },
    dishEmoji: "🧈✨",
    taste: { level: "8/10", emoji: "🏆" },
    health: "moderate",
    rank: 7,
    globalRanking: 16,
    category: "dairy",
    wikipedia: "https://en.wikipedia.org/wiki/Ghee",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Shar_Tos_Mongolian_Ghee.jpg",
  },
  {
    name: "Eezgii",
    slug: "/eezgii",
    description: "Dried curd, often eaten as a snack or with tea.",
    calories: { kcals: 130, emoji: "🔥" },
    burnTime: { duration: "13m", emoji: "🏃" },
    dishEmoji: "🧀🍵",
    taste: { level: "6/10", emoji: "🏆" },
    health: "light",
    rank: 8,
    globalRanking: 17,
    category: "dairy",
    wikipedia: "https://en.wikipedia.org/wiki/Eezgii",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e5/Eezgii_Dried_Curd_Mongolia.jpg",
  },
  {
    name: "Khuurmug",
    slug: "/khuurmug",
    description: "Fermented cow’s milk with a tangy taste.",
    calories: { kcals: 140, emoji: "🔥" },
    burnTime: { duration: "14m", emoji: "🏃" },
    dishEmoji: "🥛🍶",
    taste: { level: "7/10", emoji: "🏆" },
    health: "light",
    rank: 9,
    globalRanking: 18,
    category: "dairy",
    wikipedia: "https://en.wikipedia.org/wiki/Khuurmug",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Khuurmug_Mongolian_Dairy.jpg/800px-Khuurmug_Mongolian_Dairy.jpg",
  },

  // Pastries
  {
    name: "Boortsog",
    slug: "/boortsog",
    description: "Fried donut-like Mongolian bread, crispy and slightly sweet.",
    calories: { kcals: 450, emoji: "🔥" },
    burnTime: { duration: "45m", emoji: "🏃" },
    dishEmoji: "🍩🔥",
    taste: { level: "8/10", emoji: "🏆" },
    health: "moderate",
    rank: 1,
    globalRanking: 19,
    category: "pastries",
    wikipedia: "https://en.wikipedia.org/wiki/Boortsog",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/34/Boortsog.jpg",
  },
  {
    name: "Gambir",
    slug: "/gambir",
    description:
      "Thin, crepe-style Mongolian pancake, often served with honey.",
    calories: { kcals: 300, emoji: "🔥" },
    burnTime: { duration: "30m", emoji: "🏃" },
    dishEmoji: "🥞✨",
    taste: { level: "7/10", emoji: "🏆" },
    health: "moderate",
    rank: 2,
    globalRanking: 20,
    category: "pastries",
    wikipedia: "https://en.wikipedia.org/wiki/Gambir",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/Mongolian_Gambir.jpg",
  },
  {
    name: "Ul Boov",
    slug: "/ul-boov",
    description: "Sole-shaped festive bread, stacked during celebrations.",
    calories: { kcals: 320, emoji: "🔥" },
    burnTime: { duration: "32m", emoji: "🏃" },
    dishEmoji: "👞🍞",
    taste: { level: "8/10", emoji: "🏆" },
    health: "moderate",
    rank: 3,
    globalRanking: 21,
    category: "pastries",
    wikipedia: "https://en.wikipedia.org/wiki/Ul_Boov",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Ul_Boov_Mongolian_Festive_Bread.jpg",
  },
  {
    name: "Ölzii Boov",
    slug: "/olzii-boov",
    description: "Fortune bread with a unique shape, a symbol of prosperity.",
    calories: { kcals: 350, emoji: "🔥" },
    burnTime: { duration: "35m", emoji: "🏃" },
    dishEmoji: "☯️🍞",
    taste: { level: "7/10", emoji: "🏆" },
    health: "moderate",
    rank: 4,
    globalRanking: 22,
    category: "pastries",
    wikipedia: "https://en.wikipedia.org/wiki/Ölzii_Boov",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/35/Oelzii_Boov.jpg",
  },
  {
    name: "Talh",
    slug: "/talh",
    description: "Traditional Mongolian bread, soft and fluffy.",
    calories: { kcals: 250, emoji: "🔥" },
    burnTime: { duration: "25m", emoji: "🏃" },
    dishEmoji: "🍞",
    taste: { level: "7/10", emoji: "🏆" },
    health: "heavy",
    rank: 5,
    globalRanking: 23,
    category: "pastries",
    wikipedia: "https://en.wikipedia.org/wiki/Talh",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/58/Talh_Mongolian_Bread.jpg",
  },

  // Beverages
  {
    name: "Suutei Tsai",
    slug: "/suutei-tsai",
    description:
      "Traditional Mongolian salted milk tea, a staple in daily life.",
    calories: { kcals: 80, emoji: "🔥" },
    burnTime: { duration: "8m", emoji: "🏃" },
    dishEmoji: "☕🥛",
    taste: { level: "8/10", emoji: "🏆" },
    health: "heavy",
    rank: 1,
    globalRanking: 5,
    category: "beverages",
    wikipedia: "https://en.wikipedia.org/wiki/Suutei_tsai",
    photoUrl: "/images/dishes/beverages/suutei-tsai.png",
  },
  {
    name: "Airag",
    slug: "/airag",
    description:
      "Fermented mare’s milk with a slightly alcoholic, tangy flavor.",
    calories: { kcals: 150, emoji: "🔥" },
    burnTime: { duration: "15m", emoji: "🏃" },
    dishEmoji: "🍶🐎",
    taste: { level: "7/10", emoji: "🏆" },
    health: "moderate",
    rank: 2,
    globalRanking: 8,
    category: "beverages",
    wikipedia: "https://en.wikipedia.org/wiki/Airag",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Airag_in_Mongolia.jpg",
  },
  {
    name: "Shimiin Arkhi",
    slug: "/shimiin-arkhi",
    description:
      "Distilled milk vodka, strong and creamy with a mild sweetness.",
    calories: { kcals: 160, emoji: "🔥" },
    burnTime: { duration: "16m", emoji: "🏃" },
    dishEmoji: "🥃🔥",
    taste: { level: "8/10", emoji: "🏆" },
    health: "heavy",
    rank: 3,
    globalRanking: 12,
    category: "beverages",
    wikipedia: "https://en.wikipedia.org/wiki/Arkhi",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/90/Shimiin_Arkhi_Mongolian_Distilled_Drink.jpg",
  },
  {
    name: "Khar Tsai",
    slug: "/khar-tsai",
    description: "Black tea, often served plain or with milk and salt.",
    calories: { kcals: 5, emoji: "🔥" },
    burnTime: { duration: "1m", emoji: "🏃" },
    dishEmoji: "🍵",
    taste: { level: "7/10", emoji: "🏆" },
    health: "light",
    rank: 4,
    globalRanking: 15,
    category: "beverages",
    wikipedia: "https://en.wikipedia.org/wiki/Black_tea",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Khar_Tsai_Mongolian_Black_Tea.jpg",
  },
  {
    name: "Nermel Arkhi",
    slug: "/nermel-arkhi",
    description:
      "Traditional Mongolian vodka, distilled from grain or dairy products.",
    calories: { kcals: 200, emoji: "🔥" },
    burnTime: { duration: "20m", emoji: "🏃" },
    dishEmoji: "🥃",
    taste: { level: "8/10", emoji: "🏆" },
    health: "moderate",
    rank: 5,
    globalRanking: 18,
    category: "beverages",
    wikipedia: "https://en.wikipedia.org/wiki/Arkhi",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/34/Nermel_Arkhi_Mongolian_Vodka.jpg",
  },
  {
    name: "Guriltai Shul",
    slug: "/guriltai-shul",
    description:
      "Mongolian noodle soup with mutton or beef, vegetables, and fried noodles.",
    calories: { kcals: 400, emoji: "🔥" },
    burnTime: { duration: "40m", emoji: "🏃" },
    dishEmoji: "🍜🥩",
    taste: { level: "8/10", emoji: "🏆" },
    health: "heavy",
    rank: 1,
    globalRanking: 5,
    category: "soups",
    wikipedia: "https://en.wikipedia.org/wiki/Guriltai_shul",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/38/Mongolian_Noodle_Soup.jpg",
  },
  {
    name: "Bituu Shul",
    slug: "/bituu-shul",
    description:
      "Rich Mongolian miracle soup with beef or mutton, garlic, and green onions.",
    calories: { kcals: 380, emoji: "🔥" },
    burnTime: { duration: "38m", emoji: "🏃" },
    dishEmoji: "🥣🍖",
    taste: { level: "8/10", emoji: "🏆" },
    health: "moderate",
    rank: 2,
    globalRanking: 8,
    category: "soups",
    wikipedia: "https://en.wikipedia.org/wiki/Bituu_shul",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Mongolian_Steamed_Soup.jpg",
  },
  {
    name: "Khuitsaa",
    slug: "/khuitsaa",
    description:
      "Mongolian meatball soup with sliced beef, carrots, and fried potatoes.",
    calories: { kcals: 450, emoji: "🔥" },
    burnTime: { duration: "45m", emoji: "🏃" },
    dishEmoji: "🥣🥩",
    taste: { level: "9/10", emoji: "🏆" },
    health: "heavy",
    rank: 3,
    globalRanking: 12,
    category: "soups",
    wikipedia: "https://en.wikipedia.org/wiki/Khuitsaa",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/75/Mongolian_Meatball_Soup.jpg",
  },
  {
    name: "Bantan",
    slug: "/bantan",
    description:
      "Simple flour soup with minced meat, popular for its ease of digestion.",
    calories: { kcals: 350, emoji: "🔥" },
    burnTime: { duration: "35m", emoji: "🏃" },
    dishEmoji: "🥣🌾",
    taste: { level: "6/10", emoji: "🏆" },
    health: "moderate",
    rank: 8,
    globalRanking: 30,
    category: "soups",
    wikipedia: "https://en.wikipedia.org/wiki/Bantan",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/66/Bantan_Soup.jpg",
  },
  {
    name: "Borts Shul",
    slug: "/borts-shul",
    description:
      "Dried meat soup made from rehydrated borts (air-dried beef or mutton).",
    calories: { kcals: 480, emoji: "🔥" },
    burnTime: { duration: "48m", emoji: "🏃" },
    dishEmoji: "🥩🥣",
    taste: { level: "7/10", emoji: "🏆" },
    health: "moderate",
    rank: 9,
    globalRanking: 35,
    category: "soups",
    wikipedia: "https://en.wikipedia.org/wiki/Borts",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Borts_Soup.jpg",
  },
];
