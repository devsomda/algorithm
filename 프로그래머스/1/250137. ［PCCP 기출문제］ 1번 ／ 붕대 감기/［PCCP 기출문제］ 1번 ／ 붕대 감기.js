// 초당 bandage[1]만큼 회복
// 총 회복량은 bandage[1] * attacks[-1][0] + 추가 회복 성공량

// 추가 회복 성공량은 attack[0]의 간격을 구한 후
// 각 간격에 bandage[0]이 몇번 들어갈 수 있는지 확인해
// 해당 횟수 * bandage[2]

// 공격은 attack[1]의 총합

// 결과는 Health + 총 회복량 - 공격량인데
// 0이하면 -1 리턴

// function solution(bandage, health, attacks) {
    
//     // 연속 회복 카운트
//     let bandage_count = 0
    
//     // 현재 체력
//     let current_health = health
    
//     // 1초씩 순회
//     for (let i = 1; i <= attacks[attacks.length-1][0]; i++){
//         console.log(i, "초")
//         // 공격 로직
//         const attack = attacks.find((attack) => attack[0] === i)
//         console.log("attack:", attack)
//         if (attack){
//             current_health -= attack[1]
//             bandage_count = 0
//             if (current_health <= 0) return -1
//         }
//         // 회복 로직
//         else if (current_health < health){
//         console.log("recover:", current_health, bandage_count)
//             current_health += bandage[1]
//             bandage_count++;
//             if (bandage_count === bandage[0]){
//                 bandage_count = 0;
//                 current_health += bandage[2]
//             }
//         } else{
//             bandage_count++;
//             console.log("공격도 없고 회복도 못함")
//         }
//         console.log("결과 체력: ", current_health)
//     }
    
//     var answer = current_health;
//     return answer;
// }

function solution(bandage, health, attacks) {
    const [duration, sec_heal, bonus_heal] = bandage
    let curren_health = health
    let prev_attack = 0;
    
    for ([attack_time, damage] of attacks){
        
        // 공격시간의 차이가 시전시간보다 길다면 추가 회복 성공
        const time_diff = attack_time - prev_attack - 1
        const bonus_recover = (Math.floor(time_diff/duration)) * bonus_heal
        
        const total_heal = time_diff * sec_heal + bonus_recover
        curren_health += total_heal
        if (curren_health > health ) curren_health = health
        
        // 공격 반영
        curren_health -= damage
        if (curren_health <= 0) return -1
        
        prev_attack = attack_time
    }
    
    var answer = curren_health;
    return answer;
}