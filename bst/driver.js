const treeModule = require("./tree");
const Tree = treeModule.Tree;
const TreeNode = treeModule.TreeNode;

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

// const myArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// const myArray = [0, 1, 2, 3, 5, 9];
// const myTree = new Tree([1, 5, 3, 9, 0, 2, 3]);
// const myTree = new Tree([1, 2, 3]);
// const myTree = new Tree(myArray);
// myTree.insert(4);
// myTree.insert(113);
// myTree.insert(1931);
// myTree.insert(710);
// myTree.insert(7219);
// myTree.insert(11210);
// console.log(myTree);
// console.log(myTree.find(6));
// const myTree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// prettyPrint(myTree.root);
// myTree.remove(5);
// prettyPrint(myTree.root);
// myTree.remove(6);
// prettyPrint(myTree.root);
// myTree.remove(7);
// prettyPrint(myTree.root);
// myTree.remove(8);
// prettyPrint(myTree.root);
// myTree.remove(9);
// prettyPrint(myTree.root);

const myTree = new Tree([1, 2, 3, 4, 5, 6]);
prettyPrint(myTree.root);
myTree.insert(7);
prettyPrint(myTree.root);
myTree.insert(9);
prettyPrint(myTree.root);
console.log(myTree.inorder());

// const myEmptyTree = new Tree([]);
// console.log(myEmptyTree);
// console.log(myEmptyTree.left === null, myEmptyTree.right === null);

// console.log(myTree);
// console.log(myTree.left);
// console.log(myTree.right);
