const fs = require("fs");

const seqList = fs.readFileSync('./test.txt').toString().trim().split(' ');
const answeTempSet = new Set();
function recursionFunc(listArr, init) {
    if (listArr.join(' ') === '1 2 3 4 5') {
        answeTempSet.add('1 2 3 4 5');
        return;
    } else if (!init) {
        answeTempSet.add(listArr.join(' '));
    }

    for (let i = 0; i < listArr.length; i++) {
        let sorted = false;
        if (listArr[i] > listArr[i + 1]) {
            let temp = listArr[i];
            listArr[i] = listArr[i + 1];
            listArr[i + 1] = temp; 

            sorted = true;
        }

        if (sorted) {
            answeTempSet.add(listArr.join(' '));
        }

        sorted = false;
        
    }
    recursionFunc(listArr);
}

recursionFunc(seqList, true);
console.log([...answeTempSet].join('\n'));


