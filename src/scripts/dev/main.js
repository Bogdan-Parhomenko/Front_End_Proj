(function (){
    "use strict";

    const root = document.documentElement;

    const navToggle = document.querySelector("#js-navToggle");
    navToggle.addEventListener("click", function(){
        root.classList.toggle("show-nav");
    });


    const eventPP = document.querySelector("#js-eventPP");
    const eventOpenBtn = document.querySelector("#js-eventOpenBtn");

    if (eventPP && eventOpenBtn) {
        eventOpenBtn.addEventListener("click", function() {
            root.classList.add("show-event-popup");
        });

        eventPP.addEventListener("click", function(event) {
            if (event.target === this || event.target.classList.contains("js-ppCloseBtn")) {
                root.classList.remove("show-event-popup");
            }
        });

        document.addEventListener("keyup", function(event) {
            if (event.key === "Escape" ||  event.keyCode === 27) {
                root.classList.remove("show-event-popup");
            }
        });
    }

    const swipers = document.querySelectorAll(".js-swiper");

    swipers.forEach(function(swpr) {
        new swipers(swpr, {
            updateOnWindowResize: true,
            slidesPerView: "auto",
            freemode: true,
            spaceBetween: 0,
            speed: 500,
            grabCursor: true
        })
    })
})();