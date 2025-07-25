const form = document.querySelector("form");

form.addEventListener("submit", (e)  =>{
    e.preventDefault();
    const getDataEmail = form.querySelector("input#ele_mail");
    const getDatapass = form.querySelector("input#pass");

    const getEmail = getDataEmail.value;
    const getPass = getDatapass.value;
    if(getEmail == localStorage.getItem('email') && getPass == localStorage.getItem('password')){
        window.open("../pages/profile/account_seting.html");
        window.open.replace("../pages/profile/account_seting.html");
    } else {
        const p = document.createElement("p");
        p.textContent = "❌ email or password is not match";
        p.style.cssText =  "font-size: 0.75rem; margin: 2px; color:red";
        getDatapass.insertAdjacentElement("afterend", p);
        console.log("email or password not match");
        // alert("email or password not match");
    }
});