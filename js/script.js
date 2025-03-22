// Данные фильмов
const movies = [
  {
    title: "Аватар 2",
    year: 2022,
    genre: "Фантастика",
    rating: 7.8,
    description: "Продолжение эпической саги Джеймса Кэмерона",
    poster: "https://source.unsplash.com/200x300/?avatar",
  },
  {
    title: "Оппенгеймер",
    year: 2023,
    genre: "Драма",
    rating: 8.5,
    description: "История создания атомной бомбы",
    poster: "https://source.unsplash.com/200x300/?oppenheimer",
  },
  // Добавьте больше фильмов по аналогии
];

// Генерация карточек фильмов
function renderMovies() {
  const container = document.getElementById("moviesContainer");

  movies.forEach((movie) => {
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

// Модальное окно
function showModal(movie) {
  const modal = document.getElementById("movieModal");
  const content = document.getElementById("modalContent");

  content.innerHTML = `
        <h2>${movie.title} (${movie.year})</h2>
        <img src="${movie.poster}" alt="${movie.title}" style="max-width: 300px">
        <p>${movie.description}</p>
        <p>Жанр: ${movie.genre}</p>
        <p>Рейтинг: ${movie.rating}/10</p>
    `;

  modal.style.display = "block";
}

// Закрытие модального окна
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("movieModal").style.display = "none";
});

window.onclick = function (event) {
  const modal = document.getElementById("movieModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Инициализация
document.addEventListener("DOMContentLoaded", renderMovies);
