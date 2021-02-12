var courses = [];


var course1 = prompt("course1", "Enter your course 1 name");
courses.push(course1);

var course2 = prompt("course2", "Enter your course 2 name");
courses.push(course2);

var course3 = prompt("course3", "Enter your course 3 name");
courses.push(course3);

var course4 = prompt("course4", "Enter your course 4 name");
courses.push(course4);

var course5 = prompt("course5", "Enter your course 5 name");
courses.push(course5);

alert("Your All courses" + " " + courses);
console.log(courses);

for (var i = 0; i < courses.length; i++) {
    alert(courses[i])
}

courses[0] = prompt("If u want to edit course 1 or not ?", courses.splice(0,1,courses.course1));
courses[1] = prompt("If u want to edit course 2 or not ?", courses.splice(1,1,courses.course2));
courses[2] = prompt("If u want to edit course 3 or not ?", courses.splice(2,1,courses.course3));
courses[3] = prompt("If u want to edit course 4 or not ?", courses.splice(3,1,courses.course4));
courses[4] = prompt("If u want to edit course 5 or not ?", courses.splice(4,1,courses.course5));

alert("Your All update courses " + " " + courses);
console.log(courses);