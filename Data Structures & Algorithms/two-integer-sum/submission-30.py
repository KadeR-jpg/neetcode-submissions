class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        l_ptr = 0
        while l_ptr < len(nums) - 1:
            for i in range(l_ptr + 1, len(nums)):
                if nums[l_ptr] + nums[i] == target:
                    return [l_ptr, i]
            l_ptr += 1