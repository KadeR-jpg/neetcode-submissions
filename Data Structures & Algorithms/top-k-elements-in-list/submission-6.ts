class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const countmap: Map<number, number> = new Map();
        let freqarr = [];
        for(let i = 0; i < nums.length + 1; i++) {
            freqarr[i] = []
        };
        for(const n of nums) {
            let capt = countmap.get(n) ?? 0;
            countmap.set(n, capt + 1);
        }
        for(const [n, c] of countmap.entries()) {
            freqarr[c].push(n)
        };
        let result = [];
        for(let i = freqarr.length - 1; i >= 0; i--) {
            for(let n of freqarr[i]) {
                result.push(n)
                if(result.length === k) return result
            }
        }
    }
}
