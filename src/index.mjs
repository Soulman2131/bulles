import "./styles.css";

const app = document.querySelector("#app");
let count = 0;

// handleBubble
const handleBubble = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bub");

  document.body.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";
  bubble.style.width = size;
  bubble.style.height = size;
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.setProperty("--left", Math.random() * 100 + "%");

  // Remove Bulle 6s after
  setTimeout(() => {
    bubble.remove();
  }, 6000);

  // Remove to click
  bubble.addEventListener("click", () => {
    bubble.remove();
    count++;
    app.textContent = count;
  });
};

setInterval(() => {
  handleBubble();
}, 1000);
