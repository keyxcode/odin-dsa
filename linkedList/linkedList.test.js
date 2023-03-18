const linkedListModule = require("./linkedList");
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

describe("#contains", () => {
  test("returns true if the passed in value is in the list", () => {
    const myList = new LinkedList();
    myList.prepend(10);
    myList.prepend(20);

    expect(myList.contains(10)).toBe(true);
  });
  test("returns false if the passed in value is not in the list", () => {
    const myList = new LinkedList();
    myList.prepend(10);
    myList.prepend(20);

    expect(myList.contains(11)).toBe(false);
  });
  test("returns false if the list is empty", () => {
    const myList = new LinkedList();

    expect(myList.contains(11)).toBe(false);
  });
});

describe("#find", () => {
  test("returns the index of the node containing value", () => {
    const myList = new LinkedList();
    myList.prepend(10);
    myList.prepend(20);

    expect(myList.find(10)).toBe(1);
  });
  test("returns null if the passed in value is not in the list", () => {
    const myList = new LinkedList();
    myList.prepend(10);
    myList.prepend(20);

    expect(myList.find(11)).toBe(null);
  });
  test("returns null if the list is empty", () => {
    const myList = new LinkedList();

    expect(myList.find(11)).toBe(null);
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

describe("#insertAt", () => {
  test("inserts a new node with the provided value at the given index", () => {
    const myList = new LinkedList();
    myList.prepend(10);
    myList.prepend(20);
    myList.prepend(30);
    myList.insertAt(40, 1);

    expect(myList.at(1)).toEqual({
      value: 40,
      next: {
        value: 20,
        next: {
          value: 10,
          next: null,
        },
      },
    });
  });
  test("appends a new node if the provided index is outside the list length", () => {
    const myList = new LinkedList();
    myList.prepend(10);
    myList.prepend(20);
    myList.insertAt(40, 4);

    expect(myList.at(2)).toEqual({
      value: 40,
      next: null,
    });
  });
  test("prepends a new node if the provided index is less than or equal to 0", () => {
    const myList = new LinkedList();
    myList.prepend(10);
    myList.prepend(20);
    myList.insertAt(40, -1);

    expect(myList.at(0)).toEqual({
      value: 40,
      next: {
        value: 20,
        next: {
          value: 10,
          next: null,
        },
      },
    });
  });
  test("makes the new node the head if the list is empty", () => {
    const myList = new LinkedList();
    myList.insertAt(40, 2);

    expect(myList.at(0)).toEqual({
      value: 40,
      next: null,
    });
  });
});

describe("#removeAt", () => {
  test("removes the node at the given index", () => {
    const myList = new LinkedList();
    myList.prepend(1);
    myList.prepend(2);
    myList.prepend(3);
    myList.removeAt(0);

    expect(myList.at(0)).toEqual({
      value: 2,
      next: {
        value: 1,
        next: null,
      },
    });
    expect(myList.length).toBe(2);
  });
  test("removes the node at the given index", () => {
    const myList = new LinkedList();
    myList.prepend(1);
    myList.prepend(2);
    myList.prepend(3);
    myList.removeAt(1);

    expect(myList.at(0)).toEqual({
      value: 3,
      next: {
        value: 1,
        next: null,
      },
    });
    expect(myList.length).toBe(2);
  });
  test("returns false if the index is outside the list range", () => {
    const myList = new LinkedList();
    myList.prepend(1);
    myList.prepend(2);
    myList.prepend(3);

    expect(myList.removeAt(-1)).toBe(false);
    expect(myList.removeAt(3)).toBe(false);
    expect(myList.length).toBe(3);
  });
  test("returns false if the list empty", () => {
    const myList = new LinkedList();
    expect(myList.removeAt(0)).toBe(false);
    expect(myList.removeAt(-2)).toBe(false);
    expect(myList.removeAt(3)).toBe(false);
  });
});
