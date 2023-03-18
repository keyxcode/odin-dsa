const linkedListModule = require("./linkedList");
const ListNode = linkedListModule.ListNode;
const LinkedList = linkedListModule.LinkedList;

const myList = new LinkedList();
myList.prepend(1);
myList.prepend(2);
myList.prepend(3);
console.log(myList.toString());

myList.removeAt(3);
console.log(myList.toString());
console.log(myList.length);
