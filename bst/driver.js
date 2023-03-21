const treeModule = require("./tree");
const Tree = treeModule.Tree;
const TreeNode = treeModule.TreeNode;

const myTree = new Tree([1, 2, 3, 4, 5, 6, 7]);
myTree.prettyPrint();
myTree.insert(9);
myTree.prettyPrint();
console.log(myTree.levelOrderRecursive());
