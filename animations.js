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