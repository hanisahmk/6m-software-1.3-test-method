/*
    Task
    - In the function, iterate through the array `studentList`.
    - Print each student's name inside the loop using console.log().
*/

const studentList = ["Johnson", "Christina", "Michael", "Lina", "Larry", "Michelle", "Bob", "Wilson"]

// Two ways to perform this code 

function printStudentNames(){
    for (const key in studentList) {
        console.log(`${key}: ${studentList[key]}`);
    }
}

// or

function printStudentNamesv2(){
    for (let i = 0; i < 8; i++)
    console.log(studentList[i]);
}

printStudentNames();
printStudentNamesv2();

// Ignore the code below this line
module.exports = {
    studentList,
    printStudentNames,
    printStudentNamesv2
}