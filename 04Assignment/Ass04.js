var num1 = parseInt(prompt("please enter number"));
var num2 = parseInt(prompt("please enter second number"));

var sum = "+";
var minus = "-";
var multiply = "*";
var divide = "/";

var mathematicalSign = prompt("please enter your Mathematical Operation");

if (mathematicalSign == sum) {
    alert(num1 + num2);
}
else if (mathematicalSign == minus) {
    alert(num1 - num2);
}
else if (mathematicalSign == multiply) {
    alert(num1 * num2);
}
else if (mathematicalSign == divide){
    alert(num1 / num2);
}
else {"not a number"}
 