//Range Slider

const slider = document.querySelector(".slider");
const output = document.getElementById("value");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value + "%";
};

//Slider

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("slide");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "block";
// }

// const PrevBtn = document.querySelector(".prev-btn");
// const NextBtn = document.querySelector(".next-btn");
const FirstSlide = document.querySelector(".first-slide");
const SecondSlide = document.querySelector(".second-slide");

function prevSlides() {
  FirstSlide.style.display = "block";
  SecondSlide.style.display = "none";
}

function nextSlides() {
  FirstSlide.style.display = "none";
  SecondSlide.style.display = "block";
}
