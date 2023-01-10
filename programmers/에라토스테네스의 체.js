function get_primes(num) {
  const prime = [false, false, ...Array(num - 1).fill(true)];

  for (let i = 2; i * i <= num; i++) {
    if (prime[i]) {
      for (let j = i * 2; j <= num; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime
    .map((num, idx) => [num, idx])
    .filter(([num, _]) => num)
    .map(([_, num]) => num);
}

console.log(get_primes(54));
