function countItems(arr, item){
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[1].length; j++) {
            var element = arr[j];
            
            if(item === element){
                counter++;
            }
        }
        
    }
    return counter;
}

var arr = [
    "apple",
    ["banana", "strawberry", "apple"]
]

console.log(countItems(arr, "apple"));

function wrap(execute){

    try{
        execute();
        return function(){
            return execute();
        }
    } catch(e) {
        return function() {
            return null;
        }
    }
}

var errorExec = wrap(function(){
    throw new Error("Error");
});

var resultExec = wrap(function (){
    return "Result";
})

console.log(errorExec && errorExec()); // null
console.log(errorExec && resultExec());  //result

// errorExec(){}