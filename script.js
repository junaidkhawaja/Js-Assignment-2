var age = +prompt("Enter your age");
var weight = +prompt("Enter your weight (kg)");
var gender = prompt("Enter your gender");

if (age >= 21 && weight >= 86 && gender === "male") {
    alert("Come to try out");
}
else if (age >= 21 && weight >= 86 && gender === "female") {
    alert("You are overweight girl");
}
else if (age <21 && weight <= 85 && gender === "female") {
    alert("You are over weight as per your gender female");
}
else if (age <19 && weight <= 76 && gender === "male") {
    alert("You are over weight as per your gender male")
}
else {
    alert("Wrong data");
}