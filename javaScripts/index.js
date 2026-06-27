// operator:

// arimethic operator : + , - , * , /, %
// assignment operator : =, +=, -=, *= ,/=
// comparison operator : ==, ===, >, <, >=, <=, !=, !=
// logical operator : &&, ||, !


let a = 10;
let b = 20;

console.log(a + b); // 30
console.log(a - b); // -10
console.log(a * b); // 200
console.log(a / b); // 0.5
console.log(a % b); // 10


console.log("======================")
a += 2 // a = a + 2
       // a = 10 + 2
       // a = 12

b -= 5 // b = b - 5
       // b = 20 - 5
       // b = 15

console.log(a);
console.log(b);

console.log("======================")
let num1 = 10;
let num2 = "10";

console.log(num1 == num2); 
console.log(num1 === num2);
console.log(num1 >= num2);

console.log("======================")
console.log(true && true ); // true
console.log(true && false); // false

console.log(true || false); // true
console.log(false || false); // false

console.log(!true); // false
console.log(!false); // true