const treeModule = require("./tree.js");
const Tree = treeModule.Tree;
const TreeNode = treeModule.TreeNode;

describe("#buildTree", () => {
  test("builds tree from a short unsorted array", () => {
    const myTree = new Tree([1, 5, 3]);

    expect(myTree.root).toEqual({
      value: 3,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 5,
        left: null,
        right: null,
      },
    });
  });

  test("builds tree from a medium-sized unsorted array", () => {
    const myTree = new Tree([1, 5, 3, 9, 0, 2, 3]);

    expect(myTree.root).toEqual({
      value: 3,
      left: {
        value: 1,
        left: {
          value: 0,
          left: null,
          right: null,
        },
        right: {
          value: 2,
          left: null,
          right: null,
        },
      },
      right: {
        value: 9,
        left: {
          value: 5,
          left: null,
          right: null,
        },
        right: null,
      },
    });
  });

  test("builds tree form an empty array", () => {
    const myTree = new Tree([]);

    expect(myTree.root).toBe(null);
  });

  test("builds tree form an array with 1 element", () => {
    const myTree = new Tree([1]);

    expect(myTree.root).toEqual({
      value: 1,
      left: null,
      right: null,
    });
  });
});

describe("#insertNode", () => {
  test("inserts node at a leaf of a small tree", () => {
    const myTree = new Tree([1, 3, 5]);
    myTree.insert(4);

    expect(myTree.root).toEqual({
      value: 3,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 5,
        left: {
          value: 4,
          left: null,
          right: null,
        },
        right: null,
      },
    });
  });

  test("inserts node at a leaf of a medium-sized tree", () => {
    const myTree = new Tree([1, 5, 3, 9, 0, 2, 3]);
    myTree.insert(4);

    expect(myTree.root).toEqual({
      value: 3,
      left: {
        value: 1,
        left: {
          value: 0,
          left: null,
          right: null,
        },
        right: {
          value: 2,
          left: null,
          right: null,
        },
      },
      right: {
        value: 9,
        left: {
          value: 5,
          left: {
            value: 4,
            left: null,
            right: null,
          },
          right: null,
        },
        right: null,
      },
    });
  });
});

describe("#find", () => {
  test("returns the node with the value looking for where it's the root", () => {
    const myTree = new Tree([1, 3, 5]);

    expect(myTree.find(3)).toEqual({
      value: 3,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 5,
        left: null,
        right: null,
      },
    });
  });

  test("returns the node with the value looking for where it's not the root", () => {
    const myTree = new Tree([1, 2, 3, 4, 5]);

    expect(myTree.find(2)).toEqual({
      value: 2,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: null,
    });
  });

  test("returns false if the node looking for is not found", () => {
    const myTree = new Tree([1, 2, 3, 4, 5]);

    expect(myTree.find(6)).toBe(false);
  });
});

describe("#remove", () => {
  test("remove a node that is a leaf", () => {
    const myTree = new Tree([1, 2, 3, 4, 5]);
    myTree.remove(1);

    expect(myTree.root).toEqual({
      value: 3,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 5,
        left: {
          value: 4,
          left: null,
          right: null,
        },
        right: null,
      },
    });
  });
  test("remove a node that has one child", () => {
    const myTree = new Tree([1, 2, 3, 4, 5]);
    myTree.remove(2);

    expect(myTree.root).toEqual({
      value: 3,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 5,
        left: {
          value: 4,
          left: null,
          right: null,
        },
        right: null,
      },
    });
  });
  test("remove a node that has two children", () => {
    const myTree = new Tree([1, 2, 3, 4, 5, 6]);
    myTree.remove(4);

    expect(myTree.root).toEqual({
      value: 5,
      left: {
        value: 2,
        left: {
          value: 1,
          left: null,
          right: null,
        },
        right: {
          value: 3,
          left: null,
          right: null,
        },
      },
      right: {
        value: 6,
        left: null,
        right: null,
      },
    });
  });
});

describe("#levelOrder", () => {
  test("returns an array of values from the tree when no callback is given (iterative)", () => {
    const myTree = new Tree([1, 2, 3, 4, 5]);
    expect(myTree.levelOrderIterative()).toEqual([3, 2, 5, 1, 4]);
  });
  test("returns an array of values from the tree when no callback is given (recursive)", () => {
    const myTree = new Tree([1, 2, 3, 4, 5]);
    expect(myTree.levelOrderRecursive()).toEqual([3, 2, 5, 1, 4]);
  });
});

describe("#inorder", () => {
  test("returns an array of values from the tree when no callback is given (iterative)", () => {
    const myTree = new Tree([1, 2, 3, 4, 5, 6, 7]);
    expect(myTree.inorder()).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test("returns an array of values from the tree when no callback is given (iterative)", () => {
    const myTree = new Tree([1, 2, 3, 4, 5, 6, 7]);
    expect(myTree.inorderOptimized()).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});

describe("#preorder", () => {
  test("returns an array of values from the tree when no callback is given (iterative)", () => {
    const myTree = new Tree([1, 2, 3, 4, 5, 6, 7]);
    expect(myTree.preorder()).toEqual([4, 2, 1, 3, 6, 5, 7]);
  });
});

describe("#postorder", () => {
  test("returns an array of values from the tree when no callback is given (iterative)", () => {
    const myTree = new Tree([1, 2, 3, 4, 5, 6, 7]);
    expect(myTree.postorder()).toEqual([1, 3, 2, 5, 7, 6, 4]);
  });
});

describe("#height", () => {
  test("returns the length of the longest path from this node to a leaf", () => {
    const myTree = new Tree([1, 2, 3, 4, 5, 6, 7, 8]);
    const node_6 = myTree.find(6);
    const node_7 = myTree.find(7);
    const node_3 = myTree.find(3);
    const node_5 = myTree.find(5);
    expect(myTree.height(node_6)).toBe(0);
    expect(myTree.height(node_7)).toBe(1);
    expect(myTree.height(node_3)).toBe(2);
    expect(myTree.height(node_5)).toBe(3);
  });
});

describe("#depth", () => {
  test("returns the length of the path from this node to the root", () => {
    const myTree = new Tree([1, 2, 3, 4, 5, 6, 7, 8]);
    const node_6 = myTree.find(6);
    const node_7 = myTree.find(7);
    const node_3 = myTree.find(3);
    const node_5 = myTree.find(5);
    expect(myTree.depth(node_6)).toBe(2);
    expect(myTree.depth(node_7)).toBe(1);
    expect(myTree.depth(node_3)).toBe(1);
    expect(myTree.depth(node_5)).toBe(0);
  });
});

describe("#isBalanced", () => {
  test("returns true if a tree is balanced", () => {
    const myTree = new Tree([1, 2, 3, 4, 5, 6, 7]);
    expect(myTree.isBalanced()).toBe(true);
    const myTree2 = new Tree([1, 2, 3, 4, 5, 6]);
    expect(myTree2.isBalanced()).toBe(true);
  });
  test("returns false if a tree is unbalanced", () => {
    const myTree = new Tree([1, 2, 3, 4, 5, 6, 7]);
    myTree.insert(8);
    myTree.insert(9);
    expect(myTree.isBalanced()).toBe(false);
  });
});

describe("#rebalance", () => {
  test("rebalances an unbalanced tree", () => {
    const myTree = new Tree([1, 2, 3]);
    myTree.insert(9);
    myTree.remove(1);
    expect(myTree.isBalanced()).toBe(false);
    myTree.rebalance();
    expect(myTree.isBalanced()).toBe(true);
  });
});
