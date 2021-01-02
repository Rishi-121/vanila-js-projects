// jshint esversion:6

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set Background year
year.innerText = currentYear + 1;

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const totalSeconds = (newYearTime - currentTime) / 1000;

  const d = Math.floor(totalSeconds / (24 * 60 * 60));
  const h = Math.floor(totalSeconds / 3600) % 24;
  const m = Math.floor(totalSeconds / 60) % 60;
  const s = Math.floor(totalSeconds) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = formatTime(h);
  minutes.innerHTML = formatTime(m);
  seconds.innerHTML = formatTime(s);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);
