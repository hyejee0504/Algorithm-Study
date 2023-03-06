function solution(n)
{
    var answer = 0;
    let str = n.toString().split("");
    
    for(var value of str){
        answer += Number(value)
    }

    return answer;
}