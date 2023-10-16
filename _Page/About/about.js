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
  }, 4000);
};
repeater();
};

repeat();
AOS.init();