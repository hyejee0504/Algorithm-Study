function solution(n) {
    var answer = 0;
    let arr = [];
    if(n === 1){
        arr.push(1);
    }
    for(var i=1; i <n; i++){
        if(n%i === 0){
            if(arr.includes(i)){
                break;
            }
            arr.push(i);
            if(i !== n/i){
                arr.push(n/i);
            }
        }
    }
    for(var value of arr){
        answer += value;
    }
    return answer;
}