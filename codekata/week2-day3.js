// 여는 괄호를 만나면 check[여는괄호]의 value를 임시 배열에 넣자.
// 임시 배열의 마지막 값과 만나는 닫는 괄호의 값이 다르면 return false
// ex) ([])[{()}] => temp = [")","]"
// ex) [({})] => temp = ["]",")","}"]
function isValid(s) {
  const check = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const temp = [];

  if (s.length % 2 === 1) {
    return false;
  } else {
    for (let i = 0; i < s.length; i++) {
      let tempChar = s[i];
      if ("([{".includes(tempChar)) {
        temp.push(check[tempChar]);
      } else {
        let popData = temp.pop();
        if (popData !== tempChar) {
          return false;
        }
      }
    }

    return true;
  }
}

console.log(isValid("([])[{()}]"));

// 첫 번째 방법 실패!

// function isValid(s) {
//   const check = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };
//   // ()[]{} ([]{}) ([{}])
//   // 여기에 코드를 입력해주세요.
//   // () => true, ()[]{} => true, (] => false,
//   //             012345
//   // ([]) => true, ([{}]) => true
//   //               012345
//   // s[첫 인덱스] === s[사이의 다른 괄호 갯수 + 1]를 이용하자(실패)

//   //
//   if (s.length % 2 === 1) {
//     return false;
//   } else {
//     for (let i = 0; i < s.length - 1; i += 2) {
//       if (check[s[i]] !== s[i + 1] && check[s[i]] !== s[s.length - i - 1]) {
//         return false;
//       } else {
//         return true;
//       }
//     }
//   }
// }
