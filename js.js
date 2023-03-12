const slides = document.querySelectorAll('.slide');
const sliders = document.querySelector('.sliders');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicatorsContainer = document.querySelector('.slide-indicators');
let currentSlide = 0;
let autoSlideInterval;

slides.forEach(
  (slide,index) => {
    sliders.style.width = `${(index + 1) * 100}%`
  }
)

const slideImage = () => {
  const indicatorButtons = document.querySelectorAll('.slide-indicators button');
  const activeIndicatorIndex = Array.from(indicatorButtons).indexOf(indicatorsContainer.querySelector('.active'));
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${(activeIndicatorIndex) * 100}%)`;
  });
};


// Set the first slide as active
slides[currentSlide].classList.add('active');

// Create indicators
slides.forEach((_, index) => {
  const button = document.createElement('button');
  button.addEventListener('click', () => changeSlide(index));
  indicatorsContainer.appendChild(button);
});

// Set the first indicator as active
indicatorsContainer.children[currentSlide].classList.add('active');

// Function to change the slide
function changeSlide(index) {
  clearInterval(autoSlideInterval);
  slides[currentSlide].classList.remove('active');
  slides[index].classList.add('active');
  indicatorsContainer.children[currentSlide].classList.remove('active');
  indicatorsContainer.children[index].classList.add('active');
  currentSlide = index;
  slideImage(); // เพิ่มตรงนี้
  autoSlide();
}

prevButton.addEventListener('click', () => {
  if (currentSlide === 0) {
    changeSlide(slides.length - 1);
  } else {
    changeSlide(currentSlide - 1);
  }
  slideImage(); // เพิ่มตรงนี้
});

nextButton.addEventListener('click', () => {
  if (currentSlide === slides.length - 1) {
    changeSlide(0);
  } else {
    changeSlide(currentSlide + 1);
  }
  slideImage(); // เพิ่มตรงนี้
});


// Function for auto-sliding
function autoSlide() {
  autoSlideInterval = setInterval(() => {
    if (currentSlide === slides.length - 1) {
      changeSlide(0);
    } else {
      changeSlide(currentSlide + 1);
    }
  }, 5000);
}

// Start auto-sliding
autoSlide();


