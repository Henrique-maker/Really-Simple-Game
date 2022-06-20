var character = document.getElementById("character");
var block = document.getElementById("block");
var btn = document.querySelector(".btn");
var gameContainer = document.querySelector(".container");
var btnPlay = document.querySelector(".play");

function runGame(){
    let checkDead = setInterval(function(){

        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
        if(blockLeft < 20 && blockLeft > 0 && characterTop >= 130){
            block.classList.toggle("startGame");
            alert("Você perdeu!");
            btnPlay.innerHTML = "Play";
        }
    
    },10);
}

function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500)
}

function darkMode(){
        btn.classList.toggle("active");
        btnPlay.classList.toggle("active");
        gameContainer.classList.toggle("dark-mode");
}

function startGame(){
    block.classList.toggle("startGame");
    if(btnPlay.innerHTML == "Play"){
        btnPlay.innerHTML = "Stop";
    } else if (btnPlay.innerHTML == "Stop"){
        btnPlay.innerHTML = "Play";
    }
    
    runGame();
    
}
