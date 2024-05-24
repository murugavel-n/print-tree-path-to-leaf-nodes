// add given left node into the given node
const addLeft = (left, node = {}) => { node.left = left; };
// add given right node into the given node
const addRight = (right, node = {}) => { node.right = right; };
// add given value into the given node and return it
const addValue = (value, node = {}) => { node.value = value; return node; };
// check if the given node has left or right node
const hasLeftOrRightNode = (node) => !!(node.left || node.right);
// check if the given node is the leaf node of the tree
const isLeafNode = (node) => !node.left && !node.right;
// initialize the paths to leaf node
const pathsToLeafNode = [];
// check if the given path is already visited while preparing the path to leaf node
const isVisitedPath = (path) => pathsToLeafNode.includes(path);
// iterates the paths to leaf node and prints the path in the browser/node console
const printPathsToLeafNode = () => {
    pathsToLeafNode.map((v) => console.log(v));
}
// prepare the path to leaf node of the given node and accumulate the path into pathsToLeafNode
const preparePathToLeafNode = (node, path = []) => {
    const { left, right, value } = node;
    path.push(value);
    const currentPath = path.join(',');
    if (!isVisitedPath(currentPath)) {
        if (isLeafNode(node)) {
            pathsToLeafNode.push(currentPath);
            preparePathToLeafNode(treeRoot);
        }
        if (hasLeftOrRightNode(node)) {
            if (left) {
                preparePathToLeafNode(left, path);
            }
            if (right) {
                preparePathToLeafNode(right, path);
            }
        }
    }
    path.pop();
};

// construct tree data using the node utils
const treeRoot = addValue(10);
const left1 = addValue(20);
const left11 = addValue(40);
const left12 = addValue(50);
const left121 = addValue(80);
const left122 = addValue(90);
const right1 = addValue(30);
const right11 = addValue(60);
const right12 = addValue(70);
addLeft(left121, left12);
addRight(left122, left12);
addLeft(left11, left1);
addRight(left12, left1);
addLeft(right11, right1);
addRight(right12, right1);
addLeft(left1, treeRoot);
addRight(right1, treeRoot);

// prepare path to leaf node for the given treeRoot
preparePathToLeafNode(treeRoot);
// print the paths to leaf node one by one
printPathsToLeafNode();
