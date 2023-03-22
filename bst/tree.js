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

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  insertIterative(value) {
    if (this.root.left === "undefined" && this.root.right === "undefined") {
      this.root.value = value;
    }

    let currentNode = this.root;
    let currentDirection;

    while (currentNode) {
      currentDirection = value < currentNode.value ? "left" : "right";

      if (currentNode[currentDirection] === null) {
        currentNode[currentDirection] = new TreeNode(value);
        return;
      }
      currentNode = currentNode[currentDirection];
    }
  }

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

  remove(value, currentNode = this.root) {
    // if the value to be removed can't be found
    if (currentNode === null) return currentNode;

    // base case
    if (value === currentNode.value) {
      if (currentNode.left === null && currentNode.right === null) {
        // the node to be removed is a leaf
        currentNode = null;
      } else if (currentNode.left === null || currentNode.right === null) {
        // the node to be removed has 1 child
        // the root could end up here due to tree manipulation => unbalanced tree
        if (currentNode === this.root) {
          this.root = currentNode.left ? currentNode.left : currentNode.right;
        }
        currentNode = currentNode.left ? currentNode.left : currentNode.right;
      } else {
        // the node to be removed has 2 children
        const nextLargestValue = this.#findSmallestChild(currentNode.right);
        this.remove(nextLargestValue);
        currentNode.value = nextLargestValue;
      }
    } else if (value < currentNode.value) {
      currentNode.left = this.remove(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.remove(value, currentNode.right);
    }

    return currentNode;
  }

  find(value, currentNode = this.root) {
    if (currentNode === null) return false;
    if (value === currentNode.value) return currentNode;
    else if (value < currentNode.value)
      return this.find(value, currentNode.left);
    else if (value > currentNode.value)
      return this.find(value, currentNode.right);
  }

  #findSmallestChild(childNode) {
    if (childNode.left === null) return childNode.value;
    return this.#findSmallestChild(childNode.left);
  }

  levelOrderIterative(callback) {
    const myQueue = [this.root];
    const visitedNodes = [];

    while (myQueue.length) {
      const discoveredNode = myQueue.shift();
      if (callback) {
        callback(discoveredNode);
      } else {
        visitedNodes.push(discoveredNode.value);
      }

      if (discoveredNode.left) myQueue.push(discoveredNode.left);
      if (discoveredNode.right) myQueue.push(discoveredNode.right);
    }

    if (!callback) return visitedNodes;
  }

  levelOrderRecursive(callback) {
    const levelOrderNodes = this.#childrenLR([this.root]);
    if (callback) {
      levelOrderNodes.forEach((node) => callback(node));
    } else return levelOrderNodes.map((node) => node.value);
  }

  #childrenLR(currentLevelNodes) {
    const nextLevelNodes = [];

    currentLevelNodes.forEach((node) => {
      if (node.left) nextLevelNodes.push(node.left);
      if (node.right) nextLevelNodes.push(node.right);
    });

    if (nextLevelNodes.length)
      return currentLevelNodes.concat(this.#childrenLR(nextLevelNodes));
    else return currentLevelNodes;
  }

  inorder(callback) {
    // left-root-right
    const inorderListNodes = this.getInorderNodesFrom(this.root);
    if (callback) {
      inorderListNodes.forEach((node) => {
        callback(node);
      });
      return;
    }
    const inorderListValues = inorderListNodes.map((node) => node.value);
    return inorderListValues;
  }

  getInorderNodesFrom(currentNode) {
    if (currentNode.left === null && currentNode.right === null) {
      return [currentNode];
    }

    if (currentNode.left && currentNode.right) {
      return [
        ...this.getInorderNodesFrom(currentNode.left),
        currentNode,
        ...this.getInorderNodesFrom(currentNode.right),
      ];
    } else if (currentNode.left) {
      return [...this.getInorderNodesFrom(currentNode.left), currentNode];
    } else {
      return [currentNode, ...this.getInorderNodesFrom(currentNode.right)];
    }
  }

  inorderOptimized(callback, currentNode = this.root, nodeList = []) {
    // left-root-right

    if (currentNode === null) return;

    this.inorderOptimized(callback, currentNode.left, nodeList);
    callback ? callback(currentNode) : nodeList.push(currentNode.value);
    this.inorderOptimized(callback, currentNode.right, nodeList);

    if (!callback) return nodeList;
  }

  preorder(callback, currentNode = this.root, nodeList = []) {
    // root-left-right
    if (currentNode === null) return;

    callback ? callback(currentNode) : nodeList.push(currentNode.value);
    this.preorder(callback, currentNode.left, nodeList);
    this.preorder(callback, currentNode.right, nodeList);

    if (!callback) return nodeList;
  }

  postorder(callback, currentNode = this.root, nodeList = []) {
    // left-right-root
    if (currentNode === null) return;

    this.postorder(callback, currentNode.left, nodeList);
    this.postorder(callback, currentNode.right, nodeList);
    callback ? callback(currentNode) : nodeList.push(currentNode.value);

    if (!callback) return nodeList;
  }

  height(node, measure = 0) {
    if (node === null) return 0;
    if (node.left === null && node.right === null) {
      return measure;
    }
    measure += 1;
    return Math.max(
      this.height(node.left, measure),
      this.height(node.right, measure)
    );
  }

  depth(node, currentNode = this.root) {
    if (node.value === currentNode.value) return 0;

    if (node.value < currentNode.value) {
      return this.depth(node, currentNode.left) + 1;
    } else return this.depth(node, currentNode.right) + 1;
  }

  isBalanced() {}

  rebalance() {}
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
