function solution(number) {
    let answer = 0;
    
    for (let i=0; i<number.length -2; i++){
        for (let j=1; j<number.length - 1; j++){
            for (let k=2; k<number.length; k++){
                if (i <j && j<k){
                    if (number[i] + number[j] + number[k] === 0){
                        console.log(i, j, k)
                        console.log(number[i], number[j], number[k])
                        answer++;
                    }
                }
            }
        }
    }
    return answer;
}