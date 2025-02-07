document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".home__about");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 } 
    );

    observer.observe(aboutSection);
});

document.addEventListener("DOMContentLoaded", function () {
    const carCards = document.querySelectorAll(".car__card");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target); 
                }
            });
        },
        { threshold: 0.2 } 
    );

    carCards.forEach(card => {
        observer.observe(card);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.querySelector(".hero__section");
    const heroContent = document.querySelector(".hero__content");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show"); 
                    observer.unobserve(entry.target); 
                }
            });
        },
        { threshold: 0.2 } 
    );

    observer.observe(heroSection);
    observer.observe(heroContent);
});

document.querySelector('.to__top').addEventListener('click', function(e) {
    e.preventDefault(); 
    const header = document.querySelector('#header');
    if (header) {
        header.scrollIntoView({ behavior: 'smooth' });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".header__menu-toggle");
    const navMenu = document.querySelector(".header__nav");

    menuToggle.addEventListener("click", function () {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isExpanded);
        navMenu.classList.toggle("open");
        menuToggle.classList.toggle("active"); 
    });
});

document.querySelector(".contact__form").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Your message has been sent!");
    this.reset();
});