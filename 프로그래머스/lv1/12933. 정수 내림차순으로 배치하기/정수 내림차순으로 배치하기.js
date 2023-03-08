function solution(n) {
    return parseInt(n.toString().split("").sort((a,b) => {return a-b}).reverse().join(""))
//     n.toString().split().sort((a,b) => {return a-b}).map(v => parseInt(v));
}
