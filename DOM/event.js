// Synchronous
console.log("task 1")
console.log("task 2")
console.log("task 3")

// Asynchronous 
console.log("====================")
console.log("task 1")

setTimeout(()=>{
  console.log("task 2")
}, 3000) // 3000ms = 3s

console.log("task 3")


// API = Application Programming Interface
// Frontend : UI 
// backend/Server : 