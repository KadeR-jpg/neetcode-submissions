class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        print(len(set(nums)))
        print(len(nums))
        return len(set(nums)) < len(nums)
        