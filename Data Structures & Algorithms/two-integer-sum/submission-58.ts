class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for(let lPtr = 0; lPtr < nums.length; lPtr++) {
            for(let rPtr = 1; rPtr < nums.length; rPtr++) {
                if(nums[lPtr] + nums[rPtr] == target && lPtr !== rPtr) return [lPtr, rPtr];
            }
        }
    }
}
