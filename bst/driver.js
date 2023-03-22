const treeModule = require("./tree");
const Tree = treeModule.Tree;
const TreeNode = treeModule.TreeNode;

const myTree = new Tree([1, 2, 3, 4, 5, 6]);
myTree.prettyPrint();
const node_4 = myTree.find(4);
console.log(myTree.height(node_4));
