const headerBanner1 = document.querySelector(".header-banner-1");
const headerBanner2 = document.querySelector(".header-banner-2");
const headerBanner3 = document.querySelector(".header-banner-3");
const bannerMedia = document.querySelector(".banner-media");

const colorArray = ["#ffc602", "#ffb700", "#4a911c"];
var colorIndex = 0;

function autoSlide() {
  if (headerBanner1.classList.contains("visible") == true) {
    headerBanner1.classList.remove("visible");
    headerBanner2.classList.add("visible");
  } else {
    if (headerBanner2.classList.contains("visible") == true) {
      headerBanner2.classList.remove("visible");
      headerBanner3.classList.add("visible");
    } else {
      headerBanner3.classList.remove("visible");
      headerBanner1.classList.add("visible");
    }
  }
  colorIndex++;
  if (colorIndex == colorArray.length) {
    colorIndex = 0;
  }
  var color = colorArray[colorIndex];
  bannerMedia.style.backgroundColor = `${color}`;
}

var auto = setInterval(autoSlide, 4000);    //Set time interval

function prev() {
  if (headerBanner1.classList.contains("visible") == true) {
    headerBanner1.classList.remove("visible");
    headerBanner3.classList.add("visible");
  } else {
    if (headerBanner3.classList.contains("visible") == true) {
      headerBanner3.classList.remove("visible");
      headerBanner2.classList.add("visible");
    } else {
      headerBanner2.classList.remove("visible");
      headerBanner1.classList.add("visible");
    }
  }
  colorIndex--;
  if (colorIndex == -1) {
    colorIndex = 2;
  }
  var color = colorArray[colorIndex];
  bannerMedia.style.backgroundColor = `${color}`;

  clearInterval(auto);                                //Hủy time chạy tự động
  auto = setInterval(autoSlide, 4000);         //Set lại time chạy tự động
}

function next() {
  if (headerBanner1.classList.contains("visible") == true) {
    headerBanner1.classList.remove("visible");
    headerBanner2.classList.add("visible");
  } else {
    if (headerBanner2.classList.contains("visible") == true) {
      headerBanner2.classList.remove("visible");
      headerBanner3.classList.add("visible");
    } else {
      headerBanner3.classList.remove("visible");
      headerBanner1.classList.add("visible");
    }
  }
  colorIndex++;
  if (colorIndex == colorArray.length) {
    colorIndex = 0;
  }
  var color = colorArray[colorIndex];
  bannerMedia.style.backgroundColor = `${color}`;

  clearInterval(auto);                                //Hủy time chạy tự động
  auto = setInterval(autoSlide, 4000);         //Set lại time chạy tự động
}
