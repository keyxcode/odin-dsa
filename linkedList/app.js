const linkedListModule = require("./linkedList");
const ListNode = linkedListModule.ListNode;
const LinkedList = linkedListModule.LinkedList;

const myList = new LinkedList();
// myList.append(1);
console.log(myList.toString());
console.log(myList.find(11) === null);
