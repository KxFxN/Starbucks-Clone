const slides = document.querySelectorAll(".slide")

slides.forEach(
  (slide,index) => {
    slide.style.left = `${index * 100}%`
  }
)


const slideImage = () => {
  slides.forEach(
    (slide) => {
      slide.style.transform = `transalteX(-${counter * 100}%)`
    }
  )
}