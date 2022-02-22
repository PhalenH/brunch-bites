console.log("Connected")

// var rotateBtnBack = document.getElementById("btn-Rotate-to-back")
// var rotateBtnFront = document.getElementById("btn-Rotate-to-front")

// rotateBtnBack.addEventListener("click", function (e) {
//     console.log("Flip to back")

//     var card = document.querySelector('.card');
//     card.classList.toggle('is-flipped');
// })

// rotateBtnFront.addEventListener("click", function (e) {
//     console.log("Flip to front")

//     var card = document.querySelector('.card');
//     card.classList.toggle('is-flipped');
// })

const cards = document.querySelectorAll(".card");
function flipCard(){
    console.log("IT WORKS LET'S GOOOOOOO")
    this.classList.toggle('is-flipped');
}

cards.forEach((card) =>
card.addEventListener("click", flipCard))

const ratingStars = [...document.getElementsByClassName("rating__star")];

function executeRating(stars) {
  const starClassActive = "rating__star bi bi-star-fill";
  const starClassInactive = "rating__star bi bi-star";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className === starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
      }
    };
  });
}
executeRating(ratingStars);
