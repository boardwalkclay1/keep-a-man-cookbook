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

// -------------------------------
// PAGE LOGIC
// -------------------------------

const app = document.getElementById("app");

// Render a simple list UI
function renderList(title, items) {
    app.innerHTML = `
        <h2 class="page-title">${title}</h2>
        <div class="list-container">
            ${items
                .map(
                    item => `
                <div class="list-item">
                    <img src="${item.image}" class="item-img"/>
                    <div class="item-info">
                        <h3>${item.emoji} ${item.name}</h3>
                        <p><strong>Pairs With:</strong> ${formatPairs(item)}</p>
                    </div>
                </div>
            `
                )
                .join("")}
        </div>
    `;
}

function formatPairs(item) {
    if (!item.pairsWith) return "N/A";

    if (Array.isArray(item.pairsWith)) {
        return item.pairsWith.join(", ");
    }

    if (typeof item.pairsWith === "object") {
        return Object.values(item.pairsWith)
            .flat()
            .join(", ");
    }

    return "N/A";
}

// -------------------------------
// PAGE ROUTES
// -------------------------------

const routes = {
    "meal-builder": () => {
        app.innerHTML = `
            <h2 class="page-title">Meal Builder</h2>
            <p>Select ingredients from each category to build a meal.</p>
        `;
    },

    sandwiches: () => renderList("Sandwiches", APP_DATA.sandwiches),

    drinks: () => renderList("Drinks", APP_DATA.drinks),

    history: () => {
        app.innerHTML = `
            <h2 class="page-title">Meal History</h2>
            <p>No meals saved yet.</p>
        `;
    },

    categories: () => {
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
        if (routes[page]) routes[page]();
    });
});

// Load default page
routes["meal-builder"]();
