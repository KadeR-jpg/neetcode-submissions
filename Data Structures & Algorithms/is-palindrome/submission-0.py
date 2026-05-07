class Solution:
    def isPalindrome(self, s: str) -> bool:
        splits = [c.lower() for c in s if c.isascii() and c.isalnum()]
        r_ptr = 0
        l_ptr = len(splits) - 1
        while l_ptr > r_ptr:
            if splits[r_ptr] != splits[l_ptr]:
                return False
            r_ptr += 1
            l_ptr -= 1
        return True