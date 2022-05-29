const inputPesquisar = document.querySelector(".input");

inputPesquisar.addEventListener("keypress", (event) => {
  if (event.code !== "Enter") {
    return;
  }

  if (inputPesquisar.value !== "") {
    searchMovie(inputPesquisar.value);
  } else {
    init();
  }

  inputPesquisar.value = "";
});

const searchMovie = async (movieName) => {
  const response = await fetch(
    `https://tmdb-proxy.cubos-academy.workers.dev/3/search/movie?language=pt-BR&include_adult=false&query=${movieName}`
  );

  const body = await response.json();
  const { results } = body;
  moviesSearch = [];
  moviesSearch = results;
  makeCardsMovies(0, 5);
  modalMovie();
};
