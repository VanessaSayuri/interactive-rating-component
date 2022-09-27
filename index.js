const ratingContainer = document.querySelector(".rating-wrapper")
const thanksContainer = document.querySelector(".card-thankyou")
const submitBtn = document.getElementById("submit-btn")

const ratings = document.querySelectorAll(".rating-scale")
const result = document.getElementById("rating")



  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
        submitBtn.addEventListener("click", () => {
   
        thanksContainer.classList.remove("hide")
   
        ratingContainer.classList.add("hide")

        result.innerHTML = rating.innerHTML
    })
  })
})

