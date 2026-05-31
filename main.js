import { HashMap } from "./HashMap.js";

const test = new HashMap();

// fill to full capacity (0.75)
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
console.log('Capacity Before Grow: ', test.capacity)
test.set('lion', 'golden')

// overwrite some keys
console.log('Length: ', test.length())
// test.set('hat', 'brown')
test.set('dog', 'black')
// console.log('Length: ', test.length())

test.distribution();

// test grow functionality
console.log('Capacity Before Grow: ', test.capacity)
test.set('moon', 'silver')
console.log('Length: ', test.length())
console.log('Capacity After Grow: ', test.capacity)

test.distribution();
console.log(test.buckets.length)

// overwrite some keys
console.log('Length: ', test.length())
test.set('ice cream', 'pistacho')
test.set('carrot', 'yellow')
console.log('Length: ', test.length())

// test hash set
import { HashSet } from "./HashSet.js";

const set = new HashSet();

set.add('apple')
set.add('banana')
set.add('carrot')
set.add('apple') // duplicate

console.log(set.length())     // 3
console.log(set.has('apple')) // true
console.log(set.has('dog'))   // false

set.remove('banana')
console.log(set.keys())       // ['apple', 'carrot']

set.clear()
console.log(set.length())     // 0