// Home Work
// Chapter 6

document.write("<h2>Chapter 6</h2>")
// Q1
var x = 1;
x++;
document.write("Chap6: Q1 answer is x++ <br>");

// Q2
x = 100;
--x;
document.write("Q2: The fastest way to reduce the value of x is to add decrement to it like --x <br>");

// Q3
x = 50;
var y = x++;
document.write("Q3: The value of y is: " + y + " <br>");

// Q4
y = 50;
var z = --y;
document.write("Q4: The value of z is: " + z + " <br>");

// Q5
var num = 6;
var newNum = num--;
document.write("Q5: var newNum = num--" + " <br>");

// Q6
var newnum1 = 4+1;
var newnum2 = --newnum1;
document.write("Q6: Answer is: " + newnum2  + " <br>");

//Q7
var q7num = 6;
q7num = ++q7num;
alert(q7num);

// Chapter 7
document.write("<h2>Chapter 7</h2>")

// Q1
var calculatedNum = 2 + (2 * 6);
document.write("Chap 7 Q1: " + calculatedNum + "<br>");

// Q2
calculatedNum = (2 + 2) * 6;
document.write("Q2: " + calculatedNum + "<br>");

// Q3
calculatedNum = (2 + 2) * (4 + 2);
document.write("Q3: " + calculatedNum + "<br>");

// Q4
calculatedNum = ((2 + 2) * 4) + 2;
document.write("Q4: " + calculatedNum + "<br>");

// Q5
var c7q5 = (2 + 2) * (4 + 10);
document.write("Q5: " + c7q5 + "<br>");

// Q6
var c7q6 = 2 + (2 * 4) + 10;
document.write("Q6: " + c7q6 + "<br>");

var c7q7 = 4 / (2 * 4);
document.write("Q7: " + c7q7 + "<br>");

// Chap 8
document.write("<h2>Chapter 8</h2>")

// Q1

var c8q1 = '"2" + "2"';
document.write("Q1: " + c8q1 + "<br>");

// Q2
var c8q2 = '("Hello," + "Dolly")';
document.write("Q2: " + c8q2 + "<br>");

// Q3
var c8q3 = alert('"33" + 3');


// Q4
var c8q4a = "Pakistan ";
var c8q4b = "Zindabad ";
alert(c8q4a + c8q4b);

// Q5
var c8q5 = "Th prime number is: " + "10";
document.write("Q5: " + c8q5 + "<br>");

// Q6
var c8q6a = "Khawaja ";
var c8q6b = "Junaid";
var c8q6c = c8q6a + c8q6b;
document.write(c8q6c + "<br>");

// Chapter 9
document.write("<h2>Chapter 9 (Prompts)</h2>")

// Q1
var firstName = prompt("Enter first name");

// Q2
var china = "China";
var country = prompt("Country", china);

// Q3
var yourName = prompt("Enter Your Name");

// Q4
var c9q4a = "Zip Code";
var c9q4b = "690494";
var c9q4c = prompt(c9q4a, c9q4b);

// Q5
var defaultresp = prompt("Enter your message", china);
alert(defaultresp);

// Chapter 10
document.write("<h2>Chapter 10 (IF/ELSE)</h2>")

// Q1
var city = "Karachi";
if (city = "Karachi") {
     console.log("The City OF Lights");
    }

// Q2
var c10q2a = 10;
var c10q2b = 10;
if (c10q2a === c10q2b) {
    var c10q2c = prompt("Enter the value for the z");
}

// Q3
var zipCode = +prompt("Write zip code");
if (zipCode === 10010) {
    alert("Karachi")
}
else {
    alert("Please write correct city");
}

// Q4
c10q4a = +prompt("Enter the value between 1 to 10");
if (c10q4a === 10) {
    c10q4a = 1;
    console.log(c10q4a);
}


// Chapter 11
document.write("<h2>Chapter 10 (Comparison Operators)</h2>")

// Q1
var valueofx = 10;
var valueofy = 11;
if (valueofx != valueofy) {
    console.log(valueofx);
}
// Q2
var valueofz = 12;
if (valueofz >= 12) {
    valueofz = 11;
}

// Q3
valueofz = 9;
if (valueofz != 10) {
    valueofz = 11;
}

// Q4
var valofnum = 15;
if (valofnum != 12) {
    alert("Congratulations!");
}

// Q5
var c11q5 = prompt("Enter your first name");
if (c11q5 != "Mister") {
    alert("No Match!");
}