
var request = $.ajax({
    url: "http://api.tvmaze.com/shows",
    method: "GET"

})

request.done(function (response) {
    
    for (var i = 0; i <= 50; i++) {
        var seriesName = response[i].name;
        var seriesImage = response[i].image.medium;
        var seriesId = response[i].id;
        
        var createDiv = $("<div>").attr("class", "col-12 col-md-6 col-lg-4 placement");
        var createImage = $("<img>").attr("src", seriesImage);
        var createAnchor = $("<a>").attr({
            href: 'single.html',
            datashowid: seriesId,
            target: "_blank"
        }).text(seriesName);
        
        // console.log(response[i].id);
        $(".row").append(createDiv);
        $(createDiv).append(createImage);
        $(createDiv).append(createAnchor);
        
    }

})

// $(document).on("click", "a", function(){
//     var currentID = $(this).attr("datashowid");
//     localStorage.setItem("id", currentID);

// })

// Search shows by name
$(document).on("keyup", "input", function(event){
    console.log(this)
    console.log($(this))
    var search = $(this).val();
    console.log(`ukucano je ${search}`);

    var requestShow = $.ajax({
        url: "http://api.tvmaze.com/search/shows?q="+ search,
        method: "GET"
    })
    
    
    requestShow.done(function (response) {
        console.log("this is a fetch",response);
        var createUl = $("<ul>");
        createUl.attr("id", "showSearch")
        createUl.text("");
        
        for(var i = 0; i < response.length; i++){
            
            var element= response[i].show
            console.log(element.id);
            var createLi =  $("<li>");
            var createAnchor = $("<a>");
            createAnchor.attr({"class": "sendOnClick", "href": "single.html","datashowid":Number(element.id)});
            

            createLi.append(element.name);
            createAnchor.append(createLi);
            createUl.append(createAnchor);
        }

        
        $(".sendOnClick").click(()=>{ 
            var searchId = $(".sendOnClick").attr("datashowid");
            localStorage.setItem("id", searchId);
        })
        $(".navbar").append(createUl);
    })
} )
    
    








