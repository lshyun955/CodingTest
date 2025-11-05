function solution(people, limit) {
    // 오름차순 정렬   
    people.sort((a, b) => a - b);
    let answer = 0;
    let weight = 0;
    let cnt = 0;
    
    // 투포인터 풀이
    let i = 0, j = people.length - 1;
    
    while (i <= j) {
        if (people[i] + people[j] > limit) {
            j--;
        } else {
            i++;
            j--;
        }
        
        answer++;
    }

    return answer;
}