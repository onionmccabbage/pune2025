// JavaScript is ALWAYS plain text that gets interpreted
var a = 1   // we tend to avoid this now
let b = 2   // declare a variable (mutable)
const c = 3 // an immutable value
// JavaScript is loosley data typed
a = b/c
b = a*b
// also boolean, null, undefined, string
// any value can be assigned a diofferent data type
a = 'hello'
console.log(a, b, c, typeof(a), typeof(b), typeof(c))

// complex data types (structures)
// NB the members of an array or object can be of ANY data type
let colors = ['Yellow', 'Blue', 'Magenta', 'Brown', 'Black'] // array
// we declare an object as a collection of key:value pairs of any data type
let pune = {'country':'India', 'city':'Pune', 'state':'Maharashtra', 'area':516.18}
// access array members using [] and access object members using dot-notation or ['']
console.log(colors, pune, colors[3], pune.area, pune['country'])

// there are several ways to write a function
function doStuff(){} // old way
const fnA = x => x*x     // very terse way to write a function
const fnB = (x)=>x*x     // if there are NO arguments or more than ONE argument, you must do this
const fnC = x =>{ return x*x } // if we use {} we consider using return
// this is the most clear version
const fnD = (x, y)=>{ 
    return x**y // ** means raise to the power
} 

console.log(fnA(3), fnD(4,3))

// date and time
d = new Date()
t = Date.now()
// we can see these
console.log(d.toString(), d.getHours()) // or getMinutes etc.

// conditionals (if else)
let msg = `Have a good morning`
// also < > <= >= != ==
// double-equals CHECKS equality single equals SETS equality
if (d.getHours() > 18) {
    msg = `Good evening`
} else if (d.getHours() > 12) {
    msg = `May your afternoon be good`
}
console.log(msg)

// rest and spread
// the spread operator ...
let [yel, blu, mag, bro, bla] = [...colors]
console.log(yel, mag)
// we can use spread to destructure an object
const showInfo = (o)=>{
    let {country, city, state, area} = o
    // back-tick syntax lets us inject content into a string using ${}
    console.log(`${city} is in ${state}, part of ${country}, with an area of ${area} square km`)
}
showInfo(pune) // here we invoke the function

// looping


