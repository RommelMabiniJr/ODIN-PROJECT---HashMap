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

  remove(key) {
    if(!this.head) return false;

    // When key is at the head
    if(this.head.key === key) {
      this.head = this.head.next;
      this.length--;

      // If we removed the last node, update tail
      if(!this.head) this.tail = null;
      return true;
    }


    let previousNode = this.head;
    let currentNode = this.head.next;

    while(currentNode) {
      if(currentNode.key === key) {
        previousNode.next = currentNode.next;
        // If we removed the last node, update tail
        if(currentNode === this.tail) {
          this.tail = previousNode; // Update tail to the previous node
        }
        this.length--;
        return true;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    return false;
  }

  getAllKeys() {
    let current = this.head;
    let allKeys = [];

    while(current != null) {
      allKeys.push(current.key);
      current = current.next
    }

    return allKeys;
  }

  getAllValues() {
    let current = this.head;
    let allValues = [];

    while(current != null) {
      allValues.push(current.value);
      current = current.next
    }

    return allValues;
  }

  getAllKeyAndValuePair() {
    let current = this.head;
    let allPairs = [];

    while(current != null) {
      allPairs.push([current.key, current.value]);
      current = current.next
    }

    return allPairs;
  }

  numberOfNodes() {
    return this.length;
  }
}

export default LinkedList;
