const facts = [
    "Bulgaria is the oldest country in Europe that hasn't changed its name.",
    "The Bulgarian alphabet uses Cyrillic and was developed in the First Bulgarian Empire.",
    "The roses in Kazanlak produce a large share of the world's rose oil.",
    "Bulgaria has both mountains and a Black Sea coastline.",
    "Plovdiv is one of the oldest continuously inhabited cities in Europe."
];

const btn = document.getElementById("fact-btn");
const factEl = document.getElementById("fact");

if (btn && factEl) {
    btn.addEventListener("click", () => {
        const index = Math.floor(Math.random() * facts.length);
        factEl.textContent = facts[index];
    });
}