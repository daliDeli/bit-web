var id =  localStorage.getItem("id");


var request = $.ajax({
    url: "http://api.tvmaze.com/shows/" + id,
    method: "GET",
    data: {
        embed: ['seasons', 'cast']
    }

})


request.done(function(api){
    console.log(api);
    var seriesName = api.name;
    var seriesSummary = api.summary ;
     var seriesCast;
    for (var i = 0; i < 6; i++) {
        var element = api._embedded.cast[i].character.name;
        // var ul = $("<ul>");
        var parag = $("<p>");
        var seriesCast = parag.text(element) ;
        console.log(element);
        $("#cast").append(seriesCast);
        
    }

    var seriesImage = $("<img>").attr("src", api.image.medium);

    $(".imageDiv").append(seriesImage);
    $(".paragDiv").append(seriesSummary);
    
})


