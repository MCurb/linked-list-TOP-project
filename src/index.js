class LinkedList {
  head = null;

  //Append a node to the tail of the list
  append(value, lastNode = this.head) {
    if (this.head === null) {
      const node = new Node(value);
      this.head = node;
      return;
    }
    if (lastNode.nextNode === null) {
      const node = new Node(value);
      lastNode.nextNode = node;
      return;
    }
    this.append(value, lastNode.nextNode);
  }

  //Prepend node to the head of the list
  prepend(value) {
    const node = new Node(value);
    node.nextNode = this.head;
    this.head = node;
  }

  //Return the total number of nodes
  size(currentNode = this.head) {
    let count = 0;
    if (currentNode === null) {
      return count;
    }
    count++;
    return count + this.size(currentNode.nextNode);
  }

  //Return the first node
  headNode() {
    return this.head;
  }

  //Return the last node
  tail(currentNode = this.head) {
    if (this.head === null) {
      return this.head;
    }
    if (currentNode.nextNode === null) {
      return currentNode;
    }

    return this.tail(currentNode.nextNode);
  }

  //Return the node at a specified index
  at(index) {
    if (this.head === null) {
      return this.head;
    }
    let currentNode = this.head;
    for (let i = 0; i <= index - 1; i++) {
      if (currentNode === null) {
        return null;
      }
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  //Remove the tail node
  pop() {
    if (this.head === null) {
      return;
    }
    let currentNode = this.head.nextNode;
    let prevNode = this.head;

    //If currentNode points to null it means it's
    //the last node, then make the previous node point to null
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      prevNode = prevNode.nextNode;
    }
    prevNode.nextNode = null;
  }

  //Check if the given value exists or not
  contains(value) {
    if (this.head === null) {
      return false;
    }
    let currentNode = this.head;
    while (currentNode.value !== value && currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode.value === value ? true : false;
  }

  //Return the index of the node containing the given value, or null if not found
  find(value) {
    if (this.head === null) {
      return null;
    }
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode.value !== value && currentNode.nextNode !== null) {
      currentIndex++;
      currentNode = currentNode.nextNode;
    }

    return currentNode.value === value ? currentIndex : null;
  }

  //Represent the LinkedList objects as strings
  toString() {
    if (this.head === null) {
      return 'null';
    }
    let finalString = '';
    let currentNode = this.head;
    while (currentNode !== null) {
      finalString += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    return (finalString += 'null');
  }

  insertAt(value, index) {
    if (this.head === null) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    }

    let currentIndex = 1;
    let currentNode = this.head.nextNode;
    let prevNode = this.head;

    while (currentIndex !== index && currentNode.nextNode !== null) {
      currentIndex++;
      currentNode = currentNode.nextNode;
      prevNode = prevNode.nextNode;
    }

    if (currentIndex === index) {
      const node = new Node(value);
      node.nextNode = currentNode;
      prevNode.nextNode = node;
    }

    // If the index is exactly one more than the last index, append to the end
    if (currentNode.nextNode === null && index - currentIndex === 1) {
      const node = new Node(value);
      currentNode.nextNode = node;
      node.nextNode = null;
      return;
    } else {
      return console.log('wrong index');
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list1 = new LinkedList();
console.log(list1.head);

list1.append(52);
list1.append(56);
list1.prepend('perra');
list1.append('gata');
list1.prepend('la caballota');
console.log(list1.head);
console.log(list1.head.nextNode);
console.log(list1.head.nextNode.nextNode);
console.log(list1.head.nextNode.nextNode.nextNode);
console.log(list1.size());
console.log(list1.headNode());
list1.pop();
console.log(list1.tail());
console.log(list1.at(4));
console.log(list1.contains('gata'));
console.log(list1.find(52));
console.log(list1.find('la caballota'));
list1.insertAt('la patrona', 2);
console.log(list1.toString());
