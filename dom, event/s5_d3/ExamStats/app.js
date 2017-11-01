var DataController = (function () {
    var data = {
        listOfStudents: [],

    };

    function Student(name, surname, grade) {
        this.name = name;
        this.surname = surname;
        this.grade = grade;
    };

    Student.prototype.getInfo = function () {
        return "Student : " + this.name + " " + this.surname + " " + this.grade;
    };

    function ExamResult(grade) {

    }

    return {
        getInfo: getInfo,

    }

})();




var UIController = (function () {

    function collectInput() {

        var examSelect = document.getElementsByClassName('add-subject');
        var nameSurnameSelect = document.getElementsByClassName('add-student-name')[0];
        var gradeSelect = document.getElementsByClassName('add-grade')[0];

        var result = {
        exam: examSelect[examSelect.selectedIndex].value,
        nameSurname:  nameSurnameSelect.value,
        grade:  gradeSelect.value
        }
        return result;
        
    }






})();


var MainController = (function () {



})();