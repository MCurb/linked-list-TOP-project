export class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //Append a node to the tail of the list
  append(value, lastNode = this.head) {
    if (!this.head) {
      const node = new Node(value);
      this.head = node;

      this.length++;
      return;
    }
    if (!lastNode.nextNode) {
      const node = new Node(value);
      lastNode.nextNode = node;

      this.length++;
      return;
    }
    this.append(value, lastNode.nextNode);
  }

  //Prepend node to the head of the list
  prepend(value) {
    const node = new Node(value);
    node.nextNode = this.head;
    this.head = node;

    this.length++;
  }

  //Return the total number of nodes
  size() {
    return this.length;
  }

  //Return the first node
  headNode() {
    return this.head;
  }

  //Return the last node
  tail(currentNode = this.head) {
    if (!this.head) return null;

    if (!currentNode.nextNode) return currentNode;

    return this.tail(currentNode.nextNode);
  }

  //Return the node at a specified index
  at(index) {
    if (index < 0 || index >= this.length) return null;

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  //Remove the tail node
  pop() {
    if (!this.head) return null;
    if (this.length === 1) {
      this.head = null;
      this.length--;
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
    this.length--;
  }

  //Check if the given value exists or not
  contains(value) {
    if (!this.head) return false;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  //Return the index of the node containing the given value, or null if not found
  find(value) {
    if (!this.head) return null;
    let currentNode = this.head;
    let index = 0;

    while (currentNode) {
      if (currentNode.value === value) return index;
      currentNode = currentNode.nextNode;
      index++;
    }

    return null;
  }

  //Represent the LinkedList objects as strings
  toString() {
    if (!this.head) return null;
    let currentNode = this.head;
    let finalString = '';

    while (currentNode) {
      finalString += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    return (finalString += 'null');
  }

  insertAt(value, index) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.prepend(value);
    if (index === this.length) return this.append(value);

    const node = new Node(value);
    let prevNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      prevNode = prevNode.nextNode;
    }

    node.nextNode = prevNode.nextNode;
    prevNode.nextNode = node;
    this.length++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === this.length - 1) return this.pop();
    if (index === 0) {
      this.head = this.head.nextNode;
      this.length--;
      return;
    }

    let prevNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      prevNode = prevNode.nextNode;
    }

    prevNode.nextNode = prevNode.nextNode.nextNode;
    this.length--;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
