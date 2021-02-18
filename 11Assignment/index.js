var course1 = parseInt(prompt("Enter course 1 Marks"));
var course2 = parseInt(prompt("Enter course 2 Marks"));
var course3 = parseInt(prompt("Enter course 3 Marks"));
var course4 = parseInt(prompt("Enter course 4 Marks"));
var course5 = parseInt(prompt("Enter course 5 Marks"));
var obtainedMarks = (course1 + course2 + course3 + course4 + course5);

var totalMarks = 500
var calPer = obtainedMarks * 100 / totalMarks

console.log(calPer);

switch (true) {
    case (calPer == 90 || calPer > 90):
        alert("Grade A+");
        break;
    case (calPer == 89 || calPer > 75):
        alert("Grade A");
        break;
    case (calPer == 74 || calPer > 60):
        alert("Grade B");
        break;
    case (calPer == 59 || calPer > 45):
        alert("Grade C");
        break;
    case (calPer == 44 || calPer > 30):
        alert("Grade D");
        break;
    case (calPer == 29 || calPer > 29):
        alert("Fail");
        break;
    default: alert(" Not a Number")
        break;


}

