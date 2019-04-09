// var start = null;

// function add(obj, where) {
//     var length = linkedList.length;
//     position = (position > length) ? length : position;
//     if(start == null) {
//         start = obj;
//         obj.next = null;
//     }
//     else {
//         var found = false;
//         while(!found) {
//             start
//         }
//     }
// }

class LinkedList {
    // ctor #1.
    // constructor(value) {
    //     this.head = {
    //         value,
    //         next: null
    //     };

    //     this.length = 1;
    // }

    constructor(value) {
        this.head = null;
        this.length = 0;
        this.addToHead(value);
    }

    addToHead(value) {
        const newNode = { value };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }

    addAfter(value, afterWhatVal) {
        const newNode = { value };
        console.log("trying to add value " + value + " after " + afterWhatVal);

        // If there is nothing in the list or If it is to be added after the first value in the list
        if (this.length == 0 || this.head.value === afterWhatVal) {
            this.addToHead(value);

            return this;
        }

        // If anywhere else.
        let previousNode = this.head;
        let thisNode = previousNode.next;
        while (thisNode) {
            console.log("\tchecking in " + thisNode.value);

            if (thisNode.value === afterWhatVal) {
                console.log("adding after " + afterWhatVal);
                previousNode.next = newNode;
                newNode.next = thisNode;
                this.length++;

                return this;
            } else {
                previousNode = thisNode;
                thisNode = thisNode.next;
            }
        }

        console.log("value " + afterWhatVal + " not found in list.");
        return this;
    }

    addToEnd(value) {
        const newNode = { value };
        console.log("trying to add value " + value + " to the end");

        if(this.length == 0) {
            return this.addToHead(value);
        }

        let previousNode = this.head;    
        let thisNode = previousNode.next;
        while(thisNode) {
            console.log("\tAt " + thisNode.value);
            previousNode = thisNode;
            thisNode = thisNode.next;
        }

        previousNode.next = newNode;
        return this;
    }

    removeFromHead() {
        if (this.length == 0) {
            return undefined;
        }

        const value = this.head.value;
        this.head = this.head.next;
        this.length--;

        return value;
    }

    // Remove from anywhere.
    remove(val) {
        console.log("Trying to delete value '" + val + "'");

        if (this.length == 0) {
            return undefined;
        }

        // If it is the first value in the list.
        if (this.head.value === val) {
            this.removeFromHead();
            return this;
        }

        // If it is not the first value in the list.
        let previousNode = this.head;
        let thisNode = previousNode.next;
        while (thisNode) {
            // if found, break.
            if (thisNode.value === val) {
                break;
            }

            // else, go to the next node in the list.
            previousNode = thisNode;
            thisNode = thisNode.next;
        }

        if (thisNode == null) {
            return undefined;       // Not found in list.
        }

        // Found it! Remove it.
        console.log("Got it! Deleting from list");
        previousNode.next = thisNode.next;
        this.length--;

        return this;
    }

    find(val) {
        let thisNode = this.head;
        while (thisNode) {
            if (thisNode.value === val) {
                return thisNode;        // found it!
            }

            thisNode = thisNode.next;   // Go to the next node.
        }

        return thisNode;
    }

    printList() {
        console.log("Printing List...");
        if (this.length == 0) {
            console.log("Nothing in List");
        } else {
            let thisNode = this.head;
            while (thisNode) {
                console.log(thisNode.value);
                thisNode = thisNode.next;
            };
        }
    }
}

// To be used with ctor #1.
//console.log(new LinkedList("Hello"));

// Note that returning this allows us to chain addToHead calls. List looks like this:
// head → 'third' → 'second' → 'first' → ∅
const list = new LinkedList("first")
    .addToHead("second")
    .addToHead("third");

list.printList();

list.addToHead("fourth")
    .addToHead("fifth");
list.printList();

list.removeFromHead();
list.printList();

var searchNode = list.find("third");
if (searchNode != null) {
    console.log("Found: " + searchNode.value);
} else {
    console.log("value 'third' not found in List.")
}

var searchNode = list.find("fifth");
if (searchNode != null) {
    console.log("Found: " + searchNode.value);
} else {
    console.log("value 'fifth' not found in List.")
}

// Add anywhere in the list.
// Add after the first value.
list.addAfter("tenth", "fourth");
list.printList();

// Add in between.
list.addAfter("3A", "third");
list.printList();

// Add after last.
list.addAfter("ZERO", "first");
list.printList();

// Add to end.
list.addToEnd("negative");
list.printList();

// // To delete from anywhere in the list.
// list.addToHead("fifth")
//     .addToHead("sixth")
//     .addToHead("seventh");

list.remove("third");   // from the middle.
list.printList();

list.remove("tenth");   // the last one.
list.printList();

list.remove("negative"); // the first one.
list.printList();
