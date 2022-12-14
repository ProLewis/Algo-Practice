// class Node 
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// class SLL - Singly Linked List
class SLL {
    constructor() {
        this.head = null;
    }

    insertAtBack(data) {
        var newNode = new ListNode(data);
        if (this.head) {
            var runner = this.head;
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newNode;
        } else {
            this.head = newNode;
        }
    }


    /**
     * Retrieves the data of the second to last node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the second to last node or null if there is no
     *    second to last node.
     */
    secondToLast() {
        if (this.head) {
            let runner1 = this.head;
            let runner2;
            while (runner1.next) {
                runner2 = runner1;
                runner1 = runner1.next;
                if (runner1.next === null) {
                    return runner2.data;
                }
            }
        }
    }

    kthToLast(k) { // 3
      

    }

    /**
     * Removes the node that has the matching given val as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The value to compare to the node's data to find the
     *    node to be removed.
     * @returns {boolean} Indicates if a node was removed or not.
     */
    removeData(data) {
        //HINT: The list is constructed by connecting nodes with pointers
        // Play with the pointers so that you can remove that node from the list. 
        // base: middle node
        // level2: node at the end
        // level3: node at the head
        // level4: multiple anywhere
      if(this.head.data = data){
        this.head = this.head.next;
      } else{
        let runner1=this.head;
      let runner2;
      while(runner1.data !== data){
        runner2 = runner1;
        runner1 = runner1.next
      }
      runner2.next = runner1.next;
      }    
    }

    // EXTRA
    /**
     * Inserts a new node before a node that has the given value as its data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} newVal The value to use for the new node that is being added.
     * @param {any} targetVal The value to use to find the node that the newVal
     *    should be inserted in front of.
     * @returns {boolean} To indicate whether the node was pre-pended or not.
     */
    prepend(newVal, targetVal) {
        //Insert a new node before a node that has the given target value
    }


    //given helper method to use
    printList() {
        if (!this.head) {
            console.log("Empty list");
            return
        }
        var runner = this.head;
        while (runner) {
            console.log(runner.data);
            runner = runner.next;
        }
    }
}

let list2 = new SLL();
list2.insertAtBack(7);
list2.insertAtBack(8);
list2.insertAtBack(4);
list2.insertAtBack(6);

// console.log(list2.secondToLast());
list2.removeData(7);
list2.printList();