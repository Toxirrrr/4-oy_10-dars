if (!localStorage.getItem(`token`)) {
    window.location.href = "/login.html"
}



let logOut = document.querySelector(".log__out") 

logOut.addEventListener("click", function () {
    localStorage.removeItem("token")

    window.location.href = "/login.html"
})

// let elForm = document.querySelector(".form")
// let elLogin = document.querySelector(".login")
// let elPassword = document.querySelector(".password")

// form.addEventListener("submit", function(event){
//     event.preventDefault();
    
//     let formLogin = elLogin.value.trim();
//     let formPassword = elPassword.value.trim();
//     console.clear();
    
//     console.log(formLogin, formPassword);
    
//     elLogin.value = null
//     elPassword.value = null

// })