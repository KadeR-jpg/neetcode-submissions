class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if(s.length < 2) return false;
        let stack = [];
        const mmap: Map<string, string> = new Map([["}", "{"], ["]", "["], [")", "("]]);
        const splits = s.split('');
        for(const c of splits) {
            if(!mmap.get(c)) {
                stack.push(c);
            } else {
                let t = stack.pop();
                if(mmap.get(c) !== t) return false;
            }

        }
        return stack.length === 0;
    }
}
