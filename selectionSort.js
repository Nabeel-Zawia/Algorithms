function selectionSort(arr){

    for(let i = 0 ; i < arr.length-1 ; i++){
        let min = i
        let temp = 0
        for(let j = i+1 ; j < arr.length ; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
        }

        return arr
    
}

let array = [5,3,1,2,6,4]
console.log(selectionSort(array))