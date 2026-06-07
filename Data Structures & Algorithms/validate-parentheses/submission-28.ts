class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack = [];
        const mmap: Map<string, string> = new Map([["}", "{"], ["]", "["], [")", "("]]);
        for(const c of s.split('')) {
            if(!mmap.get(c)) {
                stack.push(c);
            } else {
                if(mmap.get(c) !== stack.pop()) return false;
            }

        }
        return stack.length === 0;
    }
}
