import { MEAT_ITEMS } from "./meat/meat-master.js";
import { FILLER_ITEMS } from "./filler/filler-master.js";
import { VEGETABLE_ITEMS } from "./vegetables/vegetables-master.js";
import { PLUS_ITEMS } from "./plus/plus-master.js";

import { SANDWICH_ITEMS } from "./sandwiches/sandwiches-master.js";
import { DRINK_ITEMS } from "./drinks/drinks-master.js";

export const APP_DATA = {
    meats: MEAT_ITEMS,
    fillers: FILLER_ITEMS,
    vegetables: VEGETABLE_ITEMS,
    plus: PLUS_ITEMS,
    sandwiches: SANDWICH_ITEMS,
    drinks: DRINK_ITEMS
};

console.log("APP_DATA Loaded:", APP_DATA);

// MAIN APP CONTAINER
const app = document.getElementById("app");

/* --------------------------------------------------
   AUTO IMAGE FALLBACK (FOOD ONLY)
-------------------------------------------------- */
function autoImage(name) {
    const keyword = name.toLowerCase().replace(/ /g, "-");
    return `https://loremflickr.com/400/300/${keyword},food`;
}

/* --------------------------------------------------
   INITIAL LAYOUT (ONLY RUNS ONCE)
-------------------------------------------------- */
function initLayout() {
    app.innerHTML = `
        <div id="layout">
            <div id="left-panel"></div>
            <div id="middle-panel"></div>
            <div id="right-panel"></div>
        </div>
    `;
}

function left() { return document.getElementById("left-panel"); }
function middle() { return document.getElementById("middle-panel"); }
function right() { return document.getElementById("right-panel"); }

/* --------------------------------------------------
   MAIN CATEGORIES (LEFT PANEL)
-------------------------------------------------- */
function renderMainCategories() {
    left().innerHTML = `
        <h2 class="panel-title">Categories</h2>
        <div class="panel-list">
            <button class="panel-btn" data-cat="meats">Meats</button>
            <button class="panel-btn" data-cat="fillers">Fillers</button>
            <button class="panel-btn" data-cat="vegetables">Vegetables</button>
            <button class="panel-btn" data-cat="plus">Plus</button>
            <button class="panel-btn" data-cat="sandwiches">Sandwiches</button>
            <button class="panel-btn" data-cat="drinks">Drinks</button>
        </div>
    `;

    document.querySelectorAll(".panel-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            renderSubcategories(btn.dataset.cat);
        });
    });
}

/* --------------------------------------------------
   SUBCATEGORIES (MIDDLE PANEL)
-------------------------------------------------- */
function renderSubcategories(category) {
    const items = APP_DATA[category];

    middle().innerHTML = `
        <h2 class="panel-title">${category.toUpperCase()}</h2>
        <div class="panel-list">
            ${items.map(item => `
                <button class="panel-btn sub-item" data-name="${item.name}">
                    ${item.emoji} ${item.name}
                </button>
            `).join("")}
        </div>
    `;

    document.querySelectorAll(".sub-item").forEach(btn => {
        btn.addEventListener("click", () => {
            const item = items.find(i => i.name === btn.dataset.name);
            renderItemDetails(item);
        });
    });
}

/* --------------------------------------------------
   ITEM DETAILS (RIGHT PANEL)
-------------------------------------------------- */
function renderItemDetails(item) {
    right().innerHTML = `
        <div class="detail-box">
            <h2>${item.emoji} ${item.name}</h2>

            <img src="${item.image || autoImage(item.name)}" class="detail-img"/>

            <h3>Pairs With</h3>
            <p>${formatPairs(item)}</p>

            ${item.directions ? `
                <h3>Directions</h3>
                <ul class="info-list">
                    ${item.directions.map(step => `<li>${step}</li>`).join("")}
                </ul>
            ` : ""}

            ${item.mealPrep ? `
                <h3>Meal Prep Tips</h3>
                <ul class="info-list">
                    ${item.mealPrep.map(tip => `<li>${tip}</li>`).join("")}
                </ul>
            ` : ""}

            ${item.links ? `
                <h3>Buy Ingredients</h3>
                <div class="link-list">
                    ${Object.entries(item.links)
                        .map(([store, url]) => `
                            <a href="${url}" target="_blank" class="store-link">
                                ${store.toUpperCase()}
                            </a>
                        `)
                        .join("")}
                </div>
            ` : ""}
        </div>
    `;
}

function formatPairs(item) {
    if (!item.pairsWith) return "N/A";
    if (Array.isArray(item.pairsWith)) return item.pairsWith.join(", ");
    if (typeof item.pairsWith === "object") return Object.values(item.pairsWith).flat().join(", ");
    return "N/A";
}

/* --------------------------------------------------
   ROUTES
-------------------------------------------------- */
const routes = {
    "meal-builder": () => {
        renderMainCategories();
        middle().innerHTML = "<p>Select a category.</p>";
        right().innerHTML = "<p>Select an item.</p>";
    },
    "sandwiches": () => {
        renderSubcategories("sandwiches");
        right().innerHTML = "<p>Select a sandwich.</p>";
    },
    "drinks": () => {
        renderSubcategories("drinks");
        right().innerHTML = "<p>Select a drink.</p>";
    },
    "categories": () => {
        renderMainCategories();
        middle().innerHTML = "<p>Select a category.</p>";
        right().innerHTML = "<p>Select an item.</p>";
    },
    "history": () => {
        left().innerHTML = "<h2>History</h2>";
        middle().innerHTML = "<p>History coming soon.</p>";
        right().innerHTML = "";
    }
};

/* --------------------------------------------------
   NAVIGATION
-------------------------------------------------- */
function attachNavListeners() {
    document.querySelectorAll("nav .btn").forEach(btn => {
        btn.addEventListener("click", () => {
            routes[btn.dataset.page]();
        });
    });
}

/* --------------------------------------------------
   INITIALIZE APP
-------------------------------------------------- */
initLayout();
attachNavListeners();
routes["meal-builder"]();
