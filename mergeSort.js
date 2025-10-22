function mergeSort(arr){

    if(arr.length <=1){
        return arr
    }

    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)
    
    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    return merge(sortedLeft,sortedRight)
}

function merge(left,right){
    let result = []
    while (left.length > 0 && right.length > 0){
        if(left[0] <= right[0] ){
            result.push(left.shift())
        }
        else{
            result.push(right.shift())
        }
    }

    result.push(...left)
    result.push(...right)
    return result
}

let array = [4,3,2,1,6,7]
result = mergeSort(array)
console.log(result)
