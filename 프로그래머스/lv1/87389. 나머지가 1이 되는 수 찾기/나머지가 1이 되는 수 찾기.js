function solution(n) {
    var answer = 0;
    for(var i=2; i<=n-1; i++){
        if(Math.floor(n%i) === 1){
            answer = i;
            break;
        }else{
            continue;
        }
    }
    return answer;
}