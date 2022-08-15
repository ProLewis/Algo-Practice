class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class LinkedListQueue {
    /* 
      In order to maintain an O(1) enqueue time complexity like .push with an array
      We add a tail to our linked list so we can go directly to the last node
    */
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        let node = new QueueNode(item);
        this.size++;
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        return this.size;
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        if (this.size == 1) {
            this.size--;
            let data = this.head.data;
            this.head = null;
            this.tail = null;
            return data;
        }
        this.size--;
        let data = this.head.data;
        this.head = this.head.next;
        return data;
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.head.data;
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        if (!this.head) return true;
        return false;
    }

    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    length() {
        return this.size;
    }

    print() {
        let runner = this.head;
        while (runner) {
            console.log(runner.data)
            runner = runner.next;
        }
    }
}

let testLLQ = new LinkedListQueue;
let testLLQ2 = new LinkedListQueue;

testLLQ.enqueue(5);
testLLQ.enqueue(6);
testLLQ.enqueue(8);
testLLQ.enqueue(2);
testLLQ.enqueue(1);

testLLQ.print();

testLLQ.dequeue();
console.log("Now dequeuing");
testLLQ.print();

console.log("Is it empty?");
console.log(testLLQ2.isEmpty());

console.log("Here is the size:");
console.log(testLLQ.length());