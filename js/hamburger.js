const kontenBurger = document.querySelector("div.hamburger");
const tombolBurger = document.querySelector("header nav div img.img-burger");

const tombolX = document.querySelector("div.hamburger :first-child");

tombolBurger.addEventListener("click", () => {
    kontenBurger.style.display = "block";   

});


tombolX.addEventListener("click", ()=> {
    kontenBurger.style.display = "none";
})
