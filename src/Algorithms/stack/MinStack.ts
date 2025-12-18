class MinStack {
    mainStack: number[]
    minStack: number[]
    constructor(){
        this.mainStack = []
        this.minStack = []
    }
    push(val: number):void{
        this.mainStack.push(val)
        this.minStack.push(Math.min(val, this.minStack[this.minStack.length -1] ?? val))
    }
    pop(): void{
        this.minStack.pop()
        this.mainStack.pop()
    }
    top(): number{
        return this.mainStack[this.mainStack.length - 1]!
    }
    getMin(): number{
        return this.minStack[this.minStack.length - 1]!
    }
}