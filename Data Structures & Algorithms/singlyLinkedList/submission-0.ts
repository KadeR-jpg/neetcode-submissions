class ListNode {
    public val;
    public next;
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    private head: ListNode | null;
    private tail: ListNode | null;
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let count = 0
        for(let node = this.head; node != null; node = node.next, count++) {
            if(count == index) return node.val
        }
        return -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const newNode = new ListNode(val);
        newNode.next = this.head;
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        if (index < 0 || !this.head) return false;
        if (index === 0) {
            if (this.head === this.tail) this.tail = null;
            this.head = this.head.next;
            return true;
        }

        let count = 0
        let prevNode = this.head;
        for(let node = this.head; node != null; node = node.next, count++) {
            if(count == index) {
                prevNode.next = node.next;
                if (node === this.tail) this.tail = prevNode;
                return true
            } else {
                prevNode = node;
            }
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        let vals = [];
        for(let node = this.head; node != null; node = node.next) {
            vals.push(node.val);
        }
        return vals;
    }
}
