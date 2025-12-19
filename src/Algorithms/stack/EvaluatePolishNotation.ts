function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (let t of tokens) {
        if ("/,*,+,-".includes(t)) {
            const secondOperand = stack.pop();
            const firstOperand = stack.pop();
            let result;
            if (t === "/") {
                result = Math.trunc(firstOperand! / secondOperand!);
            } else if (t === "*") {
                result = firstOperand! * secondOperand!;
            } else if (t === "+") {
                result = firstOperand! + secondOperand!;
            } else {
                result = firstOperand! - secondOperand!;
            }
            stack.push(result);
        }
        else {
            stack.push(Number(t));
        }
    }

    return stack.pop()!;
}
