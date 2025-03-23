import { movies } from "./data.js";
import { renderMovies } from "./movies.js";

export function createGenreFilters() {
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

export function handleGenreFilter(e) {
  const genre = e.target.dataset.genre;
  const buttons = document.querySelectorAll(".genre-btn");

  buttons.forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");

  const filteredMovies =
    genre === "Все" ? movies : movies.filter((movie) => movie.genre === genre);

  renderMovies(filteredMovies);
}
