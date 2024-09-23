let score1: number = 85;

if (score1 > 90) {
  console.log("Excellent");
} else if (score1 > 75) {
  console.log("Good");
} else {
  console.log("Needs Improvement");
}
let numbers1: Array<number> = [1, 2, 3, 4, 5];
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Ahmed", "Ali", "Sara"];
let emptyValue: null = null;
let notDefined: undefined = undefined;
function logMessage(): void {
  console.log("This function returns nothing");
}
let input: unknown;
input = "Hello";
input = 25;
let randomValue: any = "Hello";
randomValue = 25;
let isLoggedIn: boolean = true;
let count: number = 10;
let message: string = "Hello, TypeScript!";
for (let i = 0; i < 5; i++) {
  console.log(i);
}
let i: number = 0;
while (i < 5) {
  console.log(i);
  i++;
}
let j: number = 0;
do {
  console.log(j);
  j++;
} while (j < 5);
/////////////////////////////////////////////////////////////////////////////
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

let users: User[] = [
  { name: "Alice", age: 30, isAdmin: false },
  { name: "Bob", age: 45, isAdmin: true },
  { name: "Charlie", age: 50, isAdmin: true },
]; // Example array of users

let oldestAdmin: User | null = null;

for (let i = 0; i < users.length; i++) {
  if (users[i].isAdmin) {
    if (oldestAdmin === null || users[i].age > oldestAdmin.age) {
      oldestAdmin = users[i];
    }
  }
}

if (oldestAdmin !== null) {
  console.log(oldestAdmin.name);
}
//////////////////////////////////////
let prices: number[] = [150, 20, 300, 50, 400]; // Example array of product prices
let threshold: number = 100; // Example threshold

for (let i = 0; i < prices.length; i++) {
  if (prices[i] > threshold) {
    console.log(prices[i]);
  }
}
///////////////////////////////////
let num: number = 7; // Example number
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
