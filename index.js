
var buttons= document.querySelectorAll(".drum");


for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        makeSound(this.innerText);
        flashKeyOnClickOrPress(this.innerText);
    });
    document.addEventListener("keydown",function(keyCode){
        makeSound(keyCode.key);
        flashKeyOnClickOrPress(keyCode.key);
    });
}

function makeSound(key){
    switch(key){
        case 'w':
            new Audio("sounds/crash.mp3").play();
            break;
        case 'a':
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case 's':
            new Audio("sounds/snare.mp3").play();
            break;
        case 'd':
            new Audio("sounds/tom-1.mp3").play();
            break;
        case 'j':
            new Audio("sounds/tom-2.mp3").play();
            break;
        case 'k':
            new Audio("sounds/tom-3.mp3").play();
            break;
        case 'l':
            new Audio("sounds/tom-4.mp3").play();
            break;

    }
}

function flashKeyOnClickOrPress(key){
    var component = document.querySelector("."+key);
    component.classList.add("pressed");
    setTimeout(function(){
        component.classList.remove("pressed");
    },100);
    
    
}
