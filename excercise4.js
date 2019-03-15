function cariModus(arr){
    var compare =[]
    for (i=0; i<arr.length; i++){
        var flag = false
        for (j = 0 ; j<compare.length; j++){
            if (compare[j] === arr[i]){
                flag = true
            }
        }if (!flag){
            compare.push(arr[i])
        }
    }
    var pengulangan = 1
    var out = 0 
    for (i=0; i<compare.length; i++){
        var counter = 0
        for (j = 0 ; j<arr.length; j++){
            if(compare[i] === arr[j]){
                counter += 1 
                // console.log(counter)
            }
        }if (counter > pengulangan){
            pengulangan = counter
            out = compare[i]
        }
    } if (compare.length === 1 || pengulangan === 1){
        return -1
    }else {
        return out
    }
}
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1