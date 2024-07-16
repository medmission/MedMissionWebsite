document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("closeBtn");

    hamburger.addEventListener("click", function() {
        overlay.style.display = "flex"; // Ensure the overlay is displayed
        setTimeout(() => {
            overlay.classList.add("active"); // Add active class to start the slide-in transition
        }, 10); // Delay slightly to allow for display update
    });

    closeBtn.addEventListener("click", function() {
        overlay.classList.remove("active"); // Remove active class to start the slide-out transition
        setTimeout(() => {
            overlay.style.display = "none"; // Hide the overlay after the transition
        }, 300); // Match the transition duration
    });

    // Close the overlay when clicking outside of the menu
    overlay.addEventListener("click", function(event) {
        if (event.target === overlay) {
            overlay.classList.remove("active");
            setTimeout(() => {
                overlay.style.display = "none";
            }, 300);
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.querySelector(".gallery-container");
    const images = document.querySelectorAll(".gallery-container img");
    const leftBtn = document.getElementById("leftBtn");
    const rightBtn = document.getElementById("rightBtn");
    let currentIndex = 0;

    function updateGallery(index) {
        galleryContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    rightBtn.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery(currentIndex);
    });

    leftBtn.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery(currentIndex);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const partnerItems = document.querySelectorAll('.partner-item');
 
    partnerItems.forEach(item => {
             const address = item.getAttribute('data-address');
             const overlay = item.querySelector('.partner-overlay p');
             overlay.textContent = address;
         });
     });

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');

    let navWorking = false;

    // Add an event listener to the hamburger menu
    hamburger.addEventListener('click', function() {
        if (mobileNav.style.display === "none" || mobileNav.style.display === "") {
            mobileNav.style.display = "block";
            navWorking = true;
        } else {
            mobileNav.style.display = "none";
            navWorking = false;
        }
    });

    // After the first click, check if the nav is working
    hamburger.addEventListener('click', function() {
        setTimeout(function() {
            if (!navWorking) {
                alert("The navigation menu is currently down. Please use the links in the footer to navigate.");
            }
        }, 500);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentlyActiveButton = document.querySelector('.accordion-button.active');
            if (currentlyActiveButton && currentlyActiveButton !== button) {
                currentlyActiveButton.classList.remove('active');
                currentlyActiveButton.nextElementSibling.style.maxHeight = 0;
            }

            button.classList.toggle('active');
            const accordionContent = button.nextElementSibling;
            if (button.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = 0;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active-slide");
            slides[i].classList.remove("prev-slide");
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        if (slideIndex === 1) {
            slides[slides.length - 1].classList.add("prev-slide");
        } else {
            slides[slideIndex - 2].classList.add("prev-slide");
        }
        slides[slideIndex - 1].classList.add("active-slide");
        
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[slideIndex - 1].className += " active";
        
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    showSlides();
    
    // For manual dot control
    window.currentSlide = function(n) {
        slideIndex = n - 1;
        showSlides();
    }
});

window.onload = function() { 
    var el = document.getElementById('g-recaptcha-response'); 
    if (el) { 
      el.setAttribute('required', 'required'); 
    } 
  }
