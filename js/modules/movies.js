import { showModal } from "./modal.js";

export function renderMovies(moviesArray) {
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
