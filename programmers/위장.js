function solution(clothes) {
  let answer = 1;
  const hashClothes = {};
  clothes = clothes.map(([cloth, type]) => [type, cloth]);
  clothes.forEach(([type, _]) => {
    hashClothes[type] = (hashClothes[type] || 0) + 1;
  });
  Object.values(hashClothes)
    .map((v) => v + 1)
    .forEach((v) => {
      answer *= v;
    });
  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
