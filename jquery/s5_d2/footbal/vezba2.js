

    $("body").on('click', function () {

        var width = $("#player").innerWidth();
        var playerElmentDisplacement = width / 2;

        $("#player").css("top", event.y - playerElmentDisplacement + "px");
        $("#player").css("left", event.x - playerElmentDisplacement + "px");
    });


    $('#stop-moving').on('click', function () {
        $("body").off('click');
    });


// (function(){})
// var player = $("#player");

// $("body").on('click', function() {
// var width = $player.innerWidth();
// var playerElmentDisplacement = width / 2;
// });

// $player.css({
//     "top":event.x - playerElmentDisplacement  + "px",
//     "left" : event.y - playerElmentDisplacement+ "px"
// });
