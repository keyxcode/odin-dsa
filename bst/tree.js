class Tree {
  constructor(myArray) {
    const myArrayCopy = myArray.slice();
    myArrayCopy.sort((a, b) => {
      return a - b;
    });

    const rootNode = this.buildTree(myArrayCopy);
    return rootNode;
  }

  buildTree(myArray) {
    const myArrayCopy = myArray.slice();
    const myArrayLength = myArrayCopy.length;

    if (myArrayLength === 0) return null;
    if (myArrayLength === 1) {
      return new TreeNode(myArrayCopy[0], null, null);
    }

    const middleIndex = Math.floor(myArrayLength / 2);
    const middleElement = myArrayCopy[middleIndex];

    const leftHalf = myArrayCopy.slice(0, middleIndex);
    const rightHalf = myArrayCopy.slice(middleIndex + 1, myArrayLength);

    return new TreeNode(
      middleElement,
      this.buildTree(leftHalf),
      this.buildTree(rightHalf)
    );
  }
}

class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

module.exports = {
  Tree,
  TreeNode,
};
