function longestConsecutive(nums: number[]): number {
  let maxLength: number = 0;
  let currentLength: number = 1;
  let set: Set<number> = new Set();
  for (let num of nums) {
    set.add(num);
  }
  for (let num of set) {
    let tempPointer: number = num;
    if (set.has(num - 1)) {
      continue;
    }
    while (set.has(tempPointer + 1)) {
      currentLength++;
      tempPointer++;
    }
    maxLength = Math.max(maxLength, currentLength);
    currentLength = 1;
  }

  return maxLength;
}
