const audio = new Audio("bang.wav");

const destroybutton = document.getElementById("better-cat-button");
destroybutton.onclick = function() {
    const catimage = document.getElementById("destroycat");
    if (!catimage) return;
    catimage.style.display = "none"
    audio.play();
};