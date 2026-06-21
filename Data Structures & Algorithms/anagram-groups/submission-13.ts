class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let s: [string, string[]][] = strs.map(m => [m.split('').sort().join(''), []])
        let groups = new Map<string, string[]>(s);
        for(const s of strs) {
            let k = s.split('').sort().join('');
            groups.get(k).push(s);
            console.log(groups.get(k))

        }
        return [...groups.values()]
    }
}
