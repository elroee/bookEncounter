// var screenwidth= screen.width;
// var width= screenwidth;
// var difference= 2;
// var intervalID = 0;

// function increase(){
//     intervalID=setInterval(zoomIn,20);
// }

// function zoomIn(){
//     if(width<screenwidth*2)
//     {
//         width = width+difference;
//         document.getElementsByClassName("topcontainer").style.backgroundImage.width = width;
    
//     }
//     else{
//         clearInterval(intervalID);
//     }
// }

// document.getElementsByClassName("topcontainer").addEventListener('click',increase())

var links = document.querySelectorAll(".links a");
links.forEach(link => {
    link.textContent = link.textContent.toUpperCase();
})

function upLogo(){
    var logo = document.querySelector(".welcome img");
    logo.style.paddingBottom = "20px";
    logo.style.paddingTop = "0px";
}

function downLogo(){
    var logo = document.querySelector(".welcome img");
    logo.style.paddingBottom = "0px";
    logo.style.paddingTop = "20px";
}

function normalLogo(){
    var logo = document.querySelector(".welcome img");
    logo.style.paddingBottom = "10px";
    logo.style.paddingTop = "10px";
}

function moveLogo(){
    setTimeout(upLogo,200);
    setTimeout(downLogo,400);
}

var set = setInterval(moveLogo,600);
var isMoving = true;

document.querySelector(".welcome img").addEventListener('click', function(){
    if(isMoving)
    {
        clearInterval(set);
        normalLogo();
        isMoving = false;
    }
    else{
        set = setInterval(moveLogo,600);
        isMoving = true;
    }
    
})
// setTimeout(normalLogo,3000);


