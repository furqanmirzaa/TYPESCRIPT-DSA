function isValidSudoku(board: string[][]): boolean {
  const rows = Array.from({ length: 9 }, () => new Set<string>());
  const columns = Array.from({ length: 9 }, () => new Set<string>());
  const boxes = Array.from({ length: 9 }, () => new Set<string>());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let val = board[i]![j]!;
      if (val === ".") continue;
      const boxIndex = Math.floor(j / 3) + Math.floor(i / 3) * 3;
      if (
        rows[i]!.has(val) ||
        columns[j]!.has(val) ||
        boxes[boxIndex]!.has(val)
      ) {
        return false;
      }
      rows[i]!.add(val);
      columns[j]!.add(val);
      boxes[boxIndex]!.add(val);
    }
  }
  return true;
}
