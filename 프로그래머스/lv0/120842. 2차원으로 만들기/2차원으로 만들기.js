function solution(num_list, n) {
    var answer = [];
    num = 0;
    while(num < num_list.length){
        answer.push(num_list.slice(num, num+n))
        num += n

    }
    console.log(answer)
    return answer;
}