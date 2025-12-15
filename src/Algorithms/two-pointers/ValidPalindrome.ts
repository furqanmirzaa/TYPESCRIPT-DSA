function isPalindrome(s: string): boolean {
  let lPtr: number = 0;
  let rPtr: number = s.length - 1;

  while (lPtr < rPtr) {
    if (!/^[a-zA-Z0-9]/.test(s[lPtr]!)) {
      lPtr++;
      continue;
    }
    if (!/^[a-zA-Z0-9]/.test(s[rPtr]!)) {
      rPtr--;
      continue;
    }
    if (s[lPtr]?.toLowerCase() !== s[rPtr]?.toLowerCase()) {
      return false;
    }
    lPtr++;
    rPtr--;
  }

  return true;
}
