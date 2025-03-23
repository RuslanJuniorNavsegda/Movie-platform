import { promoCodes } from "./data.js";
import { applyDiscount } from "./tickets.js";

export function applyPromo() {
  const input = document.getElementById("promoInput");
  const message = document.getElementById("promoMessage");
  const code = input.value.trim().toUpperCase();

  if (!code) {
    message.textContent = "Введите промокод";
    message.style.color = "#e50914";
    return;
  }

  if (promoCodes[code]) {
    if (!promoCodes[code].used) {
      promoCodes[code].used = true;
      message.textContent = `✅ Промокод активирован! Скидка ${promoCodes[code].discount}%`;
      message.style.color = "#4CAF50";
      applyDiscount(promoCodes[code].discount);
      input.disabled = true;
      setTimeout(() => {
        document.getElementById("promoModal").style.display = "none";
      }, 2000);
    } else {
      message.textContent = "❌ Этот промокод уже использован";
      message.style.color = "#e50914";
    }
  } else {
    message.textContent = "❌ Неверный промокод";
    message.style.color = "#e50914";
  }
}

// Инициализация обработчиков промокодов
document.getElementById("promoButton")?.addEventListener("click", () => {
  document.getElementById("promoModal").style.display = "block";
  document.getElementById("promoInput").value = "";
  document.getElementById("promoMessage").textContent = "";
});

document.querySelector(".close-promo")?.addEventListener("click", () => {
  document.getElementById("promoModal").style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === document.getElementById("promoModal")) {
    document.getElementById("promoModal").style.display = "none";
  }
});
