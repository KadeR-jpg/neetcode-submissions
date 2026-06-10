class DLLNode {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class MyLinkedList {
    #size;
    constructor() {
        this.#size = 0;
        this.head = new DLLNode(-1);
        this.tail = new DLLNode(-1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        let count = 0;
        for (let node = this.head; node.next !== null; node = node.next, count++) {
            if (count === index - 1) return node.prev
        };
        return null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        const node = this.getNodeAtIndex(index);
        return node ? node.val : -1;
    }

    /**
     * @param {number} index
     * @return {DLLNode}
     */
    getNodeAtIndex(index) {
        if (index < 0 || index >= this.#size) return null;
        let count = 0;
        for (let node = this.head.next; node !== this.tail; node = node.next, count++) {
            if (count === index) return node;
        };
        return null;
    }

    /**
     * @param {DLLNode} nNode
     * @param {DLLNode} oNode  
     * @return void
     */
    insertBefore(nNode, oNode) {
        nNode.next = oNode;
        nNode.prev = oNode.prev;
        oNode.prev.next = nNode;
        oNode.prev = nNode;
    };

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        this.insertBefore(new DLLNode(val), this.head.next);
        this.#size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        this.insertBefore(new DLLNode(val), this.tail);
        this.#size++;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index < 0 || index > this.#size) return;
        if (index === this.#size) {
            this.addAtTail(val);
            return;
        }
        this.insertBefore(new DLLNode(val), this.getNodeAtIndex(index));
        this.#size++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        const node = this.getNodeAtIndex(index);
        if(!node) return;
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.#size--;
    }
}
