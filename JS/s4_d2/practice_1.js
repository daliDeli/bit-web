
function svet(){
   
        console.log("Zdravo svete");
    
}

aaaekaVar = "Ovo je samo provera";

function aboutBrowser(){
    console.log(navigator.appVersion + "\n" + navigator.platform );
}
function isOnline() {
    if(navigator.onLine == true){
        console.log("online");
    }else{
        console.log("not online");
    }
}
function getSize() {
    console.log("available height is " + screen.availHeight + " available width is " + screen.availWidth + " max height is " + screen.height);
}

function someLoc() {
    console.log("This is the location " + location.href + " , this is domain name" + location.host + " , used protocol" + location.protocol + " , parameters of URL " + location.search)
}
function rel(){
    location.reload();
}
function openWin(){
    window.open("https://en.wikipedia.org/wiki/The_Hateful_Eight");
}
function storing(key,value){
    localStorage.setItem(key, value);
}
function redingStorage(key) {
    if(localStorage.getItem(key) !== null){
        console.log(localStorage.getItem(key));
    }else{
        console.log("There is no data.");
    }
    
}

function removingDataSession(key) {
    localStorage.removeItem(key);
}


function storingSession(key,value){
    sessionStorage.setItem(key, value);
}
function redingStorageSession(key) {
    if(sessionStorage.getItem(key) !== null){
        console.log(sessionStorage.getItem(key));
    }else{
        console.log("There is no data.");
    }
    
}


    

