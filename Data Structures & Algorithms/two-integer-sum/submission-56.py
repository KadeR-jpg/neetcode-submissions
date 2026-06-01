class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for l in range(0, len(nums)-1):
            for r in range(l+1, len(nums)):
                if nums[l]+nums[r] == target:
                    return [l, r]