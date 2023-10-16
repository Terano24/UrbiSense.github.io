var loader=document.getElementById("preloader");
function hidePreloader() {
  loader.style.display = "none";
}
setTimeout(hidePreloader, 1500);
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
  
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  AOS.init();
  
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
  
  //Soal
const SoalSoal = document.getElementById('question');
const buttonPilihan = document.getElementById('options');
const buttonNext = document.getElementById('nextBtn');
const scoreSementara = document.getElementById('score');
const balikButton = document.getElementById('homePage');
const scoreHasilt = document.getElementById('result');
const questions = [
    {
        question: 'Apa yang dimaksud dengan Urban greenspace ?',
        options: ['Area parkir di kota', 'Area pembangunan komersial', 'Area hijau  dalam lingkungan perkotaan', 'Area pemukiman padat penduduk'],
        answer: 'Area hijau  dalam lingkungan perkotaan'
    },
    {
        question: 'Sebutkan salah satu  contoh penerapan Urban greenspace dalam perkotaan !',
        options: ['Gedung Gedung tinggi', 'Tempat pembuangan sampah', 'Lapangan tertutup', 'Kebun Komunitas'],
        answer: 'Kebun Komunitas'
    },
    {
      question: 'Apa peran utama urban greenspace dalam konteks perkotaan?',
        options: ['Meningkatkan kepadatan penduduk', 'Meningkatkan polusi udara', 'Menciptakan area yang hijau dan asri', 'Mempercepat urbanisasi tanpa pertimbangan lingkungan'],
        answer: 'Menciptakan area yang hijau dan asri'
    },
    {
      question: 'Apa yang dimaksud dengan "Rooftop Garden?',
        options: ['Taman yang terletak diatas sebuah bangunan', 'Taman yang terletak di luar kota', 'Taman yang hanya dapat diakses oleh burung', 'Taman yang hanya tumbuh di bawah tanah'],
        answer: 'Taman yang terletak diatas sebuah bangunan'
   },
   {
    question: 'Sebutkan salah satu contoh penerapan Urban Greenspace dalam konteks area yang sempit!',
    options: ['Pembuatan Taman Kota', 'Penerapan Go Green', 'Pembuatan kebun di belakang rumah', 'Pembuatan Cagar Alam'],
    answer: 'Pembuatan kebun di belakang rumah'
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
    window.location.href = '/Home/index.html';
});


repeat();

  document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.querySelector(".sectiontwo-urban-slider .slider-wrapper");
    const slides = Array.from(sliderWrapper.querySelectorAll(".slider-slide"));
    let currentSlideIndex = 0;
  
    const slideInterval = setInterval(() => {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      updateSlider();
    }, 5000);
  
    function updateSlider() {
      slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentSlideIndex);
      });
      sliderWrapper.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    }
  
    dropdownToggle.addEventListener("click", function(event) {
      clearInterval(slideInterval);
    });
  
    window.addEventListener("click", function(event) {
      if (isDropdownOpen && !dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        toggleDropdown();
        slideInterval = setInterval(() => {
          currentSlideIndex = (currentSlideIndex + 1) % slides.length;
          updateSlider();
        }, 3500);
      }
    });

    updateSlider();
  
    function updateSlider() {
      slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentSlideIndex);
      });
      sliderWrapper.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  
      const overlay = document.querySelector(".overlay");
      const placeName = overlay.querySelector(".sectiontwo-urban-contoh-nama");
      const placeDescription = overlay.querySelector(".sectiontwo-urban-contoh-deskripsi");
  
      if (currentSlideIndex === 0) {
        placeName.textContent = "Hyde Park Gardens";
        placeDescription.textContent = "Taman kota yang indah di London, Inggris.";
      } else if (currentSlideIndex === 1) {
        placeName.textContent = "Jardin des Tuileries";
        placeDescription.textContent = "Taman bersejarah yang terletak di Paris, Prancis.";
      } else if (currentSlideIndex === 2) {
        placeName.textContent = "Central Park";
        placeDescription.textContent = "Taman terkenal di tengah kota New York, Amerika Serikat.";
      } else if (currentSlideIndex === 3) {
        placeName.textContent = "Taman Monumen Nasional";
        placeDescription.textContent = "Taman ikonik di pusat Jakarta, Indonesia.";
      } else if (currentSlideIndex === 4) {
        placeName.textContent = "Istana Kekaisaran Tokyo (Bagian Timur)";
        placeDescription.textContent = "Daerah terbuka publik istana kekaisaran di Tokyo, Jepang.";
      }
  
      overlay.style.opacity = 1;
    }
  
  });

  

  