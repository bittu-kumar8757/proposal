let current = 0;
const slides = document.querySelectorAll(".slide");

function nextSlide() {
  slides[current].classList.remove("active");
  current++;
  slides[current].classList.add("active");
}

function goToContract() {
  slides.forEach(slide => slide.classList.remove("active"));
  document.getElementById("contractSlide").classList.add("active");
}

function playSong() {
  const ok = confirm("💖 Kya tumhe manzoor hai? 💖");

  if (ok) {
    const song = document.getElementById("loveSong");
    const moment = document.getElementById("finalMoment");

    song.volume = 0.6;
    song.play();

    if (moment) {
      moment.style.display = "block";
    }
  }
}

let playing = false;

function toggleMusic() {
  const song = document.getElementById("loveSong");
  const btn = document.querySelector(".music-btn");

  if (!playing) {
    song.volume = 0.6;
    song.play();
    btn.innerText = "⏸️";
    playing = true;
  } else {
    song.pause();
    btn.innerText = "🎵";
    playing = false;
  }
}



