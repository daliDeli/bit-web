
var request = $.ajax({
    url: "http://api.tvmaze.com/shows",
    method: "GET",

})




request.done(function (api) {
    
    
    for (var i = 0; i <= 50; i++) {
        var seriesName = api[i].name;
        var seriesImage = api[i].image.medium;
        var seriesId = api[i].id;
        
        var createDiv = $("<div>").attr("class", "col-12 col-md-6 col-lg-4 placement");
        var createImage = $("<img>").attr("src", seriesImage);
        var createAnchor = $("<a>").attr({
            href: 'single.html',
            datashowid: seriesId,
            target: "_blank"
        }).text(seriesName);
        
        // console.log(api[i].id);
        $(".row").append(createDiv);
        $(createDiv).append(createImage);
        $(createDiv).append(createAnchor);
        
    }

})

//  inputaVal = $("input").val();

// var requestSearch = $.ajax({
//     url: "http://api.tvmaze.com/search/shows?",
//     method: "GET",
//     date:{
//         q: inputVal
//     }
// })

$(document).on("click", "a", function(){
    var currentID = $(this).attr("datashowid");
    localStorage.setItem("id", currentID);

})





