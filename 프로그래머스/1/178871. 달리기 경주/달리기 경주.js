// function solution(players, callings) {
    
//     let answer = players;
    
//     callings.forEach((name)=>{
//         const newIdx = answer.indexOf(name) - 1;
//         const deleteIdx = answer.indexOf(name) + 1;
//         // splice 성능 개선 필요
//         answer.splice(newIdx, 0, name);
//         answer.splice(deleteIdx, 1);
//     })
    
//     return answer;
// }

function solution(players, callings){
    
    const rankInfo = {}
    players.forEach((name, idx) => {
        rankInfo[name] = idx
    })
    
    
    callings.forEach((name) => {
        const prevRank = parseInt(rankInfo[name]);
        let tempName = players[prevRank-1];
        // players도 갱신
        players[prevRank - 1] = name;
        players[prevRank] = tempName;
        rankInfo[name]--;
        rankInfo[tempName]++;

    })
    
    const answer = Object.keys(rankInfo).sort((a, b) => rankInfo[a] - rankInfo[b]);
    return answer;

}