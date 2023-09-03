function fireworks() {
  $(".fireworks").fireworks({
    sound: true, // sound effect
    opacity: 0.9,
    width: "100%",
    height: "100%",
  });
}

function playsound() {
  document.getElementById("sound").play();
}

function nightsky() {
  $("#moon").fadeIn(3000);
  $("#star-container").fadeIn(6000);
  $("#fireworks").show(3000);
}

document.getElementById("sound").pause();
$("#moon").hide();
$("#star-container").hide();
$("#fireworks").hide();

var year = new Date().getFullYear();
// Tanggal target countdown (4 September 2023)
var targetDate = new Date(year + "-09-03T23:59:59+08:00").getTime();

// Update countdown setiap 1 detik
var countdownInterval = setInterval(function () {
  var currentDate = new Date().getTime();
  var timeLeft = targetDate - currentDate;

  // Menghitung waktu yang tersisa
  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  if (days >= 0) {
    sisa_hari = days + 1;
    document.getElementById("timer").innerHTML =
      "H - " + sisa_hari + "</br>" + hours + " : " + minutes + " : " + seconds;
  }

  if (days == 0 && hours == 0 && minutes <= 60) {
    document.getElementById("timer").innerHTML =
      minutes + " : " + seconds + "<br>";
  }

  // Hentikan countdown jika tanggal target telah tercapai
  if (timeLeft <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML =
      "Happy Birthday <br> Alya Adani";
    $("#timer").fadeIn();
    // Setelah 3 detik, sembunyikan pesan dengan efek fadeOut
    setTimeout(function () {
      $("#timer").fadeOut();
    }, 3000); // 3000 milidetik atau 3 detik
    nightsky();
    fireworks();
    playsound();
  }
}, 1000); // Setiap 1 detik

$(document).ready(function () {
  // Jumlah bintang yang ingin dibuat
  var numStars = 150;

  // Loop untuk membuat bintang-bintang
  for (var i = 0; i < numStars; i++) {
    createRandomStar();
  }

  // Fungsi untuk membuat bintang dengan posisi acak
  function createRandomStar() {
    var star = $('<div class="star animated"></div>');
    var size = Math.random() * 2 + 1; // Ukuran acak bintang
    var posX = Math.random() * 100; // Posisi X acak
    var posY = Math.random() * 80; // Posisi Y acak

    star.css({
      width: size + "px",
      height: size + "px",
      left: posX + "%",
      top: posY + "%",
    });

    // Tambahkan bintang ke dalam container
    $("#star-container").append(star);
  }
});
