function solution(i, j, k) {
    var answer = 0;
    var arr = Array(j-i+1).fill().map((value, index) => {return index+i});
    answer = arr.join("").split("").filter(value => value == k).length
    console.log(arr.join("").split(""))
    return answer;
}