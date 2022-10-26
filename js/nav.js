const navToggle= document.getElementsByClassName(".navegadorToggle")
const navMenu= document.getElementsByClassName(".navegadorMenu")
navToggle.addEventListener("click",() =>{
    navMenu.classList.toggle('.navegadorMenu_visible')
    
})