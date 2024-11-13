document.addEventListener("DOMContentLoaded", function () {
    // Language Toggle
    function setLanguage(language) {
        if (language === "en") {
            document.querySelector("[data-lang='en']").style.display = "block";
            document.querySelector("[data-lang='other']").style.display = "none";
        } else {
            document.querySelector("[data-lang='en']").style.display = "none";
            document.querySelector("[data-lang='other']").style.display = "block";
        }
    }

    // Typewriter effect for hero text
    const heroText = document.getElementById("animated-text");
    let typeIndex = 0;
    const text = "VEDA ESPORTS";
    function typeWriter() {
        if (typeIndex < text.length) {
            heroText.innerHTML += text.charAt(typeIndex);
            typeIndex++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // Automatic carousel sliding
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-item");
    function nextSlide() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    function prevSlide() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    setInterval(nextSlide, 5000); // Auto slide every 5 seconds

    // Highlight active navbar link
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function () {
            document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Trigger animation when hero section comes into view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.getElementById('hero-text').classList.add('animate');
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(heroText);
});
