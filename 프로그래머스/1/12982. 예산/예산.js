function solution(d, budget) {
    let answer = 0;
    let money = 0;
    
    d.sort((a,b) => a-b)
    
    d.map((dep, idx) => {
        // 예산을 초과하지 않을 때만
        if (money + dep <= budget){
            money += dep;
            answer += 1;
        }
    })
    console.log(d)
    
    return answer;
}