const hamburger = document.getElementById('hamburger');
const hamburgerMenu = document.getElementById('hamburger-menu')
const closeButton = document.getElementById('close')
const navLink = document.querySelectorAll('.nav-link');
const arrowUp = document.getElementById('arrow-up');
const nightMode = document.getElementById('night-mode');
const body = document.getElementById('body');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const hamburgerButton = document.getElementById('hamburger-button');
const cards = document.querySelectorAll('.card');
const buttonLinks = document.getElementById('button-links');
const contacts = document.querySelectorAll('.social');


const openHamburgerMenu = (e) => {
    
        console.log(e, 'open')
       hamburgerMenu.style.visibility = 'visible';
       hamburgerMenu.style.left = 0;
       hamburgerMenu.style.transition = '1s left ease';
   
}
const closeHamburgerMenu = (e) =>   {
    
        console.log(e, 'close')
        hamburgerMenu.style.visibility = 'hidden';
        hamburgerMenu.style.right = '-100%';
        hamburgerMenu.style.left = '100%';
        
    
}
const moveToTop = (e) => {
    console.log('up i go')
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

const toggleNightMode = (e) =>   {
    console.log(e, 'nightmode!!!');
    body.classList.toggle('dark-mode');
    sun.classList.toggle('dark-mode-button-sun');
    moon.classList.toggle('dark-mode-button-moon');
    hamburger.classList.toggle('dark-mode-hamburger')
    hamburgerButton.classList.toggle('dark-mode-hamburger-button');
    cards.forEach(element => {
        element.classList.toggle('dark-mode-card')
    });
    buttonLinks.classList.toggle('dark-mode-button-links')
    contacts.forEach(element => {
        element.classList.toggle('dark-mode-contacts')
    });
    navLink.forEach(element =>  {
        element.classList.toggle('dark-mode-nav-menu')
    })
    
}
hamburger.addEventListener('click', openHamburgerMenu);
closeButton.addEventListener('click', closeHamburgerMenu)
navLink.forEach(element => {
    element.addEventListener('click', closeHamburgerMenu)
});
arrowUp.addEventListener('click', moveToTop);
nightMode.addEventListener('click', toggleNightMode)