import HashMap from "./HashMap.js";

const test = new HashMap(.75, 16);

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
test.set('lion', 'golden')
console.log(test.length());
console.log(test.length());
console.log(test.entries());

// test reassignment
test.set('grape', 'green')
console.log(test.get("grape"));
console.log(test.length());
console.log(test.entries());

// test growth
test.set('moon', 'silver')
console.log(test.length());
console.log(test.entries());

// test reassignment after growth
test.set('moon', 'copper');
console.log(test.length());
console.log(test.entries());

// test adding a new key after growth
test.set('night', 'dark blue')
console.log(test.length());
console.log(test.entries());

//test removing a key
console.log(test.remove('apple'));
console.log(test.length());
console.log(test.entries());