var students = [
    ['David', 80],
    ['Marko', 77],
    ['Dany', 88],
    ['John', 95],
    ['Thomas', 68]
];



function averageGrade(arr){
    var averageMarks = 0;
    
    for (var i = 0; i < students.length; i++) {
        averageMarks += students[i][1];
        
    }
    var avg = averageMarks / students.length;
    console.log(avg);
}

averageGrade(students);

function findGrade(avg) {
    if (avg < 60) {
        console.log ("F");
    }
    else if(avg < 70) {
        console.log ("D");
    }
 else if (avg < 80) {
     console.log ("C");

 }
    else if(avg < 90){
        console.log ("B");
    }
    else {
        console.log ("A");
    }
}
findGrade(23);
    
