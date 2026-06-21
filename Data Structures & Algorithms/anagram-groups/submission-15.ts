class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let groups = new Map<string, string[]>();
        for(const s of strs) {
            let k = s.split('').sort().join('');
            if(!groups.get(k)) groups.set(k, []);
            groups.get(k).push(s);
        }
        return [...groups.values()]
    }
}
