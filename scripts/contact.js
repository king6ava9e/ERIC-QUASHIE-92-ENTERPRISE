/****************HAMBURGER MENU************* */
const hamburgerButton = document.getElementById("hamburger-icon");
const Nav = document.querySelector(".navbar");

hamburgerButton.addEventListener("click", () =>{
    hamburgerButton.classList.toggle("show");
      Nav.classList.toggle("show");
    
})

/************** FOOTER YEAR INSERTION **************/
const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;