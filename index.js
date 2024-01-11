 let gradeToPoint = (input) => {
    switch (input.toUpperCase()) {
        case "A+":
            return 4.0;
        case "A":
            return 4.0;
        case "A-":
            return 3.7;
        case "B+":
            return 3.3;
        case "B":
            return 3.0;
        case "B-":
            return 2.7;
        case "C+":
            return 2.3;
        case "C":
            return 2.0;
        case "C-":
            return 1.7;
        case "D+":
            return 1.3;
        case "D":
            return 1.0;
        case "D-":
            return 0.7;
        case "F":
            return 0.0;
        default:
            return parseFloat(input) || 0.0;
    }
}


let getCgpa = (course) => {
    let unit = document.querySelector(`#${course}Unit`).innerText;
    let grade = document.querySelector(`#${course}Grade`).innerText;
    
    let gradePoint = gradeToPoint(grade)
    let totalUnits = 0;
    let courses = ["cs", "math", "english", "history", "chem", "physics"];

    for (let course of courses) {
        totalUnits += parseInt(document.querySelector(`#${course}Unit`).innerText, 10);
    }

    let cgpa = gradePoint * unit / totalUnits
    document.querySelector(`#${course}Cgpa`).innerText = `${cgpa}`;
    return cgpa;
}

let triggerCgpaButton = document.querySelector(`#triggerCgpaButton`)

 triggerCgpaButton.addEventListener("click", function() {

let chemCgpa = getCgpa('chem')
let csCgpa = getCgpa('cs')
let englishCgpa = getCgpa('english')
let mathCgpa = getCgpa('math')
let historyCgpa = getCgpa('history')
let physicsCgpa = getCgpa('physics')

let totalCgpa = chemCgpa + csCgpa + englishCgpa + mathCgpa + historyCgpa + physicsCgpa;

document.querySelector('#result').innerText = `Your 1st Semester CGPA is ${totalCgpa.toFixed(2)}/4`;
})

let triggerCgpaButton2 = document.querySelector(`#triggerCgpaButton2`)

 triggerCgpaButton2.addEventListener("click", function() {

let chemCgpa2 = getCgpa('chem2')
let csCgpa2 = getCgpa('cs2')
let englishCgpa2 = getCgpa('english2')
let mathCgpa2 = getCgpa('math2')
let historyCgpa2 = getCgpa('history2')
let physicsCgpa2 = getCgpa('physics2')

let totalCgpa2 = chemCgpa2 + csCgpa2 + englishCgpa2 + mathCgpa2 + historyCgpa2 + physicsCgpa2;

document.querySelector('#result2').innerText = `Your 2nd Semester CGPA is ${totalCgpa2.toFixed(2)}/4`;
})