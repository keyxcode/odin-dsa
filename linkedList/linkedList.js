class LinkedList {
  constructor() {
    this.HEAD = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new ListNode(value, null);
    this.length++;

    if (this.HEAD === null) {
      this.HEAD = newNode;
      return;
    }

    let current = this.HEAD;
    while (current.next) {
      let next = current.next;
      current = next;
    }
    current.next = newNode;
  }

  prepend(value) {
    const newNode = new ListNode(value, this.HEAD);
    this.HEAD = newNode;
    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    return this.HEAD;
  }

  tail() {
    let current = this.HEAD;
    let listTail = current;

    while (current) {
      listTail = current;
      current = current.next;
    }

    return listTail;
  }

  at(index) {
    if (index < 0 || index > this.length - 1) return;

    let current = this.HEAD;
    let currentId = 0;
    while (current) {
      if (currentId === index) {
        return current;
      }
      current = current.next;
      currentId++;
    }
  }

  pop() {
    if (!this.HEAD) return;

    const indexLastNode = this.length - 1;
    const poppedNode = this.at(indexLastNode);

    const indexBeforeLastNode = indexLastNode - 1;
    this.at(indexBeforeLastNode).next = null;
    this.length--;

    return poppedNode;
  }

  contains(value) {
    let current = this.HEAD;

    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }

    return false;
  }

  find(value) {
    let current = this.HEAD;
    let index = 0;

    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }

    return null;
  }

  toString() {
    let listString = "";
    let current = this.HEAD;

    while (current) {
      listString += `[${current.value}]->`;
      current = current.next;
    }
    return `${listString}null`;
  }

  insertAt(value, index) {}

  removeAt(index) {}
}

class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = {
  LinkedList,
  ListNode,
};
