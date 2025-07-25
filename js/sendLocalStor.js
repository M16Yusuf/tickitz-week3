

// const form = document.querySelector("form");

// console.log(formin);
form.addEventListener("submit", (e)  =>{
    e.preventDefault();
    const getDataEmail = form.querySelector("input#ele_mail");
    const getDatapass = form.querySelector("input#pass");

    // console.log(dataEmail, dataPass);
    const getEmail = getDataEmail.value;
    const getPass = getDatapass.value;

    console.log(`this email ${getEmail} this pass ${getPass}`);
    localStorage.setItem('email', getEmail);
    localStorage.setItem('password', getPass);

    // make info account created 
    const p = document.createElement("p");
    p.textContent = "✅ Account created sucessfully, try login page!";
    p.style.cssText =  "font-size: 0.75rem; margin: 2px; color:green";
    getDatapass.insertAdjacentElement("afterend", p);
});

