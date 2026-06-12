class HistNode {
    /**
     * @constructor
     * @param {string} val
     */
    constructor(val) {
        this.prev = null;
        this.val = val;
        this.next = null;
    }
}

class BrowserHistory {
    #count
    #currentNode
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.cur = new HistNode(homepage);
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        const node = new HistNode(url);
        node.prev = this.cur;
        this.cur.next = node;
        this.cur = node;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        while(this.cur.prev !== null && steps > 0) {
            this.cur = this.cur.prev
            steps -= 1
        }
        return this.cur.val
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        while(this.cur.next !== null && steps > 0) {
            this.cur = this.cur.next
            steps -= 1
        }
        return this.cur.val
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
