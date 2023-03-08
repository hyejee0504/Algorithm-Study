function solution(absolutes, signs) {
    var answer = 0;
    for(var index in signs){
        if(signs[index] === true){
            answer += absolutes[index]
        }else{
            answer -= absolutes[index]
        }
    }
    return answer;
}