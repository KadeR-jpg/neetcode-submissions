class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        //buy low sell high
        let max = 0;
        let minBuy = prices[0];
        for(let sell of prices) {
            max = Math.max(max, sell - minBuy);
            minBuy = Math.min(minBuy, sell);
        }
        return max;
    }
}
