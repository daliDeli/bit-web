function change(){
    document.querySelector("body").classList.toggle("background");
}
var id;
function auto(){

   
    if(!id){
        id= setInterval(change, Math.random() * 100 + 1500);
        document.getElementById("autoLights").innerHTML = "Turn OFF"
    }else{
        clearInterval(id);
        id= null; // kada krene ponovo bude id false pa moze da ukljuci interval
        document.getElementById("autoLights").innerHTML = "Turn On"
    }
    

} 
// function lightOff(){
    
//     clearInterval(id);
//     document.getElementById("turnOff").classList.add("visible");
//     document.getElementById("autoLights").classList.remove("visible");

// }
    
