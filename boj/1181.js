// 단어 정렬
/**
 * 알파벳 소문자로 이루어진 N개의 단어
 * 길이가 짧은 것부터 || 길이가 같으면 사전 순
 * 최대 배열 개수는 20000개
 * 중복 제거
 * 최대 문자 길이는 50자
 */
const fs = require("fs");

const [_, ...arrs] = fs.readFileSync('./test.txt').toString().trim().split("\n");

const nonDupArrs = [...new Set(arrs)];

nonDupArrs.sort((a,b) => a.length - b.length || a.localeCompare(b));

console.log(nonDupArrs.join('\n'));