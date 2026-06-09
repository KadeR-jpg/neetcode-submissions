/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let stack = []
        for(let node = head; node != null; node = node.next) {
            stack.push(node.val)
        }
        if(stack.length === 0) return head;
        let cur: ListNode = {
            val: stack.pop(),
            next: null
        };
        let nHead = cur;
        while(stack.length !== 0) {
            cur.next = {
                val: stack.pop(),
                next: null,
            };
            cur = cur.next;
        }
        return nHead;
    }
}
