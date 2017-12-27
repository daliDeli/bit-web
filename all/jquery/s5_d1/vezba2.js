$(function(){
    
    $("li:first").addClass("bottomborder");
    $("li").addClass("upper");
    $(".active").addClass("fontcolor")

    var lItems = $("li");
    var middle = Math.round(lItems.length / 2);
    $(lItems[middle]).addClass('bg');
   

});

