import { monsters } from "./data/monsters.js";
import { maps } from "./data/maps.js";
const monsterContainer = document.getElementById("monsterContainer");
const mapMenu = document.getElementById("mapMenu");
function renderMap(map) {
    monsterContainer.innerHTML = "";
    const filtered = monsters.filter(m => m.maps.includes(map));
    filtered.forEach(monster => {
        const card = document.createElement("div");
        card.className = "monsterCard";
        card.innerHTML = `

<h2>${monster.name}</h2>

${monster.variantOf ? `<p>Variant of: ${monster.variantOf}</p>` : ""}

<p><b>Type:</b> ${monster.type}</p>

<p><b>Origin Map:</b> ${monster.originMap}</p>

<p><b>Appears In:</b> ${monster.maps.join(", ")}</p>

<p><b>Elements:</b> ${monster.elements.join(", ")}</p>

<p><b>Weakness:</b> ${monster.weakness.join(", ")}</p>

<p><b>Breakable Parts:</b> ${monster.breakableParts.join(", ")}</p>

`;
        monsterContainer.appendChild(card);
    });
}
maps.forEach(map => {
    const item = document.createElement("a");
    item.textContent = map.name;
    item.onclick = () => renderMap(map.name);
    mapMenu.appendChild(item);
});
