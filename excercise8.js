function tukarBesarKecil(kalimat){
    var result = ""
    var alphabetKecil = "abcdefghijklmnopqrstuvwxyz"
    var alphabetBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(var i = 0; i<kalimat.length; i++){
        // console.log(i)
        var flag = true
        for (j=0; j<alphabetKecil.length; j++){
            // console.log(j)
            if(kalimat[i] === alphabetKecil[j]){
                result = result + alphabetBesar[j]
                flag = false
                break
                // console.log("alphabet kecil")
            }else if(kalimat[i]=== alphabetBesar[j]){
                result = result + alphabetKecil[j]
                flag = false
                break
                // console.log("alphabet besar")
            }
        }if (flag){
            result = result + kalimat[i]
        }
    }return result
}

console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"