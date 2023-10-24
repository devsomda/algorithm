function isPrime(num){
    for (let i=parseInt(Math.sqrt(num)); i>=2; i--){
        // 나뉘어 떨어지는 수가 있다면 소수가 아님
        if (num % i === 0){
            return false;
            break;
        } 
    }
    return true;
}

function solution(nums) {
    
    // 소수 배열 미리 만들기
    const arr = Array(3000).fill(true);
    arr[1] = false;
    
    for (let i = 2; i <= 1500; i++){
        if (arr[i] !== false){
            for (let j= 2; i*j <= 3000; j++){
                arr[i * j] = false;   
            }  
        }
    }
    
    
    let answer = 0;
    
    for (let i=0; i< nums.length -2 ; i++ ){
        for (let j=i+1; j < nums.length - 1; j++){
            for (let k=j+1; k < nums.length; k++){
                const num = nums[i] + nums[j] + nums[k];
                if (arr[num]){
                    answer += 1
                }
                // if (isPrime(num)){
                //     answer+=1;
                // }
            }      
            
        }    
    }
    
    return answer;
}