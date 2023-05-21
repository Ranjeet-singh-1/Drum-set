function handleClick(event) {    //event passed in function ad to readme.md  
    const key = event.target.innerHTML;
    makesound(key);
}

document.addEventListener('keypress', (e) => { //adding event listner to keypress ad to readme
    const key = e.key;
    makesound(key);
})

const makesound = (key) => {
    switch (key) {
        case "w":
            let crash = new Audio("./sounds/crash.mp3");   //syntax to play a sound add to readme.md
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