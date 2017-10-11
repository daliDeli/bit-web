var sum = 0;
var arr = [0, 1, 2, 3, 4];

for (var i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i];
}

console.log(sum);