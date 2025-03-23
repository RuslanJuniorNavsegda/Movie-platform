import { movies } from "./data.js";

export function renderTickets() {
  const container = document.getElementById("ticketsContainer");
  container.innerHTML = "";

  movies.forEach((movie) => {
    if (movie.theaters?.length > 0) {
      movie.theaters.forEach((theater) => {
        const ticket = document.createElement("div");
        ticket.className = "ticket-card";
        ticket.innerHTML = `
                    <div class="ticket-info">
                        <h3>${movie.title}</h3>
                        <p class="ticket-theater">${theater.name}</p>
                        <p class="ticket-time">Начало: ${theater.time}</p>
                        <p class="ticket-price" data-original="${theater.price}">${theater.price} ₽</p>
                    </div>
                    <button class="buy-button">Купить билет</button>
                `;

        ticket.querySelector(".buy-button").addEventListener("click", () => {
          handleTicketPurchase(movie.title, theater);
        });

        container.appendChild(ticket);
      });
    }
  });
}

export function handleTicketPurchase(movieTitle, theater) {
  const confirmation = confirm(
    `Подтвердите покупку:\n
        Фильм: ${movieTitle}
        Кинотеатр: ${theater.name}
        Время: ${theater.time}
        Цена: ${theater.price} ₽
        
        Продолжить оплату?`
  );

  if (confirmation) {
    window.open(
      `https://cinema-tickets.com/buy?movie=${encodeURIComponent(movieTitle)}`,
      "_blank"
    );
  }
}

export function applyDiscount(discount) {
  document.querySelectorAll(".ticket-price").forEach((priceElement) => {
    const originalPrice = parseInt(priceElement.dataset.original);
    const newPrice = originalPrice * (1 - discount / 100);
    priceElement.innerHTML = `<s>${originalPrice} ₽</s> ${Math.round(
      newPrice
    )} ₽`;
    priceElement.style.color = "#4CAF50";
  });
}
