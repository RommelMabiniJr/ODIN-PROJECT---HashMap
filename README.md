
# Hashmap & LinkedList

A JavaScript implementation of a Hashmap, built as part of [The Odin Project's](https://www.theodinproject.com/lessons/javascript-hashmap) curriculum. This project also includes a custom LinkedList and Node class, which are used internally by the Hashmap for collision handling.


## Features

- **HashMap**
    - Custom HashMap class with basic methods:
        - `set(key, value)`
        - `get(key)`
        - `has(key)`
        - `remove(key)`
        - `length()`
        - `clear()`
        - `keys()`
        - `values()`
        - `entries()`
    - Handles collisions using separate chaining (using LinkedList for each bucket).
    - Resizes automatically when load factor is exceeded.

- **LinkedList & Node**
    - Custom `LinkedList` class used for each bucket in the HashMap.
    - Each LinkedList is made up of `Node` objects, each storing a key-value pair.
    - LinkedList methods include:
        - `append(key, value)`
        - `prepend(key, value)`
        - `remove(key)`
        - `get(key)`
        - `contains(key)`
        - `upsert(key, value)`
        - `numberOfNodes()`
    - Node class represents a single element in the list with `key`, `value`, and `next` properties.


## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/RommelMabiniJr/ODIN-PROJECT---HashMap.git
    ```
2. Open the project folder and review the `HashMap.js`, `LinkedList.js`, and `Node` class (inside `LinkedList.js`).


## Usage Example

```js
import HashMap from './HashMap.js';

const map = new HashMap(0.75, 16); // loadFactor, initial capacity
map.set('name', 'Alice');
console.log(map.get('name')); // Alice
console.log(map.has('name')); // true
map.remove('name');
console.log(map.has('name')); // false
```


## Assignment

This project is based on [The Odin Project's JavaScript Hashmap assignment](https://www.theodinproject.com/lessons/javascript-hashmap).


## License

This project is open source and available under the [MIT License](LICENSE).
