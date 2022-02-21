console.log("You did the bare minimum and connected your JS.")

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

var rotateBtnBack = document.getElementsByClassName("flip-to-back");
for (var i = 0; i < rotateBtnBack.length; i++) {
    rotateBtnBack[i].addEventListener("click", function () {
    console.log("Flip to back")

    var card = document.querySelector('.card');
    card.classList.toggle('is-flipped');    });
}

var rotateBtnFront = document.getElementsByClassName("flip-to-front");
for (var i = 0; i < rotateBtnFront.length; i++) {
    rotateBtnFront[i].addEventListener("click", function () {
    console.log("Flip to front")

    var card = document.querySelector('.card');
    card.classList.toggle('is-flipped');    });
}

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
