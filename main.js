var slideIndex = 1;
var rotation = 0;
var click = 0;

showSlides(slideIndex);
window.addEventListener('load', (event) => {
    rotation = 0;

});

//גלריה
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


//סיבוב תמונה
function rotateImg() {
    click += 1;
    rotation += 90;
    if (rotation === 360) {
        rotation = 0;
    }
    document.querySelector("#img").style.transform = `rotate(${rotation}deg)`;
    if (click == 4) {
    changecolorbg()
    document.getElementById("color").style.display = "none";

     }

}

//preview img
function preview() {
    frame.src = URL.createObjectURL(event.target.files[0]);
}

//preview name

function show_user() {

    var user = document.getElementById("username2").value;
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    user="hello "+user;
    ctx.fillStyle = 'white';
    ctx.fillText(user,10,30);
}
//change background
function changecolorbg() {
    var color = document.getElementById('color').value;
    var c = document.getElementById("colo").style.backgroundColor = color;
}
