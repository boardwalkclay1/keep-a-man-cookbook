import { MEAT_ITEMS } from "./meat/meat-master.js";
import { FILLER_ITEMS } from "./filler/filler-master.js";
import { VEGETABLE_ITEMS } from "./vegetables/vegetables-master.js";
import { PLUS_ITEMS } from "./plus/plus-master.js";

import { sandwichesBasic } from "./sandwiches/sandwiches-basic.js";
import { sandwichesHot } from "./sandwiches/sandwiches-hot.js";
import { sandwichesWraps } from "./sandwiches/sandwiches-wraps.js";

import { drinksCold } from "./drinks/drinks-cold.js";
import { drinksHot } from "./drinks/drinks-hot.js";
import { drinksSmoothies } from "./drinks/drinks-smoothies.js";

export const APP_DATA = {
    meats: MEAT_ITEMS,
    fillers: FILLER_ITEMS,
    vegetables: VEGETABLE_ITEMS,
    plus: PLUS_ITEMS,
    sandwiches: [
        ...sandwichesBasic,
        ...sandwichesHot,
        ...sandwichesWraps
    ],
    drinks: [
        ...drinksCold,
        ...drinksHot,
        ...drinksSmoothies
    ]
};

console.log("APP_DATA Loaded:", APP_DATA);
