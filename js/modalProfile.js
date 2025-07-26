// toggle moodal 
const btnModal = document.querySelector("span#btn-modal-profile");
const bgModal = document.querySelector("div#bg-modal-profile");
const sectioModal = document.querySelector("section#section-account-seting");

btnModal.addEventListener("click", ()=>{
    bgModal.classList.toggle("hidden");
    sectioModal.classList.toggle("hidden");
});

window.onclick = function (e){
    if(e.target == bgModal){
        bgModal.classList.toggle("hidden");
        sectioModal.classList.toggle("hidden");
    }
};
