const linkedListModule = require("./linkedList");
const LinkedList = linkedListModule.LinkedList;

const myList = new LinkedList();
myList.prepend(1);
myList.prepend(2);
console.log(myList.toString());
