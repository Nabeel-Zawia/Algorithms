<<<<<<< HEAD
function bubbleSortLogic(array){
    for(let i = 0 ; i < array.length-1 ; i++){
        for(let j = 0 ; j < array.length-1-i ; j++){
            if(array[j] > array[j+1]){
                // let temp = array[j]
                // array[j]= array[j+1]
                // array[j+1] = temp

                [array[j],array[j+1]] = [array[j+1],array[j]]
            }
        }
    }
    return array
}


let array = [8,3,2,7,6,5,4,1]
result = bubbleSortLogic(array)
=======
function bubbleSortLogic(array){
    for(let i = 0 ; i < array.length-1 ; i++){
        for(let j = 0 ; j < array.length-1-i ; j++){
            if(array[j] > array[j+1]){
                // let temp = array[j]
                // array[j]= array[j+1]
                // array[j+1] = temp

                [array[j],array[j+1]] = [array[j+1],array[j]]
            }
        }
    }
    return array
}


let array = [8,3,2,7,6,5,4,1]
result = bubbleSortLogic(array)
>>>>>>> b6d987ec743aa81fc755f9579a13878df764c539
console.log(result)