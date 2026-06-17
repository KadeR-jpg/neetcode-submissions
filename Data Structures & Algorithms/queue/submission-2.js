class ListNode {
    /**
     * @param {number | null} val
     */
    constructor (val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class MyDeque {
    constructor() {
        this.head = new ListNode(-1);
        this.tail = new ListNode(-1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.head.next === this.tail
    }

    /**
     * @param {number} value
     */
    append(value) {
        let newNode = new ListNode(value);
        newNode.prev = this.tail.prev;
        newNode.next = this.tail;
        this.tail.prev.next = newNode;
        this.tail.prev = newNode;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        let newNode = new ListNode(value);
        newNode.next = this.head.next;
        newNode.prev = this.head;
        this.head.next.prev = newNode;
        this.head.next = newNode;
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.isEmpty()) return -1;
        let targetNode = this.tail.prev;
        let value = targetNode.val;
        let prevNode = targetNode.prev;
        prevNode.next = this.tail;
        this.tail.prev = prevNode;
        return value
    }

    /**
     * @return {number}
     */
    popleft() {
        if(this.isEmpty()) return -1;
        let targetNode = this.head.next;
        let value = targetNode.val;
        let nextNode = targetNode.next;
        this.head.next = nextNode;
        nextNode.prev = this.head;
        return value;
    }
}
