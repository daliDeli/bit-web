var imgArr = ["http://via.placeholder.com/350x150", "http://via.placeholder.com/350x150", "http://via.placeholder.com/350x150",
    "http://via.placeholder.com/350x150", "http://via.placeholder.com/350x150", "http://via.placeholder.com/350x150"];






for (var i = 0; i < imgArr.length; i++) {
    var img = $("<img>");
    img.attr("src", imgArr[i]);
    
    $("body").append(img);
}

var title = $("<h1>").text("Title");

$("img:first").before(title);

$("img").each(function(i,img){
    $(img).css("width",Math.random() * 200)
})







