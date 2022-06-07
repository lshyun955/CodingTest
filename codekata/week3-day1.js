const complexNumberMultiply = (a, b) => {
  // 여기에 코드를 작성해주세요.
  const [temp1, temp2] = a.split("+");
  const [temp3, temp4] = b.split("+");

  //temp1 * temp4 + temp2 * temp3  ==> xi,   temp1*temp3 + temp2*temp4*-1 ==> num
  const first =
    Number(temp1) * Number(temp3) +
    Number(temp2.split("i")[0]) * Number(temp4.split("i")[0]) * -1;
  const second =
    Number(temp1) * Number(temp4.split("i")[0]) +
    Number(temp2.split("i")[0]) * Number(temp3);

  return `${first}+${second}i`;
};

console.log(complexNumberMultiply("1+-1i", "1+-1i"));
