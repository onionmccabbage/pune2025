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