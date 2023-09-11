var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var age = +prompt("Enter your age") // init datatype as integar
var birthyear = parseInt(prompt("Enter your birth year")); // second way of telling its an integar prompt
var yearnow = new Date().getFullYear();
var ageminusyear = yearnow - birthyear
if (ageminusyear > 19) {
    document.write("Your current age is " + ageminusyear + "<br>")
}
else {
    document.write("Your current age is less than 20 and it is" + ageminusyear + "<br>")
}
if (firstName === "Khawaja") {
    document.write("Your first name is: " + firstName + "<br>");
}
else {
    document.write("Your first name is not Khawaja and it is : " + firstName + "<br>");
}
if (lastName === "Junaid") {
    document.write("Your last name is: " + lastName + "<br>");
}
else {
    document.write("Your last name is not Junaid and it is : " + lastName + "<br>");
}
if (age >= 20) {
    console.log("Age is " + age + " and it is verified");
    document.write("Age is " + age + " and it is verified");
}
if (birthyear <= 2004) {
    console.log("Birth year is " + birthyear + " and it is verified <br>");
    document.write("Birth year is " + birthyear + " and it is verified <br>");
}

console.log("Hello Mr. " + firstName + " " + lastName + " . Your age is " + age + " and your birth year is " + birthyear);
document.write("Hello Mr. " + firstName + " " + lastName + " . Your age is " + age + " and your birth year is " + birthyear);

// == double equals to will check only value in a conditional statement whereas === tripple equals to will also check its datatype.



