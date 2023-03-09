function solution(s) {
    var answer = false;
    if(s.length === 4 || s.length === 6){
        if((s.match(/[a-z]/gi)) !== null){
           answer = false
         }else{
            answer = true;
        }
    }
    return answer;
}