function twoSum(numbers: number[], target: number): number[] {
  const map = new Map();
  let startingPtr = 0;
  while (startingPtr < numbers.length) {
    let partner = target - numbers[startingPtr]!;
    if (map.has(partner)) {
      return [map.get(partner), startingPtr + 1];
    }
    map.set(numbers[startingPtr], startingPtr + 1);
    startingPtr++;
  }
  return [];
}
