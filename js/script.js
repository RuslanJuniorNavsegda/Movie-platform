// Данные фильмов
const movies = [
  {
    title: "Аватар 2",
    year: 2022,
    genre: "Фантастика",
    rating: 7.8,
    description: "Продолжение эпической саги Джеймса Кэмерона",
    poster:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/2e51cb8b-fd51-4166-84a2-63559733baac/1920x",
    theaters: [
      { name: "Кинотеатр Prime", time: "18:00", price: 450 },
      { name: "IMAX Cinema", time: "20:30", price: 600 },
    ],
  },
  {
    title: "Оппенгеймер",
    year: 2023,
    genre: "Драма",
    rating: 8.5,
    description: "История создания атомной бомбы",
    poster: "https://i.playground.ru/e/bG0XtWgzN8dkU7_ET86w9g.png",
    theaters: [
      { name: "АртКино", time: "19:15", price: 400 },
      { name: "Космос Cinema", time: "21:45", price: 550 },
    ],
  },
  {
    title: "Крушение",
    year: 2023,
    genre: "Триллер",
    rating: 6.9,
    description: "Захватывающая история выживания после авиакатастрофы",
    poster:
      "https://static.okko.tv/images/v4/0bdcf83e-376b-43ca-a262-bb190b16aa91",
    theaters: [
      { name: "Синема Парк", time: "17:30", price: 350 },
      { name: "Киномакс", time: "20:00", price: 480 },
    ],
  },
];

// Инициализация фильтров
function createGenreFilters() {
  const genres = ["Все", ...new Set(movies.map((movie) => movie.genre))];
  const filterContainer = document.createElement("div");
  filterContainer.className = "genre-filters";

  genres.forEach((genre) => {
    const btn = document.createElement("button");
    btn.textContent = genre;
    btn.className = "genre-btn";
    btn.setAttribute("data-genre", genre);
    btn.addEventListener("click", handleGenreFilter);
    filterContainer.appendChild(btn);
  });

  document.querySelector(".movies-section").prepend(filterContainer);
  document.querySelector('[data-genre="Все"]').classList.add("active");
}

// Обработчик фильтрации
function handleGenreFilter(e) {
  const genre = e.target.dataset.genre;
  const buttons = document.querySelectorAll(".genre-btn");

  buttons.forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");

  const filteredMovies =
    genre === "Все" ? movies : movies.filter((movie) => movie.genre === genre);

  renderMovies(filteredMovies);
}

// Генерация карточек фильмов
function renderMovies(moviesArray) {
  const container = document.getElementById("moviesContainer");
  container.innerHTML = "";

  moviesArray.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
            <img src="${movie.poster}" class="movie-poster" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.year} • ${movie.genre}</p>
                <p>Рейтинг: ${movie.rating}/10</p>
            </div>
        `;
    card.addEventListener("click", () => showModal(movie));
    container.appendChild(card);
  });
}

// Генерация билетов
function renderTickets() {
  const container = document.getElementById("ticketsContainer");
  container.innerHTML = "";

  movies.forEach((movie) => {
    if (movie.theaters && movie.theaters.length > 0) {
      movie.theaters.forEach((theater) => {
        const ticket = document.createElement("div");
        ticket.className = "ticket-card";
        ticket.innerHTML = `
                    <div class="ticket-info">
                        <h3>${movie.title}</h3>
                        <p class="ticket-theater">${theater.name}</p>
                        <p class="ticket-time">Начало: ${theater.time}</p>
                        <p class="ticket-price">${theater.price} ₽</p>
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

// Обработка покупки билетов
function handleTicketPurchase(movieTitle, theater) {
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

// Модальное окно
function showModal(movie) {
  const modal = document.getElementById("movieModal");
  const content = document.getElementById("modalContent");

  content.innerHTML = `
        <h2>${movie.title} (${movie.year})</h2>
        <img src="${movie.poster}" alt="${movie.title}" class="modal-poster">
        <p>${movie.description}</p>
        <div class="modal-details">
            <p><strong>Жанр:</strong> ${movie.genre}</p>
            <p><strong>Рейтинг:</strong> ${movie.rating}/10</p>
            ${
              movie.theaters
                ? `
            <div class="modal-schedule">
                <h4>Ближайшие сеансы:</h4>
                ${movie.theaters
                  .map(
                    (theater) => `
                    <p>${theater.name} - ${theater.time} (${theater.price} ₽)</p>
                `
                  )
                  .join("")}
            </div>`
                : ""
            }
        </div>
    `;

  modal.style.display = "block";
}

// Закрытие модального окна
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("movieModal").style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    document.getElementById("movieModal").style.display = "none";
  }
});

// Инициализация при загрузке
document.addEventListener("DOMContentLoaded", () => {
  createGenreFilters();
  renderMovies(movies);
  renderTickets();
});
