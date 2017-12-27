

    let p1 = new Promise((resolve, reject) => {

        // var m = 0;
        for (var i = 0; i < 100; i++) {
            setTimeout(function(){

                console.log("p1 radi na " + i)
            }, i,i)
        }

        // var now = new Date();

        // if(now.getMilliseconds() % 2 === 0){
        //      reject()
        // }

        // console.log("i am done")
        resolve();
    });


    
    let p2 = new Promise((resolve, reject) =>{
        
        for (var i = 0; i < 1000; i++) {
            setTimeout(function(i){
                
                console.log("p2 radi na " + i)
            }, i,i)
        }
        
        resolve();
        
    })
    
    p1.then(function(res){
        console.log("P1 is done with" + res)
    }).catch(function(reason){
        console.log(reason)
    })
    p2.then(function(res){
        console.log("P1 is done with" + res)
    }).catch(function(reason){
        console.log(reason)
    })


    var allPromises = Promise.all(p1, p2);
    
    allPromises.then(function(){

        console.log("all promises done!");
    })

    console.log("not done");
