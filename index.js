var score1 = 85;
if (score1 > 90) {
    console.log("Excellent");
}
else if (score1 > 75) {
    console.log("Good");
}
else {
    console.log("Needs Improvement");
}
var numbers1 = [1, 2, 3, 4, 5];
var numbers = [1, 2, 3, 4, 5];
var names = ["Ahmed", "Ali", "Sara"];
var emptyValue = null;
var notDefined = undefined;
function logMessage() {
    console.log("This function returns nothing");
}
var input;
input = "Hello";
input = 25;
var randomValue = "Hello";
randomValue = 25;
var isLoggedIn = true;
var count = 10;
var message = "Hello, TypeScript!";
for (var i_1 = 0; i_1 < 5; i_1++) {
    console.log(i_1);
}
var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
var j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);
var users = [
    { name: "Alice", age: 30, isAdmin: false },
    { name: "Bob", age: 45, isAdmin: true },
    { name: "Charlie", age: 50, isAdmin: true },
]; // Example array of users
var oldestAdmin = null;
for (var i_2 = 0; i_2 < users.length; i_2++) {
    if (users[i_2].isAdmin) {
        if (oldestAdmin === null || users[i_2].age > oldestAdmin.age) {
            oldestAdmin = users[i_2];
        }
    }
}
if (oldestAdmin !== null) {
    console.log(oldestAdmin.name);
}
//////////////////////////////////////
var prices = [150, 20, 300, 50, 400]; // Example array of product prices
var threshold = 100; // Example threshold
for (var i_3 = 0; i_3 < prices.length; i_3++) {
    if (prices[i_3] > threshold) {
        console.log(prices[i_3]);
    }
}
///////////////////////////////////
var num = 7; // Example number
if (num % 2 === 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
