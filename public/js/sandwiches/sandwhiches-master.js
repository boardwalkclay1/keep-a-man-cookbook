import { sandwichesBasic } from "./sandwiches-basic.js";
import { sandwichesHot } from "./sandwiches-hot.js";
import { sandwichesWraps } from "./sandwiches-wraps.js";

export const SANDWICH_ITEMS = [
    ...sandwichesBasic,
    ...sandwichesHot,
    ...sandwichesWraps
];
