function checkAB(num){
    var ab = "ab"
    var a = []
    var b = []
    for(i = 0; i<num.length; i++){
        // console.log(i)
        if (num[i] === 'a'){
            a.push(i)
        }else if(num[i]=== 'b'){
            b.push(i)
        }
    }
    for (i = 0; i<a.length; i++){
        for (j = 0; j<b.length; j++){
            // console.log(a[i], " " ,b[j])
            if ((a[i]-b[j]) === 4){
                return true
            }else if((b[j]-a[i]) === 4){
                return true
            }
        }
    }
    return false
    // console.log(a)
    // console.log(b)
}
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false