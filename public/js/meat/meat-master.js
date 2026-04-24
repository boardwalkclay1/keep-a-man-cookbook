import meatBasic from "./meat-basic.js";
import meatCanned from "./meat-canned.js";
import meatFrozen from "./meat-frozen.js";
import meatPremium from "./meat-premium.js";
import meatMisc from "./meat-misc.js";

export const MEAT_ITEMS = [
    ...meatBasic,
    ...meatCanned,
    ...meatFrozen,
    ...meatPremium,
    ...meatMisc
];
