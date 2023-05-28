const fruits = ['apple', 'banana', 'orange', 'kiwi'];
const vegetables = ['carrot', 'broccoli'];

// push

fruits.push("tomato")
console.log(fruits)

//pop

fruits.pop()
console.log(fruits)

//shift

fruits.shift()
console.log(fruits)

//unshift

fruits.unshift("cherry")
console.log(fruits)

//concat

const fruitsNveg = fruits.concat(vegetables)
console.log(fruitsNveg)

//slice

const sliced = fruits.slice(2,4)
console.log(sliced)

//splice
const fruitsForSplice = ['apple', 'banana', 'orange', 'kiwi'];

const spliced = fruitsForSplice.splice(2,4)
console.log(spliced)
console.log(fruitsForSplice)
console.log(fruits)

//forEach

fruits.forEach((fruit)=> console.log(fruit ))

//map

const location = fruits.map((fruit)=> console.log(`This is a ${fruit}`))

//filter

const filtered = fruits.filter((fruit)=> fruit.startsWith("c") ? console.log(fruit) : console.log(`${fruit} doesn't match`) )

//reduce 

const reduced = fruits.reduce((index,fruit)=> fruit + index)
console.log(reduced)

//find

const found = fruits.find((fruit)=>fruit.length > 4)
console.log(found)

//indexOf

console.log(fruits.indexOf("kiwi"))

//includes

console.log(fruits.includes("kiwi"))

//some

console.log(fruits.some((fruit)=> fruit.length > 3))

//every 

console.log(fruits.every((fruit)=> fruit.endsWith("a") || fruit.length > 1))

//sort 

console.log(fruits.sort())

//reverse

console.log(fruits.reverse())

//join

console.log(fruits.join('#'))

//checks if it is NOT an array
console.log(!Array.isArray(fruits))









