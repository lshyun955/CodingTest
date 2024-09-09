const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n").map(Number).filter(num => num < 100);

// 중복제거하고 오름차순 정렬 후 연산
const answerArray = [...new Set(input)].sort((a,b) => a-b);


// 중복제거 후 7명이되면 바로 콘솔 출력
if (answerArray.length === 7) {
    answerArray.forEach(v => { console.log(v); });
} else {
    getAnswerArray(answerArray);
}

function getAnswerArray(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const tempArr = [];

    if (arr.length === 9) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (sum - (arr[i] + arr[j]) === 100) {
                    tempArr.push(arr[i], arr[j]);
                    break;  // 이미 찾았으므로 더 이상 반복할 필요 없음
                }
            }
            if (tempArr.length > 0) break;  // 이미 찾았으면 바깥 for문도 종료
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (sum - arr[i] === 100) {
                tempArr.push(arr[i]);
                break;  // 이미 찾았으므로 더 이상 반복할 필요 없음
            }
        }
    }

    arr.forEach(v => {
        if (!tempArr.includes(v)) {
            console.log(v);
        }
    });
}
