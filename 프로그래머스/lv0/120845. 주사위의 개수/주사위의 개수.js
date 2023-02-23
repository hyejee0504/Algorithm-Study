function solution(box, n) {
    var answer = 1;
    let sum = [];
    for(var value of box){
        answer *= Math.floor(value/n);
    }
    for(var value of sum){
        
    }
    return answer;
}