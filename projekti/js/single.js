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
     
    for (var i = 0; i < 6; i++) {
        var element = api._embedded.cast[i].character.name;
        var parag = $("<p>");
        var seriesCast = parag.text(element) ;

        $("#cast").after(seriesCast);
        
    }

    for (var i = 0; i < api._embedded.seasons.length; i++) {
        var element = api._embedded.seasons[i].premiereDate;
        var parag = $("<p>");
        var seriesCast = parag.text(element);
        console.log(element);

        $("#season").after(seriesCast);
    }
    $("#season").append(api._embedded.seasons.length);

    var seriesImage = $("<img>").attr({
        src: api.image.medium,
        id: "singleImage"
    });

    $(".imageDiv").append(seriesImage);
    $(".paragDiv").append(seriesSummary);
    
})


