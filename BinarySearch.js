class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        var newNode = new Node(data);

        // if root is null, this becomes the root.
        if (this.root === null) {
            this.root = newNode;
        } else {
            // find the correct position in the  
            // tree and add the node 
            this.insertNode(this.root, newNode);
        }
    }

    // Method to insert a node in a tree 
    // it moves over the tree to find the location 
    // to insert a node with a given data  
    insertNode(node, newNode) {
        // if the data is less than the node 
        // data move left of the tree  
        if (newNode.data < node.data) {
            // if left is null, insert node here.
            if (node.left === null) {
                node.left = newNode;
            } else {
                // if left is not null recurr until  
                // null is found.
                this.insertNode(node.left, newNode);
            }
        }
        // if the data is more than the node 
        // data move right of the tree 
        else {
            // if right is null insert node here.
            if (node.right === null) {
                node.right = newNode;
            } else {
                // if right is not null recurr until  
                // null is found 
                this.insertNode(node.right, newNode);
            }
        }
    }

    remove(data) {
        // root is re-initialized with 
        // root of a modified tree. 
        this.root = this.removeNode(this.root, data);
    }

    // Method to remove node with a given data 
    // it recurrs over the tree to find the data and removes it
    removeNode(node, key) {
        // if the root is null then tree is empty. 
        if (node === null) {
            return null;
        }
        // if data to be deleted is less than  
        // roots data then move to left subtree
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        // if data to be deleted is greater than  
        // roots data then move to right subtree 
        else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        // if data is similar to the root's data  
        // then delete this node.
        else {
            // deleteing node with no children.
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            // deleting node with one child.
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            // Deleting node with two children minumum node of the right subtree 
            // is stored in aux
            var aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    // Performs inorder traversal of a tree from a given node.
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    // Performs preorder traversal of a tree from a given node.    
    preorder(node) {
        if (node != null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    // Performs postorder traversal of a tree from a given node.
    postorder(node) {
        if (node != null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    //  finds the minimum node in tree.
    // searching starts from given node.
    findMinNode(node) {
        // if left of a node is null 
        // then it must be minimum node 
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }

    // returns root of the tree 
    getRootNode() {
        return this.root;
    }

    // search for a node with given data 
    search(node, data) {
        // if tree is empty, retur null.
        if (node == null) {
            return null;
        }
        // if data is less than node's data, go left.
        else if (data < node.left) {
            return this.search(node.left, data);
        }
        // if data is more than node's data, go right.
        else if (data > node.right) {
            return this.search(node.right, data);
        }
        // if data is equal to node's data, return node.
        else {
            return node;
        }
    }
}

function btreeDemo() {
    var btree = new BinarySearchTree();

    console.log("Creating btree...");
    // Inserting nodes to the BinarySearchTree 
    btree.insert(15);
    btree.insert(25);
    btree.insert(10);
    btree.insert(7);
    btree.insert(22);
    btree.insert(17);
    btree.insert(13);
    btree.insert(5);
    btree.insert(9);
    btree.insert(27);

    // Result:
    //          15 
    //         /  \ 
    //        10   25 
    //       / \   / \ 
    //      7  13 22  27 
    //     / \    / 
    //    5   9  17 

    console.log("Print btree inorder...");
    var root = btree.getRootNode();

    // prints 5 7 9 10 13 15 17 22 25 27 
    btree.inorder(root);

    console.log("Print btree preorder...");
    btree.preorder(root);
 
    console.log("Print btree postorder...");
    btree.postorder(root);

    // Removing node with no children  
    console.log("Removing 5 from tree...");
    btree.remove(5);

    // Result:
    //          15 
    //         /  \ 
    //        10   25 
    //       / \   / \ 
    //      7  13 22  27 
    //       \    / 
    //        9  17  

    var root = btree.getRootNode();

    console.log("Print btree inorder...");
    // prints 7 9 10 13 15 17 22 25 27 
    btree.inorder(root);

    // Removing node with one child. 
    console.log("Removing 7 from tree...");
    btree.remove(7);

    // Result:
    //          15 
    //         /  \ 
    //        10   25 
    //       / \   / \ 
    //      9  13 22  27 
    //            / 
    //           17 

    var root = btree.getRootNode();

    console.log("Print btree inorder...");
    // prints 9 10 13 15 17 22 25 27 
    btree.inorder(root);

    // Removing node with two children  
    console.log("Removing 15 (the root) from tree...");
    btree.remove(15);

    // Result:
    //          17 
    //         /  \ 
    //        10   25 
    //       / \   / \ 
    //      9  13 22  27 

    var root = btree.getRootNode();

    // prints 9 10 13 17 22 25 27 
    console.log("inorder traversal");
    btree.inorder(root);

    // prints 9 13 10 22 27 25 17
    console.log("postorder traversal");
    btree.postorder(root);
    
    // prints 17 10 9 13 25 22 27
    console.log("preorder traversal");
    btree.preorder(root);
}
