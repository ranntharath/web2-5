const cont = document.getElementById("container");
const cont2 = document.getElementById("container2")
const attr = document.getElementById("attribute")
const getName = document.getElementById("name")
console.log(cont)
console.log(cont2)
console.log(attr)
console.log(getName)

// change content 
cont.textContent = "<h1>new content 1</h1>"
cont2.innerHTML = "<h1>new content 2</h1>"

cont2.style = "color: red; background-color:blue;"

cont.style.color = "green"
cont.style.backgroundColor = "yellow"

const name = attr.getAttribute("name")
const id = attr.getAttribute('id')

console.log(name)
console.log(id)


const value = getName.getAttribute("value")
console.log(value)