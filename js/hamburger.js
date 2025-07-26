const btnBurger = document.querySelector("div#btn-hamburger");
const contenBurger = document.querySelector("div#content-hamburger");

btnBurger.addEventListener("click", () => {
    contenBurger.classList.toggle("hidden");   
});

