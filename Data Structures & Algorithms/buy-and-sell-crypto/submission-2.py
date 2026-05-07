class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        MAX = 0
        for idx, x in enumerate(prices):
            check = [y - x for y in prices[idx::]]
            if len(check) > 1 and max(check) > MAX:
                MAX = max(check)
        return MAX     