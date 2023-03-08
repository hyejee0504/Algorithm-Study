function solution(n) {
    var answer = 0;
    for(var i=1; i<=n; i++){
        if(Math.floor(n/i) === i && n%i === 0){
            answer = (i+1)**2;
            break;
        }else{
            answer = -1;
            continue;
        }
    }
    return answer;
}