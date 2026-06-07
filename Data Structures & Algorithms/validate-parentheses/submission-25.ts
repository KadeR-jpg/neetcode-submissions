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
                console.log(`${c} not in mmap, pushing to the stack`);
                stack.push(c);
            } else {
                console.log(`${c} is in mmap, compare to top of stack`);
                console.log(`${stack} is currently`);
                let t = stack.pop();
                console.log(`${stack} is currently`);
                console.log(`c: ${c}, t: ${t}`)
                if(mmap.get(c) !== t) return false;
            }

        }
        console.log(stack);
        return stack.length === 0;
    }
}
