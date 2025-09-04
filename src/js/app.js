// Lazy loading for images
const lazyClass = "lazy-loading";
const lazyImages = document.querySelectorAll(`.${lazyClass}`);

const lazyObserver = new IntersectionObserver((elements) => {
    elements.forEach((element) => {
        if (element.isIntersecting) {
            const image = element.target;
            showImage(image);
            lazyObserver.unobserve(image);
        }
    })
})

lazyImages.forEach(image => {
    lazyObserver.observe(image);
})

function showImage(image) {
    image.src = image.dataset.src;
    image.classList.remove(lazyClass);
}

// Toggle menu on mobile devices
const menuBtn = document.getElementById("hamburger-menu")
const closeBtn = document.getElementById("close-menu")
const headerNavigation = document.querySelector(".header-navigation");
const body = document.querySelector("body");
menuBtn.addEventListener("click", function (event) {
    headerNavigation.classList.add("active");
    menuBtn.classList.remove("icon-active");
    closeBtn.classList.add("icon-active");
    body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", function (event) {
    headerNavigation.classList.remove("active");
    menuBtn.classList.add("icon-active");
    closeBtn.classList.remove("icon-active");
    body.style.overflow = "auto";
})