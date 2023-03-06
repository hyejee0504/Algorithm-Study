function solution(my_string) {
    var answer = '';
    let arr = [];
    for(var value of my_string){
        if(value === value.toUpperCase()){
            arr.push(value.toLowerCase());
        }else{
            arr.push(value);
        }
    }
    arr.sort();
    for(var value of arr){
        answer += value;
    }
    return answer;
}