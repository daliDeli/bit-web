
    function getData(name){
        var abbrev =  name[0] + name[name.length - 1] ;
        return abbrev.toUpperCase();
    }

    console.log(getData("Action"));