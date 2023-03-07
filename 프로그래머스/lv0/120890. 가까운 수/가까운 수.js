function solution(array, n) {
    var answer = 0;
    let num = Infinity;
    for(var value of array){
        if(num >= Math.abs(Number(value)-n)){
            if(num === Math.abs(Number(value)-n) && answer < value){
                num = Math.abs(Number(value)-n)
            }else{
                 num = Math.abs(Number(value)-n)
            answer = value;
                
            }
           
        }
    }
    return answer;
}