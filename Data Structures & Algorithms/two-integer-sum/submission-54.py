class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        rptr = 1 
        for l in range(0, len(nums)-1):
            for r in range(rptr, len(nums)):
                if nums[l]+nums[r] == target:
                    return [l, r]
            rptr += 1