function solution(array, commands) {
    var answer = [];
    
    for(var value of commands){
        let sortarr = [];
        if(value[0] === value[1]){
            let index = value[0]-1;
            sortarr.push(array[index])
            answer.push(sortarr[value[2]-1])
        }else{
            sortarr = array.slice(value[0]-1, value[1]).sort((a,b) => {return a-b});
            console.log(sortarr)
            answer.push(sortarr[value[2]-1])
        }
        
    }
    return answer;
}