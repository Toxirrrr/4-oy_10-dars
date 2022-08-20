// if (!localStorage.getItem(`token`)) {
//     window.location.href = "/index.html"
// }

let elForm = document.querySelector(".form")
let elFormLogin = document.querySelector(".login")
let elFormPassword = document.querySelector(".password")

let formLogin = "Toxir";
let formPassword = "Turayev"

////
form.addEventListener("submit", function(event){
    event.preventDefault();
    
    let formLogin = elFormLogin.value.trim();
    let formPassword = elFormPassword.value.trim();
    
    if (checkLogin(formLogin.trim(), formPassword.trim())) {
        localStorage.setItem("token", "ok")
        window.location.href = "/index.html"
    }else {
        alert("ERROR")
    }
    
    checkLogin(formLogin, formPassword);
    
    elFormLogin.value = null
    elFormPassword.value = null
    
})
// 
function checkLogin(loginV, passwordV) {
    if (loginV == formLogin && passwordV == formPassword) {
        return true
    }else {
        return false
    }
}
