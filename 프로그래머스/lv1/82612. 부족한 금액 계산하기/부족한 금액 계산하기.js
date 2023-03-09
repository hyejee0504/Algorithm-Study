function solution(price, money, count) {
    var answer = -1;
    let sum_price = 0;
    for(var i=1; i<=count; i++){
        sum_price += (i * price);
    }

    return sum_price-money > 0 ? sum_price-money : 0;
}