const DataController = ( () => {
    
    
    
    
})();


const UIController = ( () => {
    
    let getInput= () => {

        const subject = document.querySelector(".add-subject");
        const studentName = document.querySelector(".add-student-name");
        const grade = document.querySelector(".add-grade");



        return {
            subject : subject.value,
            studentName: studentName.value,
            grade : grade.value
        }

    }
    
    return {
        getInput: getInput
    }


})();


const MainController = ( () => {

    const button = document.querySelector(".add-btn");
    let init = button.addEventListener("click", () => {
        

    })

    return {
        init: init
    }
})();

MainController.init();