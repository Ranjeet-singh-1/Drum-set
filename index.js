"use strict";

//Event handler for clicks 
let n = document.querySelectorAll(".drum").length;
for (let i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let innerhtml = document.querySelectorAll(".drum")[i].innerHTML;
        makesound(innerhtml);
        animation(innerhtml);
    })
}

// Event handler for kepresses
document.addEventListener("keypress",function(Event){
let key=Event.key;
makesound(key);
animation(key);
})

// function for animate the clicked or pressed button
function animation(key){
document.querySelector("."+key).classList.add("pressed");
setTimeout(function(){
    document.querySelector("."+key).classList.remove("pressed");
},100);
}


// Function to make sounds on clicks and keypresses
function makesound(key) {
    switch (key) {
        case "w":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            let b = new Audio("./sounds/kick-bass.mp3");
            b.play();
            break;
        case "s":
            let c = new Audio("./sounds/snare.mp3");
            c.play();
            break;
        case "d":
            let d = new Audio("./sounds/tom-1.mp3");
            d.play();
            break;
        case "j":
            let e = new Audio("./sounds/tom-2.mp3");
            e.play();
            break;
        case "k":
            let f = new Audio("./sounds/tom-3.mp3");
            f.play();
            break;
        case "l":
            let g = new Audio("./sounds/tom-4.mp3");
            g.play();
            break;
        default:
            break;
    }
}