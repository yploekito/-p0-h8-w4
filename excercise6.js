function digitPerkalianMinimum(angka){
    var faktorFaktor = []
    for (i=1; i<angka+1; i++ ){
        var faktor = ""
        if (angka%i === 0){
            faktor = faktor + i + angka/i
            // console.log(faktor)
            faktorFaktor.push(faktor)
        } 
    }
    // console.log(faktorFaktor)
    var digit = faktorFaktor[0].length
    for (i=1; i<faktorFaktor.length; i++){
        if (digit > faktorFaktor[i].length){
            digit = faktorFaktor[i].length
        }
    }return digit
}

console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2