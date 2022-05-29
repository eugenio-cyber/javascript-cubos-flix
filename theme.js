const body = document.querySelector("body");
const btnTheme = document.querySelector(".btn-theme");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
let theme = localStorage.getItem("theme") === "dark" ? "dark" : "white";

const changeTheme = () => {
  body.style.setProperty(
    "--background-color",
    theme === "white" ? "#fff" : "#242424"
  );
  body.style.setProperty(
    "--highlight-background",
    theme === "white" ? "#fff" : "#454545"
  );
  body.style.setProperty(
    "--highlight-description",
    theme === "white" ? "#000000cc" : "#ffffffcc"
  );
  body.style.setProperty(
    "--highlight-color",
    theme === "white" ? "#000000b3" : "#ffffffb3"
  );
  body.style.setProperty("--color", theme === "dark" ? "#fff" : "#000");
  btnNext.src =
    theme === "white"
      ? "./assets/seta-direita-preta.svg"
      : "./assets/seta-direita-branca.svg";
  btnPrev.src =
    theme === "white"
      ? "./assets/seta-esquerda-preta.svg"
      : "./assets/seta-esquerda-branca.svg";
  localStorage.setItem("theme", theme);
};

changeTheme();

btnTheme.addEventListener("click", () => {
  theme = localStorage.getItem("theme") === "white" ? "dark" : "white";
  changeTheme();
});
