const modalTitle = document.querySelector(".modal__title");
const imgModal = document.querySelector(".modal__img");
const modalDescription = document.querySelector(".modal__description");
const modalAverage = document.querySelector(".modal__average");
const modalGenre = document.querySelector(".modal__genres");
const modalClose = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");

const getDataModal = async (id) => {
  const response = await fetch(
    `https://tmdb-proxy.cubos-academy.workers.dev/3/movie/${id}?language=pt-BR`
  );

  const body = await response.json();

  makeModal(body);
};

const modalMovie = () => {
  let movie = document.querySelectorAll(".movie");
  movie.forEach((eachMovie) => {
    eachMovie.addEventListener("click", () => {
      getDataModal(eachMovie.dataset.id);
      modal.classList.remove("hidden");
    });
  });
};

const makeModal = (dataModal) => {
  modalGenre.innerHTML = "";

  modalTitle.textContent = dataModal.title;
  imgModal.src = dataModal.backdrop_path;
  modalDescription.textContent = dataModal.overview;
  modalAverage.textContent = dataModal.vote_average;

  const { genres } = dataModal;

  genres.forEach((element) => {
    const genre = document.createElement("span");

    genre.classList.add("modal__genre");
    genre.innerHTML = element.name;

    modalGenre.append(genre);
  });
};

modal.addEventListener("click", (event) => {
  if (
    event.target.className === "modal" ||
    event.target.className === "modal__close"
  ) {
    modal.classList.add("hidden");
  }
});
