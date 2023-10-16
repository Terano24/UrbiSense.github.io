// //preloader
// var loader=document.getElementById("preloader");
// function hidePreloader() {
//   loader.style.display = "none";
// }
// setTimeout(hidePreloader, 2000);
// document.addEventListener('scroll', () => {
//     const header = document.querySelector('header');
  
//     if (window.scrollY > 0) {
//       header.classList.add('scrolled');
//     } else {
//       header.classList.remove('scrolled');
//     }
//   });
  
//   AOS.init();
  
//   var slides = document.querySelectorAll(".slide");
//   var buttons = document.querySelectorAll(".slider-btn");
//   var clicks = document.querySelectorAll(".slide");
//   let currentSlide = 1;
  
//   var manualNav = function (manual) {
//     slides.forEach(function (slide) {
//       slide.classList.remove("active");
//       buttons.forEach((btn) => {
//         btn.classList.remove("active");
//       });
//     });
//     slides[manual].classList.add("active");
//     buttons[manual].classList.add("active");
//   };
//   buttons.forEach(function (btn, i) {
//     btn.addEventListener("click", function () {
//       manualNav(i);
//       currentSlide = i;
//     });
//   });
//   clicks.forEach(function (btn, currentSlide) {
//     btn.addEventListener("click", function () {
//       currentSlide += 1;
//       if (slides.length <= currentSlide) {
//         currentSlide = 0;
//       }
//       manualNav(currentSlide);
//     });
//   });
  
//   let isDropdownOpen = false;
  
//   const dropdownToggle = document.getElementById('dropdown-toggle');
//   const dropdownMenu = document.getElementById('dropdown-menu');
  
//   function toggleDropdown() {
//   isDropdownOpen = !isDropdownOpen;
//   dropdownMenu.classList.toggle('active', isDropdownOpen);
//   }
  
//   dropdownToggle.addEventListener('click', function(event) {
//   event.stopPropagation();
//   toggleDropdown();
//   });
  
//   window.addEventListener('click', function(event) {
//   if (isDropdownOpen && !dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
//     toggleDropdown();
//   }
//   });
  
//   var repeat = function(activeClass) {
//   let active = document.getElementsByClassName("active");
//   let i = 1;
//   var repeater = function() {
//     setTimeout(function() {
//       if (!isDropdownOpen) {
//         [...active].forEach(function(activeSlide) {
//           activeSlide.classList.remove("active");
//         });
//         slides[i].classList.add("active");
//         buttons[i].classList.add("active");
//         i++;
//         if (slides.length == i) {
//           i = 0;
//         }
//         if (i >= slides.length) {
//           return;
//         }
//       }
//       repeater();
//     }, 3500);
//   };
//   repeater();
//   };
  
//   repeat();
//   $(document).ready(function () {
//     $(".read-more-link").click(function (event) {
//       event.preventDefault();
//       const targetSection = $(this).attr("href");
//       scrollToSection(targetSection);
//     });

//     function scrollToSection(targetSection) {
    
//       const targetElement = document.querySelector(targetSection);

  
//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   });
var loader=document.getElementById("preloader");
function hidePreloader() {
  loader.style.display = "none";
}
setTimeout(hidePreloader, 1500);
// header.scrolled
document.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// dropdown
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

//Soal
const SoalSoal = document.getElementById('question');
const buttonPilihan = document.getElementById('options');
const buttonNext = document.getElementById('nextBtn');
const scoreSementara = document.getElementById('score');
const balikButton = document.getElementById('homePage');
const scoreHasilt = document.getElementById('result');
const questions = [
    {
        question: 'Apa peran sensor dalam ekosistem IoT?',
        options: ['Mengurangi daya baterai perangkat', 'Mengurangi daya baterai perangkat meningkatkan keamanan siber', 'Mendeteksi dan mengukur informasi dari lingkungan fisik', ' Menghubungkan perangkat dengan jaringan sosial'],
        answer: 'Mendeteksi dan mengukur informasi dari lingkungan fisik'
    },
    {
      question: 'Sebutkan salah satu contoh alat yang dapat digunakan dalam menerapkan konsep IoT!',
      options: ['Server', 'Motherboard', 'Arduino', 'Speaker'],
      answer: 'Arduino'
    },
    {
      question: 'Apa yang dimaksud dengan "Smart Home" dalam konteks IoT?',
      options: ['Rumah yang pintar dan bisa berbicara', 'Rumah yang hanya menggunakan teknologi canggih', 'Rumah yang menggunakan konsep IoT untuk menciptakan suatu ekosistem', 'Rumah dengan tanaman hijau yang cerdas'],
      answer: 'Rumah yang menggunakan konsep IoT untuk menciptakan suatu ekosistem'
    },
    {
      question: 'Apa yang dimaksud dengan "IoT Ecosystem"?',
      options: ['Sekelompok perangkat yang tidak saling terhubung', 'Lingkungan alami yang tidak berkaitan dengan teknologi', 'Jaringan kompleks dari perangkat yang saling berhubungan dan berinteraksi dalam ekosistem IoT', 'Rumah dengan tanaman hijau yang cerdas'],
      answer: 'Jaringan kompleks dari perangkat yang saling berhubungan dan berinteraksi dalam ekosistem IoT'
   },
   {
      question: 'Contoh alat yang berkaitan dengan konsep IoT',
      options: ['Microwave', 'Magicom', 'Pintu Otomatis', 'Lampu'],
      answer: 'Pintu Otomatis'
   },

];

let score = 0;
let jumlahSoal = 0;

function showQuestion() {
    const currentQuestion = questions[jumlahSoal];
    SoalSoal.textContent = currentQuestion.question;
    buttonPilihan.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => Cek(option, currentQuestion.answer));
        buttonPilihan.appendChild(button);
    });

    scoreSementara.textContent = `Poin: ${score}`;
}

function Cek(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        alert('Jawaban Anda benar!');
        score+=5;
    } else {
        alert('Jawaban Anda salah. Coba lagi.');
        if(score>=5){
         score-=5;
        }
    }

    jumlahSoal++;
    if (jumlahSoal < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}



buttonNext.addEventListener('click', () => {
    const confirmContinue = confirm('Apakah Anda yakin untuk melanjutkan soal? Akan dikenakan -5 poin jika melanjutkan.');
    if (confirmContinue) {
        if (score >= 5) {
            score -= 5;
        } else {
            score = 0;
        }
        jumlahSoal++;
        if (jumlahSoal < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }
});
showQuestion();
function showResult() {
    SoalSoal.textContent = '';
    buttonPilihan.innerHTML = '';
    scoreHasilt.textContent = `Poin akhir Anda: ${score}`;

    balikButton.style.display = 'block';
    buttonNext.style.display = 'none';
    scoreSementara.style.display = 'none'; 
}

balikButton.addEventListener('click', () => {
    window.location.href = '/Home/index.html'; // Replace 'index.html' with the desired URL
});


repeat();
// end of dropdown
AOS.init();