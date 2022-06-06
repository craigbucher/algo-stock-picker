def picker(prices):
    max_profit = 0;	
    max_profit_indices = []
    for i in range(len(prices)):
        for j in range(i + 1, len(prices)):
            if (prices[j] - prices[i]) > max_profit:
                max_profit = (prices[j] - prices[i])
                max_profit_indices = [i, j]
    return(max_profit_indices)

#print(picker([17,3,6,9,15,8,6,1,10]))