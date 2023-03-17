class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new ListNode(value, null);
    this.length++;

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      let next = current.next;
      current = next;
    }
    current.next = newNode;
  }

  prepend(value) {
    const newNode = new ListNode(value, this.head);
    this.head = newNode;
    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    return this.head;
  }
  tail() {}
  at(index) {}
  pop() {}
  contains(value) {}
  find(value) {}
  toString() {
    let listString = "";
    let current = this.head;

    while (current) {
      listString += `[${current.value}]->`;
      current = current.next;
    }
    return `${listString}null`;
  }
}

class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

l = new LinkedList();
console.log(l);

module.exports = {
  LinkedList,
  ListNode,
};
