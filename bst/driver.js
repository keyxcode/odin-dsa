const treeModule = require("./tree");
const Tree = treeModule.Tree;
const TreeNode = treeModule.TreeNode;

// const myTree = new Tree([1, 2, 3, 4, 5, 6, 7]);
// myTree.prettyPrint();
// myTree.insert(8);
// myTree.prettyPrint();
// myTree.insert(9);
// myTree.prettyPrint();

const myTree = new Tree([1, 2, 3, 4, 5, 6, 7]);
myTree.prettyPrint();
myTree.insert(9);
myTree.prettyPrint();
myTree.remove(1);
myTree.prettyPrint();
myTree.remove(3);
myTree.prettyPrint();
console.log(myTree.isBalanced());
myTree.rebalance();
myTree.prettyPrint();
console.log(myTree.isBalanced());

// const myTree2 = new Tree([2, 3, 9]);
// myTree2.prettyPrint();
