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
function changecolorbg()
{
    var color = document.getElementById('color').value;
    var c = document.getElementById("colo").style.backgroundColor = color;
}
//בדיקות מייל
function contains_heb(str)
{
    return (/[\u0590-\u05FF]/).test(str);
}

function just_eng_letters()
{
    let email = document.getElementById("email").value;
    let flag=1;
    for(let character of email) {
         if(contains_heb(character)||character==' '||character==',')
         {
          flag=0;
         }
    }
    if(!flag)
        alert("כתובת לא תכיל אותיות בעברית וסימנים אסורים אחרים )תו רווח, פסי")
}

function is_shtrusdel_after_third()
{
    let email = document.getElementById("email").value;
   let index=0;
    for(let character of email)
    {
        if (character=='@')
        {
            if(index<=2||index==email.length-1)
            {
                alert("מיקום ה- @ לא יהיה לפני תו שלישי )השם הכי קצר שאנחנו מרשים( ולא תו אחרון")
            }
        }
        index+=1;
    }

}

function not_first_0r_last_dot()
{
    let email = document.getElementById("email").value;

    if(email[0]=='.'||email[email.length-1]=='.')
    {
        alert("הנקודה לא תהיה התו הראשון וגם לא התו האחרון בכתובת הדוא")
    }

}

function exact2_spaces_dot()
{
    let email = document.getElementById("email").value;
    let counter=0;
    let index=0
    let flag=0;
    for(let character of email)
    {

        if(flag!=0)
        {
            counter++;
        }
        if (character=='@')
        {
            flag=1;
        }
        if (character=='.')
        {
            if(counter<=2)
            {
                alert("יש נקודה אחרי ה- @ במרחק של לפחות 2 תווים")
            }
        }
        index+=1
    }

}

function exact1_dot()
{
    let email = document.getElementById("email").value;
    let counter=0;
    for(let character of email)
        if (character=='.')
            counter+=1
    if(counter==0)
        alert("מייל לא יכול להכיל יותר נקודה אחד")

}

function exact1_shtrusdel()
{
    let email = document.getElementById("email").value;
    let counter=0;
    for(let character of email)
        if (character=='@')
            counter+=1
    if(counter!=1)
        alert("מייל לא יכול להכיל יותר משטודל אחד")

}
function validMail(mail)
{
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
}
function check_size()
{
var email = document.getElementById("email").value;

if (email.length<6)
{
alert("מייל לא יכול להזין פחות מ6 תווים")
    }
}
//בדיקה האם סומן מין מסוים
function fillgender() {
    var gender = document.getElementsByName("gender");
    if (!gender[0].checked && !gender[1].checked) {
        alert("לא סומן שום מגדר")
    }
}
//בדיקה אם נבחר תאריך
function havedate(){
var date=document.getElementById('date').value;
if (date==""){
    alert("לא נבחר תאריך")
}
}
function showpass() {
        var x = document.getElementById("password2");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

function is_valid()
{
    check_size();
    exact1_shtrusdel();
    is_shtrusdel_after_third();
    exact2_spaces_dot();
    exact1_dot();
    not_first_0r_last_dot();
    just_eng_letters();
    fillgender();
    havedate();
    show_user();
}