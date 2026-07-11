let fruits = ["apple", "banana", "cherry", "orange", "peach", "plum"];   

// loop through array
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])

// for each loop
console.log("==========================")
fruits.forEach((value, index)=>{
    console.log(index, " ", value)      
})

// map 
console.log("==========================")
let new_fruits = fruits.map((e, i)=>{
    console.log(e, " ", i)
    if (e === "banana"){
        return e
    }
})
console.log(new_fruits)

// filter
console.log("=========================")
let p_fruits = fruits.filter((e)=>{
    if(e.startsWith('p')){
        return e
    }
})
console.log(p_fruits)