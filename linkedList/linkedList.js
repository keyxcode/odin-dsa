class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(value) {}
  prepend(value) {
    const newNode = new ListNode(value, this.head);
    this.head = newNode;
    this.length++;
  }
  size() {
    return this.length;
  }
  head() {}
  tail() {}
  at(index) {}
  pop() {}
  contains(value) {}
  find(value) {}
  toString() {
    let listString = "";
    let listHead = this.head;

    while (listHead) {
      listString += `[${listHead.value}]->`;
      listHead = listHead.next;
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
