function solution(N) {
    // Implement your solution here
    let answer = [];
    let checkOne = 0;
    let checkZero = 0;

    const binaryNum = BigInt(N).toString(2);

    if (!binaryNum.includes('0')) {
        return 0;
    }

    for (let i = 0; i < binaryNum.length; i++) {
        if (binaryNum[i] === '1') {
            if (checkOne === 1 && checkZero === 0) continue;

            checkOne++;
        } else {
            checkZero++;
        }

        if (checkOne === 2 && checkZero > 0) {
                checkOne--;
                answer.push(checkZero);

                checkZero = 0;
            } 
    }

    return answer.length ? Math.max(...answer) : 0;
}