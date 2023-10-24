// N: 마을의 수, K: 배달 소요 시간 (넘으면 안 됨)
// road -> [마을1, 마을2, 소요 시간]
function solution(N, road, K) {
    
    // 마을 idx별 갈 수 있는 곳과 소요 시간
    const nodeInfo = Array(N+1).fill([]).map(()=>[]);
    
    road.map((info) => {
        nodeInfo[info[0]].push([info[1], info[2]])
        nodeInfo[info[1]].push([info[0], info[2]])
    })
    console.log(nodeInfo)
    
    const isVisited = Array(N+1).fill(false)
    const fromOne = Array(N+1).fill(500001)
    fromOne[1] = 0;
    
    // 출발지점
    let start = 1;
    
    while (start <= N) {
        nodeInfo[start].map((item) => {
            const point = item[0];
            const distance = item[1];
            
            // 작은 거리로 거리 갱신
            if (fromOne[start] + distance < fromOne[point]){
                fromOne[point] = fromOne[start] + distance
            }
        })
        // 탐색 완료
        isVisited[start] = true;
        
        // 방문하지 않은 곳 중 가장 가까운 곳으로 갱신
        let minDistance = 500001;
        fromOne.map((dis, idx) => {
            if ((isVisited[idx] === false) && dis < minDistance){
                minDistance = dis;
                start = idx;
            } 
        })
        if (minDistance === 500001) {
            break
        }
    }
    
    let answer = 0;
    
    fromOne.map((item) => {
        if (item <= K){
            answer +=1
        }
    })
    

    return answer;
}