/** diff: 현재 퍼즐 난이도 */
/** time_cur: 현재 퍼즐 소요 시간 */
/** time_prev: 이전 퍼즐 소요 시간 */
/** level: 숙련도 */
/** */
/** */

/** 게임 소요 시간 */
function playTime(games, level, limit) {
    let play_time = 0;
    let time_prev = 0;
    
    let game_idx = 0;
    while (game_idx < games.length ){
        // 플레이 시간이 이미 limit를 초과했다면 종료
        if (play_time > limit) return play_time
        const {diff, time} = {...games[game_idx]}
        if (diff <= level){
            play_time += time
        } else {
            // 플레이 불가능한 레벨일 때
            if (game_idx === 0){
                play_time += (time) * (diff - level) + time
            } else {
                // 이전 플레이가 있음
                time_prev = games[game_idx -1].time
                play_time += (time + time_prev) * (diff - level) + time
            }
        }
        game_idx ++;
    }
    return play_time
}

function solution(diffs, times, limit) {
    
    /** 게임정보: {퍼즐난이도 diff: number, 소요시간 time: number}[] */
    const games = []
    for (let i=0; i<diffs.length; i++){
        games.push({diff: diffs[i], time: times[i]})
    }
    
    // 순회할 레벨 설정: diffs의 가장 큰 레벨부터 순회 (가장 높은 레벨이면 limit안에 플레이 가능)
    let max_level = 0;
    for (diff of diffs){
        if (diff > max_level) max_level = diff
    }

    // max_level 부터 업다운으로 변경
    let low_level = 1;
    let high_level = max_level;
    
    let standard_level = high_level;
    
    while (low_level <= high_level){
        console.log(high_level, low_level, standard_level, playTime(games, standard_level, limit))
        if (playTime(games, standard_level, limit) <= limit){
            high_level = standard_level
            standard_level = Math.floor((low_level + high_level) / 2)
        } else {
            low_level = standard_level
            standard_level = Math.floor((low_level + high_level) / 2)
        }
        if (high_level - low_level <= 1) break;
    }
    console.log(high_level, low_level, standard_level)
    if (playTime(games, standard_level, limit) <= limit) return standard_level
    return high_level
    // 기존 정답: 너무 많이 돈다.
    // let answer = 1;
    // for (let i=max_level; i>0; i--){
    //     // level을 하나씩 맞춰가며 테스트
    //     if (playTime(games, i, limit) > limit){
    //         // 게임 플레이 시간이 제한 시간을 초과하는 첫번째 값의 이전값이 정답
    //         answer = i + 1
    //         return answer
    //     }
    // }
    // return answer;
}