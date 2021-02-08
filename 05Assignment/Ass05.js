var course1 = parseInt(prompt("Enter your Course 1 Marks"));
var course2 = parseInt(prompt("Enter your Course 2 Marks"));
var course3 = parseInt(prompt("Enter your Course 3 Marks"));
var course4 = parseInt(prompt("Enter your Course 4 Marks"));
var course5 = parseInt(prompt("Enter your Course 5 Marks"));
var totalMarks = 500

var obtainedMarks = (course1 + course2 + course3 + course4 + course5);

var perCal = (obtainedMarks * 100 / totalMarks);

alert("Your percentage is" + " " + perCal);