var students = [
    ['David', 80],
    ['Marko', 77],
    ['Dany', 88],
    ['John', 95],
    ['Thomas', 68]
];

var avrageMarks = 0;

for (var i = 0; i < students.length; i++) {
    avrageMarks += students[i][1];
    var avg = avrageMarks / students.length;
}

console.info("Average grade: " + avrageMarks / students.length);

if (avg < 60) {
    console.log("Grade : F");
} else if (avg < 70) {
    console.log("Grade : D");
} else if (avg < 80) {
    console.log("Grade : C");
} else if (avg < 90) {
    console.log("Grade : B");
} else if (avg < 100) {
    console.log("Grade : A");
}
