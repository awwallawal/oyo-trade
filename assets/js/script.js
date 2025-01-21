"use strict";


// Navbar Toggle: Select All Elements Needed for Navbar Toggle

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navBar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]")
const dropDown = document.querySelectorAll('.navbar-dropdown')
const ionDrop = document.querySelector('.ion-drop');
const aboutt = document.querySelectorAll(".aboutt")

console.log(navOpenBtn, navBar, navCloseBtn, overlay, dropDown, ionDrop, aboutt);

for (let i = 0; i < aboutt.length; i++) {
    aboutt[i].addEventListener("click", function () {
        // Check if the clicked dropdown is already active
        const isActive = dropDown[i].classList.contains('active');

        // Remove 'active' class from all dropdowns
        dropDown.forEach((dropdown) => dropdown.classList.remove('active'));

        // Toggle 'active' class only if it was not active
        if (!isActive) {
            dropDown[i].classList.add('active');
        }
    });
}

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i=0; i < elemArr.length; i++) {
    elemArr[i].addEventListener("click", function (){
        navBar.classList.toggle('active');
        overlay.classList.toggle('active');
    })
}

// Toggle Navbar and Overlay When Click any Navbar-Link

const navbarLinks = document.querySelectorAll ("[data-navbar-links]");
console.log(navbarLinks);

for(let i = 0; i < navbarLinks.length; i++){
    navbarLinks[i].addEventListener ("click", function(){
        // navBar.classList.toggle('active');
        // overlay.classList.toggle('active');
        
    });
}



// Go top button shows when windows scroll down to 400px

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function (){
    if(this.window.scrollY >= 400) {
        header.classList.add('active');
        // The background color changes to white else the color remain Blue which is the color of the hero section.
        goTopBtn.classList.add("active");
    } else {
        header.classList.remove('active');
        goTopBtn.classList.remove("active");
    }
})
// Get Year Dynamicaclly in Footer

const todayYear = document.getElementById('today_year');
let todayDate = new Date();
let currentYear = todayDate.getFullYear();
todayYear.textContent += ` ${currentYear}`;

const check = document.getElementById('check')
check.textContent += "Awwal"