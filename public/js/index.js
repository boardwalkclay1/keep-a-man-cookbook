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

// -------------------------------
// GENERIC LIST RENDERER
// -------------------------------
function renderList(title, items) {
    app.innerHTML = `
        <h2 class="page-title">${title}</h2>
        <div class="list-container">
            ${items.map(item => `
                <div class="list-item">
                    <img src="${item.image}" class="item-img"/>
                    <div class="item-info">
                        <h3>${item.emoji} ${item.name}</h3>
                        <p><strong>Pairs With:</strong> ${formatPairs(item)}</p>
                    </div>
                </div>
            `).join("")}
        </div>
    `;
}

function formatPairs(item) {
    if (!item.pairsWith) return "N/A";

    if (Array.isArray(item.pairsWith)) {
        return item.pairsWith.join(", ");
    }

    if (typeof item.pairsWith === "object") {
        return Object.values(item.pairsWith).flat().join(", ");
    }

    return "N/A";
}

// -------------------------------
// MEAL BUILDER LOGIC
// -------------------------------
function renderMealBuilder() {
    app.innerHTML = `
        <h2 class="page-title">Meal Builder</h2>
        <p class="page-desc">Choose one item from each category to build a full meal.</p>

        <div id="meal-builder-container">

            <div class="builder-section">
                <h3>Meats</h3>
                <div class="builder-list" id="builder-meats"></div>
            </div>

            <div class="builder-section">
                <h3>Fillers</h3>
                <div class="builder-list" id="builder-fillers"></div>
            </div>

            <div class="builder-section">
                <h3>Vegetables</h3>
                <div class="builder-list" id="builder-vegetables"></div>
            </div>

            <div class="builder-section">
                <h3>Plus Items</h3>
                <div class="builder-list" id="builder-plus"></div>
            </div>

            <h3>Your Meal</h3>
            <div id="meal-preview"></div>

            <button class="btn save-meal-btn" id="save-meal">Save Meal</button>
            <button class="btn clear-meal-btn" id="clear-meal">Clear</button>
        </div>
    `;

    const meal = {
        meat: null,
        filler: null,
        vegetable: null,
        plus: null
    };

    function updateMealPreview() {
        const preview = document.getElementById("meal-preview");

        preview.innerHTML = `
            <div class="meal-preview-box">
                <p><strong>Meat:</strong> ${meal.meat ? meal.meat.name : "None"}</p>
                <p><strong>Filler:</strong> ${meal.filler ? meal.filler.name : "None"}</p>
                <p><strong>Vegetable:</strong> ${meal.vegetable ? meal.vegetable.name : "None"}</p>
                <p><strong>Plus:</strong> ${meal.plus ? meal.plus.name : "None"}</p>
            </div>
        `;
    }

    updateMealPreview();

    document.getElementById("save-meal").addEventListener("click", () => {
        const savedMeals = JSON.parse(localStorage.getItem("mealHistory") || "[]");

        savedMeals.push({
            ...meal,
            timestamp: new Date().toISOString()
        });

        localStorage.setItem("mealHistory", JSON.stringify(savedMeals));

        alert("Meal saved!");
    });

    document.getElementById("clear-meal").addEventListener("click", () => {
        meal.meat = null;
        meal.filler = null;
        meal.vegetable = null;
        meal.plus = null;

        updateMealPreview();
    });

    function renderBuilderCategory(containerId, items, type) {
        const container = document.getElementById(containerId);

        container.innerHTML = items
            .map(
                item => `
            <div class="builder-item" data-type="${type}" data-name="${item.name}">
                <img src="${item.image}" class="builder-img"/>
                <p>${item.emoji} ${item.name}</p>
            </div>
        `
            )
            .join("");

        container.querySelectorAll(".builder-item").forEach(el => {
            el.addEventListener("click", () => {
                const selectedName = el.dataset.name;
                const selectedItem = items.find(i => i.name === selectedName);

                meal[type] = selectedItem;
                updateMealPreview();
            });
        });
    }

    renderBuilderCategory("builder-meats", APP_DATA.meats, "meat");
    renderBuilderCategory("builder-fillers", APP_DATA.fillers, "filler");
    renderBuilderCategory("builder-vegetables", APP_DATA.vegetables, "vegetable");
    renderBuilderCategory("builder-plus", APP_DATA.plus, "plus");
}

// -------------------------------
// PAGE ROUTES
// -------------------------------
const routes = {
    "meal-builder": () => renderMealBuilder(),
    "sandwiches": () => renderList("Sandwiches", APP_DATA.sandwiches),
    "drinks": () => renderList("Drinks", APP_DATA.drinks),

    "history": () => {
        const savedMeals = JSON.parse(localStorage.getItem("mealHistory") || "[]");

        app.innerHTML = `
            <h2 class="page-title">Meal History</h2>
            <div class="list-container">
                ${
                    savedMeals.length === 0
                        ? "<p>No meals saved yet.</p>"
                        : savedMeals
                              .map(
                                  meal => `
                    <div class="list-item">
                        <div class="item-info">
                            <h3>Saved Meal</h3>
                            <p><strong>Meat:</strong> ${meal.meat?.name || "None"}</p>
                            <p><strong>Filler:</strong> ${meal.filler?.name || "None"}</p>
                            <p><strong>Vegetable:</strong> ${meal.vegetable?.name || "None"}</p>
                            <p><strong>Plus:</strong> ${meal.plus?.name || "None"}</p>
                        </div>
                    </div>
                `
                              )
                              .join("")
                }
            </div>
        `;
    },

    "categories": () => {
        app.innerHTML = `
            <h2 class="page-title">All Categories</h2>
            <div class="category-list">
                <button class="btn subcat" data-sub="meats">Meats</button>
                <button class="btn subcat" data-sub="fillers">Fillers</button>
                <button class="btn subcat" data-sub="vegetables">Vegetables</button>
                <button class="btn subcat" data-sub="plus">Plus</button>
                <button class="btn subcat" data-sub="sandwiches">Sandwiches</button>
                <button class="btn subcat" data-sub="drinks">Drinks</button>
            </div>
        `;

        document.querySelectorAll(".subcat").forEach(btn => {
            btn.addEventListener("click", () => {
                const sub = btn.dataset.sub;
                renderList(sub.toUpperCase(), APP_DATA[sub]);
            });
        });
    }
};

// -------------------------------
// NAVIGATION HANDLER
// -------------------------------
document.querySelectorAll("nav .btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const page = btn.dataset.page;
        routes[page]();
    });
});

// Load default page
routes["meal-builder"]();
