const navbar = document.getElementById('navbar-links');
const openMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close-hamburger');

openMenu.addEventListener('click', () => {
  navbar.style.display = 'flex';
  navbar.style.top = '0';
});

closeMenu.addEventListener('click', () => {
  navbar.style.top = '-100%';
});

const prev = document.getElementById('prevButton');
const next = document.getElementById('nextButton');
const testimonial = document.getElementsByClassName('testimonial');

let testimonialSlideIndex = 1;
testimonialSlideshow(testimonialSlideIndex);

function changeSlides(slideInd) {
  testimonialSlideshow(testimonialSlideIndex += slideInd);
}

function testimonialSlideshow(index) {
  let i;
  if(index > testimonial.length) {
    testimonialSlideIndex = 1;
  }
  if(index < 1) {
    testimonialSlideIndex = testimonial.length;
  }
  for (i = 0; i < testimonial.length; i++) {
    testimonial[i].style.display = "none";
  }
  testimonial[testimonialSlideIndex-1].style.display = "block";
}

next.addEventListener('click', () => {
  changeSlides(1);
});
prev.addEventListener('click', () => {
  changeSlides(-1);
});

const contactButton = document.getElementById('intro-contact-button');

contactButton.addEventListener('click', () => {
  window.location.href = 'contact.html';
});



