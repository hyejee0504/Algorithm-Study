function solution(order) {
    var answer = 0;
    let arr = order.toString().split("");
    for(var value of arr){
        if(value === '3' || value === '6' || value === '9'){
            answer += 1
        }
    }
    return answer;
    
}