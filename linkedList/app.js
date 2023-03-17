const linkedListModule = require("./linkedList");
const LinkedList = linkedListModule.LinkedList;

const myList = new LinkedList();
myList.append(1);
myList.append(2);
console.log(myList.toString());
