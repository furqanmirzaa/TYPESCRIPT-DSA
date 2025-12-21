function dailyTemperatures(temperatures: number[]): number[] {
    const stack: number[] = []
    const answer: number[] = []

    for(let i=temperatures.length-1; i>=0; i--){
        while(stack.length !== 0 && temperatures[stack[stack.length - 1]!]! <= temperatures[i]!){
            stack.pop()
        }
        if(stack.length === 0){
            answer[i] = 0
        }else {
            answer[i] = stack[stack.length-1]! - i
        }
        stack.push(i)
    }
    return answer
};