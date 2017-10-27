var button = document.querySelector("button");

button.onclick = function(){

    var input = document.querySelector("input");


    var paragraph = document.createElement('p');
    paragraph.textContent = input.value;

    var div = document.querySelector("div");
    div.appendChild(paragraph);

    input.value="";
}

