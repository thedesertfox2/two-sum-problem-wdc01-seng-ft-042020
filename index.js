


function twoNums(sum, a){
    let arr = []
    for (let i = 0; i < a.length; i++){
        for (let j = 1; j < a.length; j++){
            if (a[i] + a[j] === sum){
                arr.push(a[i], a[j])
            } else {
              continue
            }
          j++ 
        } 
      i++
    }
    return arr
}