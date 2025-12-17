function trap(height: number[]): number {
    
    let water: number = 0
    let maxL: number = 0
    let maxR: number = 0
    let l: number = 0
    let r: number = height.length -1

    while (l<r){
        if(height[l]! < height[r]!){
            maxL = Math.max(maxL, height[l]!)
            water += maxL - height[l]!
            l++
        }
        else {
            maxR = Math.max(maxR, height[r]!)
            water += maxR - height[r]!
            r--
        }
    }
    return water
}