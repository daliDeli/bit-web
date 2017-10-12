function convert(arr){
    var nums = [];
    var ind = 0;

    for(var i = 0; i < arr.length; i++){
        var novi = parseInt(arr[i]);
        if(isNaN(parseInt(novi)) === false){
            nums[ind] = novi;
            ind++;
        } else {
            ind--;
        }
    }
    return nums;
}

var dado = ["24645", "s34634", "45357645j", "5474576", "346y90"];

console.log(convert(dado));