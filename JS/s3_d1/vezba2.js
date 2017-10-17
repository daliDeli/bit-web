var add = function (array1, array2) {


    var result = [];
    var counter = 2;
    var sum = array1.length + array2.length;
    var k = 0;
    var j = 0;
    for (var i = 0; i < sum; i++) {

            if (counter % 2 === 0) {
                result[i] = array1[j];
                j++;
            } else {
                result[i] = array2[k];
                k++;
            }

            
        
        counter++;
    }
    return result;
}

console.log(add([2,3,1],[24,66,22]));
