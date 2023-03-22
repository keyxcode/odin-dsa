const treeModule = require("./tree");
const Tree = treeModule.Tree;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min) + min);
}

function createArrayRandomNums() {
  const arrayRandomNums = [];
  // between
  const numEls = getRandomInt(1, 100);
  for (let i = 0; i < numEls; i++) {
    arrayRandomNums.push(getRandomInt(0, 100));
  }
  return arrayRandomNums;
}

// Create and traverse the tree
const myArray = createArrayRandomNums();
console.log(myArray);
const myTree = new Tree(myArray);
myTree.prettyPrint();
console.log(myTree.isBalanced());
console.log(`level order: ${myTree.levelOrderIterative()}`);
console.log(`inorder: ${myTree.inorderOptimized()}`);
console.log(`preorder: ${myTree.preorder()}`);
console.log(`postorder: ${myTree.postorder()}`);

// Unabalance the tree
myTree.insert(120);
myTree.prettyPrint();
myTree.insert(129);
myTree.prettyPrint();
myTree.insert(1239);
myTree.prettyPrint();
console.log(myTree.isBalanced());

// Rebalance the tree
myTree.rebalance();
myTree.prettyPrint();
console.log(myTree.isBalanced());
console.log(`level order: ${myTree.levelOrderIterative()}`);
console.log(`inorder: ${myTree.inorderOptimized()}`);
console.log(`preorder: ${myTree.preorder()}`);
console.log(`postorder: ${myTree.postorder()}`);
