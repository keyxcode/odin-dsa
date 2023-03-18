class Tree {
  constructor(myArray) {
    const myArrayCopy = myArray.slice();
    myArrayCopy.sort((a, b) => {
      return a - b;
    });
    this.root = this.buildTree(myArrayCopy);
  }
  buildTree(myArray) {
    return myArray;
  }
}

class TreeNode {
  constructor(value, leftChild, rightChild) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

module.exports = {
  Tree,
  TreeNode,
};
