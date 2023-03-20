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
