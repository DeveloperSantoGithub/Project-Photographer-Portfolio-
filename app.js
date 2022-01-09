// Humburger nav bar 
const nav = document.querySelector(".nav-links");
const burger = document.querySelector('.burger');
const links = nav.querySelectorAll("a");


burger.addEventListener("click", ()=>{
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle"); 
})

links.forEach(link =>{
    link.addEventListener("click", ()=>{
        nav.classList.toggle("nav-open");
        burger.classList.toggle("toggle");
    })
})

// gallery Image Lightbox 
const lightbox = document.createElement('div');
lightbox.id = 'lightbox'
document.body.appendChild(lightbox);

const images = document.querySelectorAll('#gallery img');
images.forEach(image =>{
    image.addEventListener('click', e =>{
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src
        while(lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    })  
});

lightbox.addEventListener('click', e=>{
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active');
});

// Scroll Top Button 
function scrollToTop(){
    window.scrollTo(0,0);
}