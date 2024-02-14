document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".type-effect");

  const container = document.getElementById("tiles-container");
  const numTilesX = Math.floor(window.innerWidth / 50) + 1; // tile width plus 1 for edges
  const numTilesY = Math.floor(window.innerHeight / 50) + 1; // tile height

  for (let y = 0; y < numTilesY; y++) {
    for (let x = 0; x < numTilesX; x++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.style.left = `${x * 50}px`;
      tile.style.top = `${y * 50}px`;
      container.appendChild(tile);
      tile.style.backgroundColor = `rgb(0, 95, 224)`;
    }
  }

  container.addEventListener("mousemove", (e) => {
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach((tile) => {
      const tileRect = tile.getBoundingClientRect();
      const dx = e.clientX - (tileRect.left + tileRect.width / 2);
      const dy = e.clientY - (tileRect.top + tileRect.height / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);

      const scale = Math.max(0, 1 - dist / 40); // Adjust 40 to control effect radius
      tile.style.transform = `scale(${1 + scale * 0.1})`; // Adjust 0.1 to control effect intensity
      tile.style.backgroundColor = `rgb(0, ${100 + scale * 224}, 224)`; // Adjust color effect
    });
  });

  typeWriter(elements, 0);
});

function typeWriter(elements, index) {
  if (index < elements.length) {
    const element = elements[index];
    const text = element.getAttribute("data-text");
    showText(element, text, 0, () => {
      typeWriter(elements, index + 1);
    });
  }
}

function showText(element, text, i, callback) {
  if (i < text.length) {
    element.textContent += text.charAt(i);
    setTimeout(() => showText(element, text, i + 1, callback), 90); // Increase the typing speed here
  } else if (callback) {
    setTimeout(callback, 330); // Wait a bit before starting the next element
  }
}
