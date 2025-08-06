class Node {
    constructor(key = null, value = null, next = null) {
        this.key = key,
        this.value = value,
        this.next = next
    }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Method to add a node to the end of the list (efficient for appending)
  append(key, value) {
    const newNode = new Node(key, value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Method to add a node to the beginning of the list (efficient for prepending)
  prepend(key, value) {
    const newNode = new Node(key, value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // Print all values
  print() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.key);
      current = current.next;
    }
    console.log(values.join(' -> '));
  }

  contains(key) {
    let current = this.head;
    while(current) {
        if(current.key == key) return true;
        current = current.next;
    }
    return false;
  }

  get(key) {
    let current = this.head;
    while(current) {
        if(current.key == key) return current;
        current = current.next;
    }
    return null;
  }

  update(key, newValue) {
    let current = this.head;
    while(current) {
        if(current.key === key) current.value = newValue;
        current = current.next;
    }
  }

  upsert(key, value) {
    let keyExist = this.contains(key);

    if(!keyExist) {
        this.append(key, value)
    } else {
        this.update(key, value)
    }
  }
}

export default LinkedList;


// const list = new LinkedList();
// list.append("Carlo");
// list.append("Mark");
// list.prepend("Olrak");
// list.append("Darius");
// list.print(); // Output: 5 -> 10 -> 20
// // console.log(list.removeHead()); // 5
// list.print(); // Output: 10 -> 20
// console.log(list.length);
// console.log(list.contains("Nonexistent"))
// console.log(list.contains("Mark"))
// console.log(list.head);
// console.log(list.tail);