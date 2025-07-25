const form = document.querySelector("form");
const emailInput = form.querySelector("input#ele_mail");
const passInput = form.querySelector("input#pass");

// console.log(form);

passInput.addEventListener("change", (er) => {
    const passW = er.target.value;
    const mustHvDigit = /\d/ ;
    const mustHvChar = /^[a-zA-Z]+$/ ;
    // !@#$%^&*/><
    const mustHvSimbol = /[!@#$%^&*/><]/;

    

    if(mustHvDigit.test(passW) === false){
        const p = document.createElement("p");
        p.textContent = "❌ The password must contain numbers !";
        p.style.cssText =  "font-size: 0.75rem; margin: 2px; color:red";
        passInput.insertAdjacentElement("afterend", p);
        console.log("mustHavedigit");
    }
    if(mustHvChar.test(passW)){
        const p = document.createElement("p");
        p.textContent = "❌ The password must contain characters !";
        p.style.cssText =  "font-size: 0.75rem; margin: 2px; color:red";
        passInput.insertAdjacentElement("afterend", p);
        console.log("musthaveCharr");
    }
    if(mustHvSimbol.test(passW) === false){
        const p = document.createElement("p");
        p.textContent = "❌ The passwords must contain symbols ' !@#$%^&*/><' ";
        p.style.cssText =  "font-size: 0.75rem; margin: 2px; color:red";
        passInput.insertAdjacentElement("afterend", p);
        console.log("musthavesimbol");
    }
    if(passW.length < 8 ){
        const p = document.createElement("p");
        p.textContent = "❌ The password must contain 8 characters";
        p.style.cssText =  "font-size: 0.75rem; margin: 2px; color:red";
        passInput.insertAdjacentElement("afterend", p);
        console.log("must8char");
    }
    if(passW == " "){
        const p = document.createElement("p");
        p.textContent = "❌ The assword cannot be empty";
        p.style.cssText =  "font-size: 0.75rem; margin: 2px; color:red";
        passInput.insertAdjacentElement("afterend", p);
        console.log("cammot empty")
    }
});






