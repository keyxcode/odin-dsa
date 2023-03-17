const linkedListModule = require("./linkedList");
const ListNode = linkedListModule.ListNode;
const LinkedList = linkedListModule.LinkedList;

describe("#prepend", () => {
  test("adds a new node containing value to the start of the list", () => {
    const myList = new LinkedList();
    myList.prepend(10);
    const oldHead = myList.head;
    myList.prepend(20);

    expect(myList.head.value).toBe(20);
    expect(myList.head.next).toBe(oldHead);
    expect(myList.length).toBe(2);
  });
});

describe("#toString", () => {
  test("represents the linked list object as a string", () => {
    const myList = new LinkedList();
    myList.prepend(10);
    myList.prepend(20);
    const myListToString = myList.toString();

    expect(myList.toString()).toEqual("[20]->[10]->null");
  });
});
