class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        l_ptr = 0
        while l_ptr < len(nums) - 1:
            for i in range(l_ptr + 1, len(nums)):
                if nums[l_ptr] + nums[i] == target:
                    print(l_ptr, i)
                    print(nums[i], nums[l_ptr])
                    return [l_ptr, i]
            l_ptr += 1
                

        # for i in range(l_ptr, len(nums)):
        #     for j in range(r_ptr, len(nums)):
        #         # print([l_ptr, r_ptr])
        #         if nums[l_ptr] + nums[r_ptr] == target:
        #             return [l_ptr, r_ptr]
        #         r_ptr += 1
        #         print([l_ptr, r_ptr])
        #     l_ptr += 1