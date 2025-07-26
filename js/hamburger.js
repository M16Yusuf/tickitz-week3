const btnBurger = document.querySelector("div#btn-hamburger");
const contenBurger = document.querySelector("div#content-hamburger");

const btnX = document.querySelector("div#content-hamburger span");

btnBurger.addEventListener("click", () => {
    if(contenBurger.style.display == "none"){
        contenBurger.style.display = "block";   
    } else {
        contenBurger.style.display = "none";
    }
});


btnX.addEventListener("click", ()=> {
    contenBurger.style.display = "none";
})
