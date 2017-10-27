function check(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");


    var checkName = name.hasAttribute("required");
    var checkEmail = email.hasAttribute("required");

    if(checkName === true && !name.value ){
        name.classList.add("red-border");
    }

    if(checkEmail === true && !email.value){
        email.classList.add("red-border");
    }
}
