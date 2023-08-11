document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.getElementById("menu").getElementsByTagName("a");

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("mouseover", function() {
            this.style.color = "#E60012";
        });

        menuItems[i].addEventListener("mouseout", function() {
            this.style.color = "#424949";
        });
    }
});

window.addEventListener('load', function() {

    const characterImages = document.querySelectorAll('.character-img-content > div');

    for (let i = 1; i < characterImages.length; i++) {
        characterImages[i].style.display = 'none';
    }
});

function myFunction1(){
    document.getElementById("first").style.display ='block'
    document.getElementById("second").style.display ='none'
    document.getElementById("third").style.display ='none'
    document.getElementById("fourth").style.display ='none'
    document.getElementById("fifth").style.display ='none'
    document.getElementById("sixth").style.display ='none'
}

function myFunction2(){
    document.getElementById("first").style.display ='none'
    document.getElementById("second").style.display ='block'
    document.getElementById("third").style.display ='none'
    document.getElementById("fourth").style.display ='none'
    document.getElementById("fifth").style.display ='none'
    document.getElementById("sixth").style.display ='none'
}

function myFunction3(){
    document.getElementById("first").style.display ='none'
    document.getElementById("second").style.display ='none'
    document.getElementById("third").style.display ='block'
    document.getElementById("fourth").style.display ='none'
    document.getElementById("fifth").style.display ='none'
    document.getElementById("sixth").style.display ='none'
}

function myFunction4(){
    document.getElementById("first").style.display ='none'
    document.getElementById("second").style.display ='none'
    document.getElementById("third").style.display ='none'
    document.getElementById("fourth").style.display ='block'
    document.getElementById("fifth").style.display ='none'
    document.getElementById("sixth").style.display ='none'
}

function myFunction5(){
    document.getElementById("first").style.display ='none'
    document.getElementById("second").style.display ='none'
    document.getElementById("third").style.display ='none'
    document.getElementById("fourth").style.display ='none'
    document.getElementById("fifth").style.display ='block'
    document.getElementById("sixth").style.display ='none'
}

function myFunction6(){
    document.getElementById("first").style.display ='none'
    document.getElementById("second").style.display ='none'
    document.getElementById("third").style.display ='none'
    document.getElementById("fourth").style.display ='none'
    document.getElementById("fifth").style.display ='none'
    document.getElementById("sixth").style.display ='block'
}

function changeToRedColor(){
    document.getElementById("hoverChangeColor").style.color = "red";
}
function changetoBlackColor(){
    document.getElementById("hoverChangeColor").style.color = "black";
}

document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.getElementById("menu_footer").getElementsByTagName("a");

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("mouseover", function() {
            this.style.color = "#E60012";
        });

        menuItems[i].addEventListener("mouseout", function() {
            this.style.color = "#424949";
        });
    }
});
