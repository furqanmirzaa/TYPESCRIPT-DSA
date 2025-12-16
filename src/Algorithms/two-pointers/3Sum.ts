function threeSum(nums: number[]): number[][] {
    const result: number[][] = []
    nums.sort((a,b) => a-b)

    for(let i=0; i<nums.length; i++){
        if(nums[i]! > 0){
            return result
        }
        if(i>0 && nums[i] === nums[i-1]){
            continue
        }
        let left = i+1
        let right = nums.length-1

        while (left < right){
            let leftVal = nums[left]
            let rightVal = nums[right]
            let val = nums[i]
            let sum = leftVal! + rightVal! + val!
            if(sum === 0){
                result.push([val!, rightVal!, leftVal!])
                left++
                right--

                while (left< right && nums[left] === nums[left-1]){
                    left ++
                }
                while (left< right && nums[right] === nums[right+1]){
                    right --
                }
            }
            else if(sum > 0){
                right--
            }
            else {
                left ++
            }
        }
    }


    return result

};