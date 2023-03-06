function solution(num, k) {
    var answer = 0;
    let arr = num.toString().split("");
    for(var index in arr){
        if(arr[index] == k){
            answer = Number(index)+1;
            break;
        }else{
            answer = -1;
        }
    }
    return answer;
}