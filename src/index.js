import './style.css'
let dropdownBtn=document.querySelector("#dropdown-menu-btn")
let dropdownMenu=document.querySelector('.dropdown-menu')
dropdownBtn.addEventListener("click",function(){
    dropdownMenu.classList.toggle('visible')
})