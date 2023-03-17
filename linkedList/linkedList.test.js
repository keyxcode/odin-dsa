const linkedListModule = require("./linkedList");
const ListNode = linkedListModule.ListNode;
const LinkedList = linkedListModule.LinkedList;

describe("#append", () => {
  test("adds a new node containing value to the end of the list", () => {
    const myList = new LinkedList();
    myList.append(10);
    myList.append(20);

    expect(myList.HEAD.value).toBe(10);
    expect(myList.HEAD.next.value).toBe(20);
    expect(myList.length).toBe(2);
  });
});

describe("#prepend", () => {
  test("adds a new node containing value to the start of the list", () => {
    const myList = new LinkedList();
    myList.prepend(10);
    const oldHead = myList.HEAD;
    myList.prepend(20);

    expect(myList.HEAD.value).toBe(20);
    expect(myList.HEAD.next).toBe(oldHead);
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

describe("#size", () => {
  test("returns the total number of nodes", () => {
    const myList = new LinkedList();
    myList.prepend(10);
    myList.prepend(20);

    expect(myList.size()).toBe(2);
  });
});

describe("#head", () => {
  test("returns head after list is initialized", () => {
    const myList = new LinkedList();

    expect(myList.head()).toBe(null);
  });
  test("returns head after a process of prepending", () => {
    const myList = new LinkedList();
    myList.prepend(10);
    myList.prepend(20);

    expect(myList.head()).toEqual({
      value: 20,
      next: {
        value: 10,
        next: null,
      },
    });
  });
  test("returns head after a process of appending", () => {
    const myList = new LinkedList();
    myList.append(10);
    myList.append(20);

    expect(myList.head()).toEqual({
      value: 10,
      next: {
        value: 20,
        next: null,
      },
    });
  });
});

describe("#tail", () => {
  test("returns tail after list is initialized", () => {
    const myList = new LinkedList();

    expect(myList.tail()).toBe(null);
  });
  test("returns tail after a process of prepending", () => {
    const myList = new LinkedList();
    myList.prepend(10);
    myList.prepend(20);

    expect(myList.tail()).toEqual({
      value: 10,
      next: null,
    });
  });
  test("returns tail after a process of appending", () => {
    const myList = new LinkedList();
    myList.append(10);
    myList.append(20);

    expect(myList.tail()).toEqual({
      value: 20,
      next: null,
    });
  });
});

describe("#at", () => {
  test("returns the node at the given index", () => {
    const myList = new LinkedList();
    myList.prepend(10);
    myList.prepend(20);

    expect(myList.at(0)).toEqual({
      value: 20,
      next: {
        value: 10,
        next: null,
      },
    });
    expect(myList.at(1)).toEqual({
      value: 10,
      next: null,
    });
    expect(myList.at(-1)).toBeFalsy();
    expect(myList.at(3)).toBeFalsy();
  });
});

describe("#pop", () => {
  test("removes the last element from the list and returns it", () => {
    const myList = new LinkedList();
    myList.prepend(10);
    myList.prepend(20);
    const poppedNode = myList.pop();

    expect(poppedNode).toEqual({
      value: 10,
      next: null,
    });
    expect(myList.size()).toBe(1);
    expect(myList.head()).toEqual({
      value: 20,
      next: null,
    });
  });
});
