function solution(s){
    
    // 홀수개라면 짝지을 수 없음 || )로 시작하면 닫을 수 없음
    const mid_idx = s.length / 2
    if (parseInt(mid_idx) !== mid_idx || s[0] === ")") return false
    
    const stack = [];
    
    for (let i=0; i<s.length; i++){
        
        if (s[i] === "("){
            stack.push(s[i])
        } else {
            if (stack.length < 1) return false
            stack.pop()
        }
    
    }
    
    return stack.length === 0;
}