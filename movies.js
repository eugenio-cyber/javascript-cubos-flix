const divMovies = document.querySelector(".movies");
const videoBackground = document.querySelector(".highlight__video");
const videoLink = document.querySelector(".highlight__video-link");
const title = document.querySelector(".highlight__title");
const rating = document.querySelector(".highlight__rating");
const listGenres = document.querySelector(".highlight__genres");
const launch = document.querySelector(".highlight__launch");
const description = document.querySelector(".highlight__description");
let movies = [];
let moviesSearch = [];
let video = [];
let general = [];

const getMovies = async () => {
  const response = await fetch(
    "https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false"
  );

  const body = await response.json();

  movies = body.results;
  moviesSearch = movies;
};

const getMovieHighlight = async () => {
  const response = await fetch(
    "https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969?language=pt-BR"
  );

  const body = await response.json();

  general = body;
};

const getVideoHighlight = async () => {
  const response = await fetch(
    "https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969/videos?language=pt-BR"
  );

  const body = await response.json();

  video = body;
};

const makeCardsMovies = (start, end) => {
  divMovies.innerHTML = "";
  let array = moviesSearch.slice(start, end);
  array.forEach((element) => {
    const movie = document.createElement("div");
    movie.classList.add("movie");
    movie.style.backgroundImage = `url(${element.poster_path})`;
    movie.setAttribute("data-id", element.id);

    const movieInfo = document.createElement("div");
    movieInfo.classList.add("movie__info");

    const title = document.createElement("span");
    title.classList.add("movie__title");
    title.textContent = element.title;

    const rating = document.createElement("span");
    rating.classList.add("movie__rating");
    rating.textContent = element.vote_average;

    const imgStar = document.createElement("img");
    imgStar.src = "./assets/estrela.svg";
    imgStar.alt = "Estrela";

    rating.append(imgStar);
    movieInfo.append(title, rating);
    movie.append(movieInfo);
    divMovies.append(movie);
  });
};

const makeMovieHighlight = () => {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const arrayGenres = [];
  const { genres } = general;
  let date = general.release_date;
  const overview = general.overview;
  const { key } = video.results[0];

  videoBackground.style.backgroundImage = `url(${general.backdrop_path})`;
  title.textContent = general.title;
  rating.textContent = general.vote_average;

  genres.forEach((element) => {
    arrayGenres.push(element.name);
  });

  listGenres.textContent = arrayGenres.join(", ");
  date = date.split("-");
  let mes = date[1];

  launch.textContent = `${date[2]} de ${meses[Number(mes) - 1]} de ${date[0]}`;

  description.textContent = overview;

  videoLink.href = `https://www.youtube.com/watch?v=${key}`;
};

const init = async () => {
  await getMovies();
  makeCardsMovies(0, 5);
  await getMovieHighlight();
  await getVideoHighlight();
  makeMovieHighlight();
  modalMovie();
};

init();
