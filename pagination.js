const btnPaginationPrev = document.querySelector(".btn-prev");
const btnPaginationNext = document.querySelector(".btn-next");
let prev = 0;
let next = 5;

btnPaginationNext.addEventListener("click", () => {
  prev += 5;
  next += 5;

  if (prev === 20 && next === 25) {
    prev = 0;
    next = 5;
  }

  makeCardsMovies(prev, next);
  modalMovie();
});

btnPaginationPrev.addEventListener("click", () => {
  prev -= 5;
  next -= 5;

  if (prev === -5 && next === 0) {
    prev = 15;
    next = 20;
  }

  makeCardsMovies(prev, next);
  modalMovie();
});
