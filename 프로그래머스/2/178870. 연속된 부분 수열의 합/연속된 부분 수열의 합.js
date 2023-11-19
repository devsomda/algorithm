function solution(sequence, k) {
    let answers = [];
    
    let maxIdx = sequence.length;
    let start = 0;
    let end = 0;
    let sum = sequence[0];
    
    while (start < maxIdx && end < maxIdx) {
        if (sum === k) {
            answers.push([start, end]);
            sum -= sequence[start];
            start++;
        } else if (sum < k) {
            end++;
            sum += sequence[end];
        } else {
            sum -= sequence[start];
            start++;
        }
    }
    
    let answer = [];
    let minRange = maxIdx;
    
    answers.forEach((ans) => {
        if (ans[1] - ans[0] < minRange) {
            answer = ans;
            minRange = ans[1] - ans[0];
        }
    });
    
    return answer;
}
