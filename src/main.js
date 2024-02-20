const hamb=document.getElementById('hamburger')
const navMenu=document.getElementById('nav-menu')
const closeMenu=document.getElementById('nav-close')
const navLink=document.querySelectorAll('.nav__link')
hamb.addEventListener("click",()=>{
navMenu.classList.remove('hidden')
})
closeMenu.addEventListener("click",()=>{
    navMenu.classList.add('hidden')
})

navLink.forEach(element => {
    element.addEventListener("click",()=>{
        navMenu.classList.add('hidden')
    })
});
