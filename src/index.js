class LinkedList {
  head = null;

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

  prepend(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      return;
    }
    node.nextNode = this.head;
    this.head = node;
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
console.log(list1.head);
console.log(list1.head.nextNode);
console.log(list1.head.nextNode.nextNode);
console.log(list1.head.nextNode.nextNode.nextNode);
