function solution(my_string) {
    var answer = 0;
    let arr = [];
    arr = my_string.match(/[0-9]/g);
    for(var i in arr){
        answer += Number(arr[i])
    }
    return answer;
}