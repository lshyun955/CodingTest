const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const opTime = parseInt(input[1]);
const hour = parseInt(input[0].split(" ")[0]);
const min = parseInt(input[0].split(" ")[1]);
const opTimePerHour = parseInt((opTime + min) / 60);
const toTalopTimeAndMin = opTime + min;
// 테스트 케이스 18 0 820 => 31 40 출력되는 것 발견!
if (opTime + min >= 60) {
  if (hour !== 23) {
    if (hour + opTimePerHour >= 24) {
      console.log(
        `${hour + opTimePerHour - 24} ${toTalopTimeAndMin - opTimePerHour * 60}`
      );
    } else {
      console.log(
        `${hour + opTimePerHour} ${toTalopTimeAndMin - opTimePerHour * 60}`
      );
    }
  } else {
    console.log(
      `${hour + opTimePerHour - 24} ${toTalopTimeAndMin - opTimePerHour * 60}`
    );
  }
} else {
  console.log(`${hour} ${toTalopTimeAndMin}`);
}
