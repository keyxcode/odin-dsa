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

const myArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
//const myArray = [1, 2, 3];
const myTree = new Tree(myArray);

// console.log(myTree);
// console.log(myTree.left);
// console.log(myTree.right);
prettyPrint(myTree);
