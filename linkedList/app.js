const linkedListModule = require("./linkedList");
const ListNode = linkedListModule.ListNode;
const LinkedList = linkedListModule.LinkedList;

const myList = new LinkedList();
myList.prepend(1);
myList.append(2);
console.log(myList.toString());

myList.insertAt(3, -1);
console.log(myList.toString());
