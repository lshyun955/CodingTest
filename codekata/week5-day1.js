const selectionSort = (nums) => {
  // 아래 코드를 작성해주세요.
  let min;
  let cnt = 0;
  while (cnt >= nums.length) {
    min = nums[cnt];
    for (let i = j + 1; i < nums.length; i++) {
      if (min > nums[i]) {
        min = nums[i];
      }
    }
    console.log(min);
    cnt++;
  }
};

selectionSort([2, 7, 5, 3]);
