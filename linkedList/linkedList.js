class LinkedList {
  constructor() {
    this.head = new ListNode();
    this.length = 0;
  }
  append(value) {}
  prepend(value) {
    const newNode = new ListNode(value, this.head);
    this.head = newNode;
    this.length++;
  }
  size() {}
  head() {}
  tail() {}
  at(index) {}
  pop() {}
  contains(value) {}
  find(value) {}
  toString() {}
}

class ListNode {
  constructor(value = null, next = null) {
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
