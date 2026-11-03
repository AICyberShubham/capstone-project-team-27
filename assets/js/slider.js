// Slider script written by Abhi for IIT Patna Banner
// Scroll reveal added by Shubham for smooth page transitions
window.addEventListener("DOMContentLoaded", function () {
    // 1. Banner Image Slider (for home page)
    var slides = document.querySelectorAll(".slider-width");
    var currentSlide = 0;

    function showNextSlide() {
        if (!slides || slides.length === 0) return;
        
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        slides[currentSlide].style.display = "block";
        currentSlide = (currentSlide + 1) % slides.length;
    }

    if (slides.length > 0) {
        showNextSlide();
        setInterval(showNextSlide, 3500);
    }

    // 2. Smooth Scroll Reveal (IntersectionObserver)
    if ("IntersectionObserver" in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });

        var revealElements = document.querySelectorAll(".content-card, .faculty-card, .event-card, .stat-box, .custom-table");
        revealElements.forEach(function (el) {
            el.classList.add("reveal-on-scroll");
            revealObserver.observe(el);
        });
    }
});
