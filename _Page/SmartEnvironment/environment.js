

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
        question: 'Apa yang dimaksud dengan "Renewable Energy"?',
        options: ['Energi yang berasal dari bahan kimia berbahaya', 'Energi yang berasal dari sumber daya alam yang terbarukan', 'Energi yang hanya digunakan sekali', 'Energi yang hanya dihasilkan oleh perusahaan besar'],
        answer: 'Energi yang berasal dari sumber daya alam yang terbarukan'
    },
    {
        question: 'Sebutkan salah satu contoh kota di Indonesia yang sudah menerapkan sistem Smart Environment',
        options: ['Lombok', 'Palembang', 'Banda Aceh', 'Jakarta'],
        answer: 'Jakarta'
    },
    {
      question: 'Apa manfaat dari Internet of Things dalam Smart Enviroment?',
      options: ['Mengurangi kebutuhan data', 'Menambah polusi lingkungan', 'Meningkatkan efisiensi dan pengawasan lingkungan', 'Membatasi penggunaan energi terbaharukan'],
      answer: 'Meningkatkan efisiensi dan pengawasan lingkungan'
    },
    {
      question: 'Bagaimana pengambilan data dalam penggunaan IoT dalam Smart Enviroment?',
      options: ['Melalui jaringan sosial', 'Dengan menggunakan perangkat GPS', 'Melalui sensor-sensor yang terhubung pada objek dan lingkungan', 'Melalui pengecekan secara manual'],
      answer: 'Melalui sensor-sensor yang terhubung pada objek dan lingkungan'
    },
    {
      question: 'Apa yang dimaksud dengan konsep "Green Building"?',
      options: ['Bangunan yang hanya berfokus pada estetika visual', 'Bangunan yang menggunakan sumber daya alam secara berlebihan', 'Bangunan yang dirancang untuk mengurangi dampak lingkungan dan menghemat sumber daya', 'Bangunan yang tidak memperhatikan efisiensi energi dan pengelolaan limbah'],
      answer: 'Bangunan yang dirancang untuk mengurangi dampak lingkungan dan menghemat sumber daya' 
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
// end of dropdown
AOS.init();