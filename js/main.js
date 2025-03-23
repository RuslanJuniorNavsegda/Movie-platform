import { createGenreFilters } from "./modules/filters.js";
import { renderMovies } from "./modules/movies.js";
import { renderTickets } from "./modules/tickets.js";
import { initModalHandlers } from "./modules/modal.js";
import { movies } from "./modules/data.js";

document.addEventListener("DOMContentLoaded", () => {
  createGenreFilters();
  renderMovies(movies);
  renderTickets();
  initModalHandlers();
});
