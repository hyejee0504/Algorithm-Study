function solution(numbers) {
    var answer = 0;
    let max = -Infinity;
    for(var i in numbers){
        for(var j in numbers){
            if(i === j){
                continue;
            }else{
                if(max <= numbers[i] * numbers[j]){
                    max = numbers[i] * numbers[j];
                } 
            }
        }
    }
    answer = max
    return answer;
}