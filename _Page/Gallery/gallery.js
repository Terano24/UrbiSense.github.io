//preloader
var loader=document.getElementById("preloader");
function hidePreloader() {
  loader.style.display = "none";
}
setTimeout(hidePreloader, 2000);
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
  
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  AOS.init();
  
  var slides = document.querySelectorAll(".slide");
  var buttons = document.querySelectorAll(".slider-btn");
  var clicks = document.querySelectorAll(".slide");
  let currentSlide = 1;
  
  var manualNav = function (manual) {
    slides.forEach(function (slide) {
      slide.classList.remove("active");
      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });
    });
    slides[manual].classList.add("active");
    buttons[manual].classList.add("active");
  };
  buttons.forEach(function (btn, i) {
    btn.addEventListener("click", function () {
      manualNav(i);
      currentSlide = i;
    });
  });
  clicks.forEach(function (btn, currentSlide) {
    btn.addEventListener("click", function () {
      currentSlide += 1;
      if (slides.length <= currentSlide) {
        currentSlide = 0;
      }
      manualNav(currentSlide);
    });
  });
  
  let isDropdownOpen = false;
  
  const dropdownToggle = document.getElementById('dropdown-toggle');
  const dropdownMenu = document.getElementById('dropdown-menu');
  
  function toggleDropdown() {
  isDropdownOpen = !isDropdownOpen;
  dropdownMenu.classList.toggle('active', isDropdownOpen);
  }
  
  dropdownToggle.addEventListener('click', function(event) {
  event.stopPropagation();
  toggleDropdown();
  });
  
  window.addEventListener('click', function(event) {
  if (isDropdownOpen && !dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
    toggleDropdown();
  }
  });
  
  var repeat = function(activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;
  var repeater = function() {
    setTimeout(function() {
      if (!isDropdownOpen) {
        [...active].forEach(function(activeSlide) {
          activeSlide.classList.remove("active");
        });
        slides[i].classList.add("active");
        buttons[i].classList.add("active");
        i++;
        if (slides.length == i) {
          i = 0;
        }
        if (i >= slides.length) {
          return;
        }
      }
      repeater();
    }, 3500);
  };
  repeater();
  };
  
  repeat();
  $(document).ready(function () {
    $(".read-more-link").click(function (event) {
      event.preventDefault();
      const targetSection = $(this).attr("href");
      scrollToSection(targetSection);
    });

    function scrollToSection(targetSection) {
    
      const targetElement = document.querySelector(targetSection);

  
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  });