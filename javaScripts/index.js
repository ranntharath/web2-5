// non return function
//     no parameter
//     with parameter
// return function
//     with parameter
//     no parameter

// // non return function no parameter
// function greeting(){
//     console.log("Hello, World!");
// }
// // non return function with parameter
// function greetUser(name){
//     console.log("Hello, " + name + "!");
// }
// // return function no parameter
// function getUser(){ // getUser() = "dara"
//     return "dara";
//     console.log("Are you sure you want to get the user?");
// }
// // return function with parameter
// function sum(a,b){ // a = 10, b = 20
//        return a + b; // 30
// }

// greeting()
// greetUser("Alice")
// console.log(getUser())
// console.log(sum(10, 20))

// let username = "John Doe"
// function greetUser() {
//     // local variable
//     var age = 25
//     let name = "daara"
//     console.log("Hello, " + name + "!");
//     console.log("Your age is " + age);
// }

// if(3>2){
//        let id = 123
//        var score = 100 // global variable
// }

// console.log(score)

// greetUser()

// let names = ["Alice", "Bob", "Charlie"];
// // charlie -> jonh
// names[2] = "John"; // Update the value at index 2

// console.log(names[0])
// console.log(names[1])
// console.log(names[2])
// console.log(names)

// names.push("David"); // Add a new element to the end of the array
// console.log(names)

// names.unshift("Eve"); // Add a new element to the beginning of the array
// console.log(names)

// names.pop(); // Remove the last element from the array
// console.log(names)

// names.shift(); // Remove the first element from the array
// console.log(names)

// console.log(names.length) // Get the length of the array

// console.log(names.indexOf("Bob")) // Get the index of an element in the array

// console.log(names.includes("Bob")) // Check if an element exists in the array

// let new_array = names.slice(0,2)
// console.log(new_array)

// // names.splice(0,2) // remove 1 element at index 2
// console.log(names)
// names.splice(0, 2) // Remove 2 elements starting from index 0

// console.log(names)

// let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// // for loop
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// console.log("===================================")
// for (let fruit of fruits) { // fruit = banana,
//     console.log(fruit);
// }

// console.log("==================================")
// for (let index in fruits) { // index = 0,1,2,3,4
//     console.log(index);
// }

// console.log("=================================")
// fruits.forEach(function(e, i){ // e is the element, i is the index
//     console.log(i, " ", e)
// })

// console.log('================================')
// fruits.forEach((e,i)=>{
//     console.log(i, " ", e)
// })

const container = document.getElementById("pro-cont")

const items = [
  "https://morktinh.shop/media/categories/IMG_1135.jpeg",
  "https://morktinh.shop/media/categories/mewing.jpg",
  "https://morktinh.shop/media/categories/shoes.jpg"
];

let image =''

items.forEach((e)=>{
    image += `<img src="${e}" alt="Product Image" style="width: 100%; height: auto;">`
})

container.innerHTML = image
