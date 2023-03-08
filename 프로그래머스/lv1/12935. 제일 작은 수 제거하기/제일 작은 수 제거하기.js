function solution(arr) {
    var answer = [];
    arr.length === 1 ?
        answer.push(-1) :
        answer = arr.filter(v => Math.min(...arr) !== v)
    return answer;
}