let hamburger =document.querySelector('.hamburger')
let cancel = document.querySelector('.cancel')
let nav_items = document.querySelector('.nav-items')

function navbar(){
    hamburger.style.display='none'
    cancel.style.display='block'
    nav_items.style.display='block'
}

function navbars(){
    hamburger.style.display='block'
    nav_items.style.display='none'
    cancel.style.display='none'
}

hamburger.addEventListener('click', navbar)
cancel.addEventListener('click', navbars)