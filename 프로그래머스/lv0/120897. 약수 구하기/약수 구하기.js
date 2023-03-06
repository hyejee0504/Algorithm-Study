function solution(n) {
    var answer = [];
    if(n === 1){
        answer.push(1);
    }
    for(var i=1; i<n; i++){
        if(n%i === 0){
            if(answer.includes(i)){
                break;
            }
            answer.push(i);
            if(i !== n/i){
                answer.push(n/i)
            }
        }
    }
    return answer.sort((a, b) => {return a-b});
}