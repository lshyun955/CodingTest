function solution(genres, plays) {
  const hashTable = new Map();
  const tempArr = genres.map((genre, idx) => {
    return [genre, plays[idx]];
  });

  for (let i = 0; i < tempArr.length; i++) {
    const data = hashTable.get(tempArr[i][0]) || { total: 0, songs: [] };
    hashTable.set(tempArr[i][0], {
      total: data.total + tempArr[i][1],
      songs: [...data.songs, { play: tempArr[i][1], index: i }]
        .sort((a, b) => b.play - a.play)
        .slice(0, 2),
    });
  }

  return [...hashTable.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song) => song.index);
}

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);
