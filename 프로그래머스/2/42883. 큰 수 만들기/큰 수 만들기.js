function solution(number, k) {
    const numList = [];
    let cnt = 0;
    
    for (const item of number) {
        while (cnt < k && numList[numList.length - 1] < item) {
            numList.pop();
            cnt++;
        }
        numList.push(item);
    }
    
    while (cnt < k) {
        numList.pop();
        cnt++;
    }
    
    return numList.join("");
}