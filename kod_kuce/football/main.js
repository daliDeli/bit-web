
var div = document.querySelector("div");

function position(div){
    var player = document.getElementById("player");

    var x = div.clientX;
    var y = div.clientY;

    player.style.position = "absolute";
    player.style.left = y;
    player.style.top = x;

    
}




var divEvent = document.querySelector("div").addEventListener("click", position);

document.querySelector("button").removeEventListener("click",position); 