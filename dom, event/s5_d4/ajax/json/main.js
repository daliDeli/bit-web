

var button = document.getElementById("find");
var list = document.getElementById("list");

// treba num.num.num.num
button.addEventListener("click", function () {

    var url = document.getElementById("url").value;

    var request = $.ajax({
        url: "http://api.github.com/search/users",
        method: "GET",
        data: {
            q:url
        }

    })
    request.done(function (arg) {
        console.log(arg)
        var neske = arg.items[0].login;
        $(list).css("display", "block");
        $(list).text( neske);
    })



})