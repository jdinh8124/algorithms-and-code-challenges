function sumOfCubes(nums) {
  if (nums.length === 0) {
    return 0;
  }
  const cubedNums = nums.map(item => {
    return item * item * item
  });
  const addedNums = cubedNums.reduce((increment, number) => {
    return increment + number
  });
  return addedNums
}
