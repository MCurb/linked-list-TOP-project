import { LinkedList } from './linked-list.js';

const list = new LinkedList();
console.log(list.head);

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

console.log(list.toString());
console.log(`List size: ${list.size()}`);
console.log('Head node:', list.headNode());
console.log('Tail node:', list.tail());
list.pop();
console.log('Node at index 1:', list.at(1));
console.log(`Contains 'snake': ${list.contains('snake')}`);
console.log(`Index of 'parrot': ${list.find('parrot')}`);
list.insertAt('la patrona', 2);
list.removeAt(5);
console.log(list.toString());
