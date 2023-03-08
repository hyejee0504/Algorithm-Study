function solution(n, lost, reserve) {
    var answer = 0;
    let lost_arr = [];
    let reserve_arr = [];
    let arr = [];
    let count = 0;
    for(var value of lost){
        if(reserve.includes(value)){
            continue;
        }else{
            lost_arr.push(value)
        }
    }
    for(var value of reserve){
        if(lost.includes(value)){
            continue;
        }else{
            reserve_arr.push(value)
        }
    }
    
    for(var value of lost_arr.sort()){
            if(value === 1){
            arr.push(2)
            }else if(value === n){
                arr.push(n-1)
            }else{
                if(arr.includes(value-1)){
                    arr.push(value+1)
                }else if(arr.includes(value+1)){
                    arr.push(value-1)
                }else{
                    arr.push(value-1)
                    arr.push(value+1)   
                } 
            }
        }
    for(let value of reserve_arr){
        if(lost_arr.includes(value)){
            count += 1;
        }
        else if(arr.includes(value)){
            count += 1;
        }else{
            continue;
        }
    }
    
    if(count >= lost_arr.length){
        answer = n
    }else if(count > 0 && count < lost_arr.length){
        answer = n-lost_arr.length+count
    }else{
        answer = n-lost_arr.length
    }
    return answer;
}