exports.picker = function(prices) {
    let maxProfit = 0;	
    let maxProfitIndices = [];	
    for (let i = 0; i < prices.length; i++){	
        for (let j = i + 1; j < prices.length; j++){	
            if ((prices[j] - prices[i]) > maxProfit){	
                maxProfit = prices[j] - prices[i];	
                maxProfitIndices = [i, j];	
            }	
        }	
    }	
    return maxProfitIndices;	
}
// console.log(exports.picker([17,3,6,9,15,8,6,1,10]));