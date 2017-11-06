var count;

var counter = function () {
    var storage = sessionStorage.getItem("counter");
    if (storage) {
        count = storage;
    } else {
        count = 0;
    }

    count++;
    document.querySelector("button").textContent = count;
    sessionStorage.setItem("counter", count);

}
