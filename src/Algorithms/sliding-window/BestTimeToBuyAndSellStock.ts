function maxProfit(prices: number[]): number {
    let profit = 0
    let min = prices[0]
    for(let p of prices){
        min = Math.min(min, p)
        profit = Math.max(p - min, profit)
    }
    return profit
};