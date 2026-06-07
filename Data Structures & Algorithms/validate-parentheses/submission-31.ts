class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack = [];
        const mmap = {
            '}': '{',
            ')': '(',
            ']': '['
        };
        for(const c of s.split('')) {
            if(!mmap[c]) {
                stack.push(c);
            } else if(mmap[c] !== stack.pop()) return false;
        }
        return stack.length === 0;
    }
}
