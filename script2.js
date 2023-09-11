// Class Work

// Chapter 9-11

// Q1
var city = prompt("Enter your city");
if (city === "Karachi") {
    alert("Welcome to city of lights");
}

// Q2
var gender = prompt("Enter your gender");
var gendermessage = "";
if (gender === "Male") {
gendermessage = "Good morning sir!";
}
else if (gender === "Female") {
gendermessage = "Good morning Ma'am";
}
alert(gendermessage);

//Q3
var trafficsignal = prompt("Enter the signal color in (propercase)");
var signalmessage = "";
if (trafficsignal === "Red") {
    signalmessage = "Must Stop";
}
else if (trafficsignal === "Yellow") {
    signalmessage = "Read to move";
}
else if (trafficsignal === "Green") {
    signalmessage = "Move now";
}
alert(signalmessage)

//Q4
var fuel = +prompt("Enter your fuel in litres");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

//Q5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}

// Q6
var math = +prompt("Enter your marks in math");
var english = +prompt("Enter your marks in english");
var science = +prompt("Enter your marks in science");

var totalmarks = 300;
var totalobtained = math+english+science

var percentage = totalobtained/totalmarks*100
var marksheet = "<h2>Marks Sheet</h2><br>"
// alert("your obtained marks are: " + totalobtained + " and your percentage is:" + percentage + "%");

if (percentage >= 80 && percentage <= 100) {
    document.write(marksheet);
    document.write("Total marks: " + totalmarks + "<br>");
    document.write("Marks obtained: " + totalobtained + "<br>");
    document.write("Percentage: " + percentage + "%<br>");
    document.write("Grade: A-one <br>");
    document.write("Remarks: Excellent" );

}
else if (percentage >= 70 && percentage <= 79.99) {
    document.write(marksheet);
    document.write("Total marks: " + totalmarks + "<br>");
    document.write("Marks obtained: " + totalobtained + "<br>");
    document.write("Percentage: " + percentage + "%<br>");
    document.write("Grade: A <br>");
    document.write("Remarks: Good" );

}
else if (percentage >= 60 && percentage <= 69.99) {
    document.write(marksheet);
    document.write("Total marks: " + totalmarks + "<br>");
    document.write("Marks obtained: " + totalobtained + "<br>");
    document.write("Percentage: " + percentage + "%<br>");
    document.write("Grade: B <br>");
    document.write("Remarks: You need to improve" );

}
else if (percentage <= 59.99) {
    document.write(marksheet);
    document.write("Total marks: " + totalmarks + "<br>");
    document.write("Marks obtained: " + totalobtained + "<br>");
    document.write("Percentage: " + percentage + "%<br>");
    document.write("Grade: Fail <br>");
    document.write("Remarks: Sorry" );

}


// Q7
var secretnumber = 7;
var guess = +prompt("Enter the secret number");
if (secretnumber === guess) {
    alert("Bingo! Correct answer.");
}
else if (++secretnumber === guess) {
    alert("Close enough to the correct answer.");
}
else {
    alert("not even close!");
}

// Q8
var userinp = prompt("Enter the number to check if it is divisble by 3");
if (userinp % 3 == 0) {
    alert("Your number is divisable by 3");
}
else {
    alert("Your number is NOT divisable by 3");
}

// Q9
var evenodd = +prompt("Enter the number to check even/odd");
if (evenodd % 2 == 0) {
    alert("Your number is even");
}
else {
    alert("your number is odd");
}

// Q10
var temp = +prompt("Enter the temprature");
var tempmessage = "";
if (temp > 40) {
    tempmessage = "It's too hot outside";
}
else if (temp > 30) {
    tempmessage = "The weather today is normal";
}
else if (temp > 20) {
    tempmessage = "Today's weather is cool";
}
else if (temp > 10) {
    tempmessage = "OMG! Today's weather is so cool";
}
alert(tempmessage);

// Q11

var number1 = +prompt("Enter number 1");
var number2 = +prompt("Enter number 2");
var operator = prompt("Enter the operator (+,-,/,*,%)");
if (operator === "+") {
    alert(number1+number2);
}
else if (operator === "-") {
    alert(number1-number2);
}
else if (operator === "/") {
    alert(number1/number2);
}
else if (operator === "*") {
    alert(number1*number2);
}
else if (operator === "%") {
    alert(number1%number2);
}


// Chapter 6-9
// Q1

