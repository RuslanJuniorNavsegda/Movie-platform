// Данные фильмов
const movies = [
  {
    title: "Аватар 2",
    year: 2022,
    genre: "Фантастика",
    rating: 7.8,
    description: "Продолжение эпической саги Джеймса Кэмерона",
    poster: "https://i1.wp.com/wallpapercave.com/wp/wp11794335.jpg",
  },
  {
    title: "Оппенгеймер",
    year: 2023,
    genre: "Драма",
    rating: 8.5,
    description: "История создания атомной бомбы",
    poster: "https://i.ytimg.com/vi/pTt_ox7AgQI/maxresdefault.jpg",
  },
  {
    title: "Крушение",
    year: 2023,
    genre: "Триллер",
    rating: 6.9,
    description: "Захватывающая история выживания после авиакатастрофы",
    poster:
      "https://avatars.mds.yandex.net/i?id=25adcf170b93652b458a8160861c2bab_l-9042901-images-thumbs&n=13",
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
});
