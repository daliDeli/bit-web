


// treba num.num.num.num
button.addEventListener("click", function () {
    var button = document.getElementById("find");
    var list = document.getElementById("list");

    var url = document.getElementById("url").value;

    var request = $.ajax({
        url: "http:/freegeoip.net/xml/" + url,
        method: "GET",

    })

    var traversing = request.done(function (arg) {
        var neske = $(arg).find("Latitude").text();

        $(list).text(neske);
    })



})