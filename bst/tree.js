class Tree {
  constructor(myArray) {
    this.root = this.buildTree(myArray);
  }
  buildTree(myArray) {
    return;
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