var q1num = 10;
document.write("The value of a is :" + q1num + "<br>");
document.write("The value of ++a is:" + ++q1num + "<br>");
document.write("Now the value of a is:" + q1num + "<br>");
document.write("The value of a++ is:" + q1num++ + "<br>");
document.write("Now the value of a is:" + q1num + "<br>");
document.write("The value of --a is:" + --q1num + "<br>");
document.write("Now the value of a is:" + q1num + "<br>");
document.write("The value of a-- is:" + q1num-- + "<br>");
document.write("Now the value of a is:" + q1num + "<br><br>");

// Q2
var q2num1 = 2;
var q2num2 = 1;
document.write("The value of --a is: " + --q2num1 + "<br>");
document.write("The value of --a - --b is: " + (--q2num1 - --q2num2) + "<br>");
document.write("The value of --a - --b + ++b is: " + (--q2num1 - --q2num2 + ++q2num2) + "<br>");
var q2result = --q2num1 - --q2num2 + ++q2num2 + q2num2--;
document.write("The value of --a - --b + ++b + b-- is: " + q2result + "<br><br>");


//Q3
var askname = prompt("Enter your full name");
alert("Hi, "+ askname + ". Welcome to our website.");

//Q4 empty

//Q5
var usermult = +prompt("Enter a number to see its multiplication table.");

if (usermult == "") {
    document.write("5 x 1 = " + 5*1 + "<br>");
    document.write("5 x 2 = " + 5*2 + "<br>");
    document.write("5 x 3 = " + 5*3 + "<br>");
    document.write("5 x 4 = " + 5*4 + "<br>");
    document.write("5 x 5 = " + 5*5 + "<br>");
    document.write("5 x 6 = " + 5*6 + "<br>");
    document.write("5 x 7 = " + 5*7 + "<br>");
    document.write("5 x 8 = " + 5*8 + "<br>");
    document.write("5 x 9 = " + 5*9 + "<br>");
    document.write("5 x 10 = " + 5*10 + "<br><br>");
}
else {
    document.write(usermult + " x 1 = " + usermult*1 + "<br>");
    document.write(usermult + " x 2 = " + usermult*2 + "<br>");
    document.write(usermult + " x 3 = " + usermult*3 + "<br>");
    document.write(usermult + " x 4 = " + usermult*4 + "<br>");
    document.write(usermult + " x 5 = " + usermult*5 + "<br>");
    document.write(usermult + " x 6 = " + usermult*6 + "<br>");
    document.write(usermult + " x 7 = " + usermult*7 + "<br>");
    document.write(usermult + " x 8 = " + usermult*8 + "<br>");
    document.write(usermult + " x 9 = " + usermult*9 + "<br>");
    document.write(usermult + " x 10 = " + usermult*10 + "<br><br>");
}

// Q6

var q6sub1 = prompt("Write first subject name");
var q6sub2 = prompt("Write second subject name");
var q6sub3 = prompt("Write third subject name");
var q6allsubtotal = 300;
var q6sub1obt = +prompt("how many marks you got in " + q6sub1 + " out of 100?");
var q6sub2obt = +prompt("how many marks you got in " + q6sub2 + " out of 100?");
var q6sub3obt = +prompt("how many marks you got in " + q6sub3 + " out of 100?");
var q6sub1percentage = q6sub1obt/100*100;
var q6sub2percentage = q6sub2obt/100*100;
var q6sub3percentage = q6sub3obt/100*100;
var q6totalobt = q6sub1obt+q6sub2obt+q6sub3obt;
var q6totalpercentage = q6totalobt/q6allsubtotal*100;
document.write("<h2>Mark Sheet</h2>");
document.write("<table><thead><tr><td>Subject</td><td>Total Marks</td><td>Obtained Marks</td><td>Percentage</td></tr></thead>");
document.write("<tr><td>" + q6sub1 + "</td><td>" + 100 + "</td><td>" + q6sub1obt + "</td><td>" + q6sub1percentage + "%</td></tr>");
document.write("<tr><td>" + q6sub2 + "</td><td>" + 100 + "</td><td>" + q6sub2obt + "</td><td>" + q6sub2percentage + "%</td></tr>");
document.write("<tr><td>" + q6sub3 + "</td><td>" + 100 + "</td><td>" + q6sub3obt + "</td><td>" + q6sub3percentage + "%</td></tr>");
document.write("<tr><td>Total:</td><td>" + 300 + "</td><td>" + q6totalobt + "</td><td>" + q6totalpercentage + "%</td></tr>");
document.write("</table>");



