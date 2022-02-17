// console.log("You did the bare minimum and connected your JS.")

var rotateBtnBack = document.getElementById("btn-Rotate-to-back")
var rotateBtnFront = document.getElementById("btn-Rotate-to-front")

rotateBtnBack.addEventListener("click", function (e) {
    console.log("Flip to back")

    var card = document.querySelector('.card');
    card.classList.toggle('is-flipped');
})

rotateBtnFront.addEventListener("click", function (e) {
    console.log("Flip to front")

    var card = document.querySelector('.card');
    card.classList.toggle('is-flipped');
})
