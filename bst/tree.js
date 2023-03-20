class Tree {
  constructor(myArray) {
    if (myArray.length === 0) return (this.root = null);

    const myArrayCopy = myArray.slice();
    myArrayCopy.sort((a, b) => {
      return a - b;
    });

    this.root = this.buildTree(myArrayCopy);
  }

  buildTree(myArray) {
    const myArrayUnique = [...new Set(myArray)];
    const myArrayLength = myArrayUnique.length;

    if (myArrayLength === 0) return null;
    if (myArrayLength === 1) {
      return new TreeNode(myArrayUnique[0], null, null);
    }

    const middleIndex = Math.floor(myArrayLength / 2);
    const middleElement = myArrayUnique[middleIndex];

    const leftHalf = myArrayUnique.slice(0, middleIndex);
    const rightHalf = myArrayUnique.slice(middleIndex + 1, myArrayLength);

    return new TreeNode(
      middleElement,
      this.buildTree(leftHalf),
      this.buildTree(rightHalf)
    );
  }

  // insertIterative(value) {
  //   if (this.root.left === "undefined" && this.root.right === "undefined") {
  //     this.root.value = value;
  //   }

  //   let currentNode = this.root;
  //   let currentDirection;

  //   while (currentNode) {
  //     currentDirection = value < currentNode.value ? "left" : "right";

  //     if (currentNode[currentDirection] === null) {
  //       currentNode[currentDirection] = new TreeNode(value);
  //       return;
  //     }
  //     currentNode = currentNode[currentDirection];
  //   }
  // }

  insert(value, currentNode = this.root) {
    // Inserts a new element to a leaf of the tree and returns the new root
    if (this.root === null) return (this.root = new TreeNode(value));

    if (currentNode === null) {
      return new TreeNode(value);
    }
    if (value === currentNode.value) {
      return currentNode;
    }
    if (value < currentNode.value) {
      currentNode.left = this.insert(value, currentNode.left);
    } else {
      currentNode.right = this.insert(value, currentNode.right);
    }
    return currentNode;
  }

  remove(value) {}

  find(value, currentNode = this.root) {
    if (value === currentNode.value) return currentNode;
  }
}

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

module.exports = {
  Tree,
  TreeNode,
};
