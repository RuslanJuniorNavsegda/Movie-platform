export function showModal(movie) {
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

export function initModalHandlers() {
  document.querySelector(".close")?.addEventListener("click", () => {
    document.getElementById("movieModal").style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      document.getElementById("movieModal").style.display = "none";
    }
  });
}
