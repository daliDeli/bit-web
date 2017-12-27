var list = [];
var rotate = function(list,rotateNumber){
    var firstSection = [];
    var secondSection = [];
    var result = [];
    
    


    for  (var i = rotateNumber, j = 0; i < list.length; i++) {
        firstSection[j] = list [i];
        j++;
    } 
    for ( var i = 0; i < rotateNumber; i++) {
        firstSection [j] = list [i];
        j++;
    } return firstSection;
    
} 
 console.log(rotate([2,3,1,3,1,213],4));