const toggler = document.querySelector(".toggler__btn--open")
const body = document.querySelector("body")
const togglerBlock = document.querySelector(".toggler")
const burger = document.querySelector(".burger")
const burgerMenu = document.querySelector(".burger__menu")
toggler.addEventListener("click", () => {
    togglerBlock.classList.toggle("active")
})
const btn = document.querySelectorAll(".toggler__btn");
btn[0].classList.add("active")
btn.forEach((item) => {
    item.addEventListener("click", () => {
        btn.forEach((item) => {
            item.classList.remove("active");
        })
        item.classList.add("active")
    })
})
const togglerBtn = document.querySelector(".toggler__toggler");
togglerBtn.addEventListener("click", () => {
    togglerBtn.classList.toggle("active")
    body.classList.toggle("active")
})

burgerMenu.addEventListener("click", () => {
    burger.classList.toggle("active")
    if (burger.classList.contains("active")) {
        body.style.overflow = "hidden"
    } else {
        body.style.overflow = "unset"
    }
})

const service = new Swiper(".service-slide", {
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: '.serviceBtn',
    },
    pagination: {
        el: ".pogination-service",
    },
    spaceBetween: 40,
    breakpoints: {
        320: {       
            slidesPerView: 1,
        },
        770: {       
            slidesPerView: 2,
        },
        1215: {
            slidesPerView: 3,
        },
    },
});
const slid = new Swiper(".project-slide", {
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: '.slid-button-next',
    },
    pagination: {
        el: ".pogination_slid",
    },
    spaceBetween: 40,
    breakpoints: {
        320: {       
            slidesPerView: 1,
        },
        770: {       
            slidesPerView: 2,
        },
        1215: {
            slidesPerView: 3,
        },
    },
});
const team__slide = new Swiper(".team__slide", {
    slidesPerView: 4,
    loop: true,
    navigation: {
        nextEl: '.team__next',
    },
    pagination: {
        el: ".team-pogination",
    },
    spaceBetween: 40,
    breakpoints: {
        320: {       
            slidesPerView: 1,
        },
        600: {       
            slidesPerView: 2,
        },
        800: {       
            slidesPerView: 3,
        },
        1215: {
            slidesPerView: 4,
        },
    },
});