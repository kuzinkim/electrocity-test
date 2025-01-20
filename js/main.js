document.addEventListener("DOMContentLoaded", () => {
    let mobile = window.matchMedia("(max-width: 767px)").matches;

    function moveElement() {
        let placeToMove = document.querySelector(".header-controls");
        let town = document.querySelector(".header-location__item--town");
        let shop = document.querySelector(".header-location__item--shop");
        let cloneTown = town.cloneNode(true);
        let cloneShop = shop.cloneNode(true);
        placeToMove.appendChild(cloneShop);
        placeToMove.appendChild(cloneTown);
    }


    if (window.matchMedia('(max-width: 767px)').matches) {
        moveElement();
    }


    window.addEventListener("resize", () => {
        if (window.matchMedia("(max-width: 767px)").matches && !document.querySelector(".header-controls .header-location__item")) {
            moveElement();
        }
    });

    let burger = document.querySelector(".js-burger");
    let closeCatalogBtn = document.querySelector(".catalog__close");

    burger.addEventListener("click", () => {
        document.querySelector(".catalog").classList.toggle("is-active");
    });

    closeCatalogBtn.addEventListener("click", () => {
        document.querySelector(".catalog").classList.remove("is-active");
    });

    let footer = document.querySelector('.footer');
    let navBar = document.querySelector('.nav-bar');

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navBar.classList.remove('fixed');
            } else {
                navBar.classList.add('fixed');
            }
        });
    };
    const observer = new IntersectionObserver(callback, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    observer.observe(footer);

    let swiper = new Swiper(".swiper", {
        slidesPerView: 'auto',
        spaceBetween: 18,
        navigation: {
            nextEl: ".scroll-button.right",
        },
        breakpoints: {
            768: {
                spaceBetween: 36,
            },
        }
    });
});