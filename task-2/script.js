//  Level 1 (Beginner)
// Task 1 - User Introduction
// Ask the user:
// Name
// Age
// Print:
// My name is Naveen
// I am 18 years old
// Use:
// prompt()
// console.log()

let name = prompt("Enter your name:");
let age = prompt("Enter your age:");

console.log("My name is " + name);
console.log("I am " + age + " years old");

// Task 2 - Degree Confirmation
// Ask:
// Did you complete degree?
// using:
// confirm()
// If true:
// Degree Completed
// Else:
// Degree Not Completed
// Print in console.

let hasDegree = confirm("Did you complete degree?");

if (hasDegree) {
    console.log("Degree Completed");
} else {
    console.log("Degree Not Completed");
}

// Task 3 - Mobile Price
// Create variables:
// mobilePrice = 15000
// discount = 2000
// Find final price.
// Output:
// Final Price : 13000
// 🥈 Level 2 (Intermediate)

let mobilePrice = 15000;
let discount = 2000;
let finalPrice = mobilePrice - discount;

console.log("Final Price : " + finalPrice);


// Task 4 - Age Eligibility
// Ask age using prompt.
// Check:
// 18 or above
// Output:
// Eligible for Vote
// otherwise:
// Not Eligible
// Use comparison operator.

let age = prompt("Enter your age:");

if (age >= 18) {
    console.log("Eligible for Vote");
} else {
    console.log("Not Eligible");
}



// Task 5 - Shopping Cart
// Create array:
// let cart = [
//   "Rice",
//   "Milk",
//   "Sugar",
//   "Tea Powder"
// ]
// Print:
// First Product
// Last Product
// Total Products

let cart = ["Rice", "Milk", "Sugar", "Tea Powder"];

console.log("First Product: " + cart[0]);
console.log("Last Product: " + cart[cart.length - 1]);
console.log("Total Products: " + cart.length);


// Task 6 - Student Details
// Create object:
// let student = {
//     name : "Naveen",
//     age : 18,
//     course : "MERN"
// }
// Print:
// Student Name
// Student Course
// 🥇 Level 3 (Real-Time Office Tasks)

let student = {
    name: "Naveen",
    age: 18,
    course: "MERN"
};

console.log("Student Name: " + student.name);
console.log("Student Course: " + student.course);




// Task 7 - Employee Salary Calculator
// Create:
// salary = 25000
// bonus = 5000
// Find total salary.
// Output:
// Total Salary : 30000

let salary = 25000;
let bonus = 5000;
let totalSalary = salary + bonus;

console.log("Total Salary : " + totalSalary);



// Task 8 - Website Login Check
// Create:
// let username = "admin"
// let password = "1234"
// Ask user through prompt.
// If both match:
// Login Successful
// Else:
// Invalid Credentials
// Use:
// &&

let username = "admin";
let password = "1234";

let enteredUsername = prompt("Enter username:");
let enteredPassword = prompt("Enter password:");

if (enteredUsername === username && enteredPassword === password) {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}



// Task 9 - Food Delivery App
// Create:
// foodPrice = 350
// deliveryCharge = 50
// Calculate:
// Total Bill
// GST 5%
// Grand Total
// 🏆 Level 4 (Company Interview Style)

let foodPrice = 350;
let deliveryCharge = 50;

let totalBill = foodPrice + deliveryCharge;
let gst = totalBill * 0.05;
let grandTotal = totalBill + gst;

console.log("Total Bill: " + totalBill);
console.log("GST 5%: " + gst);
console.log("Grand Total: " + grandTotal);




// Task 10 - E-Commerce Product Details
// Create object:
// let product = {
//    name : "Laptop",
//    price : 50000,
//    brand : "ASUS",
//    stock : true
// }
// Print:
// Product Name
// Brand
// Price
// Stock Available

let product = {
    name: "Laptop",
    price: 50000,
    brand: "ASUS",
    stock: true
};

console.log("Product Name: " + product.name);
console.log("Brand: " + product.brand);
console.log("Price: " + product.price);
console.log("Stock Available: " + product.stock);




// Task 11 - Attendance System
// Ask:
// Present?
// using:
// confirm()
// Output:
// Attendance Marked
// or
// Absent


let isPresent = confirm("Present?");

if (isPresent) {
    console.log("Attendance Marked");
} else {
    console.log("Absent");
}



// Task 12 - Banking Application
// Ask user:
// Current Balance
// Withdraw Amount
// Check:
// withdraw <= balance
// Output:
// Transaction Successful
// Remaining Balance : xxx
// otherwise:
// Insufficient Balance


let balance = Number(prompt("Enter Current Balance:"));
let withdrawAmount = Number(prompt("Enter Withdraw Amount:"));

if (withdrawAmount <= balance) {
    let remaining = balance - withdrawAmount;
    console.log("Transaction Successful");
    console.log("Remaining Balance : " + remaining);
} else {
    console.log("Insufficient Balance");
}


// 🔥 Challenge Task (Mix Everything)
// Build a Mini Employee Management System
// Store in object:
// {
//    name,
//    age,
//    department,
//    salary
// }
// Print:
// Employee Name
// Employee Age
// Department
// Annual Salary
// Then check:
// salary > 30000
// Output:
// Senior Employee
// or
// Junior Employee

let employee = {
    name: prompt("Enter Employee Name:"),
    age: Number(prompt("Enter Employee Age:")),
    department: prompt("Enter Department:"),
    salary: Number(prompt("Enter Salary:"))
};

let annualSalary = employee.salary * 12;

console.log("Employee Name: " + employee.name);
console.log("Employee Age: " + employee.age);
console.log("Department: " + employee.department);
console.log("Annual Salary: " + annualSalary);

if (employee.salary > 30000) {
    console.log("Senior Employee");
} else {
    console.log("Junior Employee");
}
