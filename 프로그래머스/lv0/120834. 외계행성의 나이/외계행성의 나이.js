function solution(age) {
    var answer = '';
    let numarr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let arr = age.toString().split("");
    for(var value of arr){
        answer += numarr[Number(value)]
    }
    return answer;
}