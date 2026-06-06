class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const countmap: Map<number, number> = new Map();
        for(const n of nums) {
            let capt = countmap.get(n) ?? 0
            countmap.set(n, capt + 1);
        };
        console.log(countmap);
        const sorted = Array.from(countmap.entries()).sort((a, b) => b[1] - a[1]);
        const sortedmap = new Map(sorted);
        console.log(sortedmap)
        return sorted.slice(0, k).map(e => e[0]);
    }
}
