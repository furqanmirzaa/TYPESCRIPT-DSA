function maxArea(height: number[]): number {
    let maxArea: number = 0
    let l: number = 0
    let r: number = height.length -1

    while (l<r){
        let lVal = height[l]!
        let rVal = height[r]!
        maxArea = Math.max(maxArea, (r-l) * (Math.min(lVal, rVal)))
        if(lVal<rVal) l++
        else r--
    }

    return maxArea
};