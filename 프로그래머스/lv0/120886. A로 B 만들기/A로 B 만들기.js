function solution(before, after) {
    var answer = 0;
    for(var value of before.split("")){
        let count_before = before.split("").filter(e => e === value).length
        let count_after = after.split("").filter(e => e === value).length
        console.log(count_before, count_after)
        if(count_before === count_after){
            answer = 1;
        }else{
            answer = 0;
            break;
        }
    }
    return answer;
}