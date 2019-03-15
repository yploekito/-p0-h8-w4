function ubahHuruf(kata){
    var alphabet= "abcdefghijklmnopqrstuvwxyz"
    var out =""
    for(i=0; i<kata.length; i++){
        for(j=0; j<alphabet.length; j++){
            if (kata[i] === alphabet[j]){
                if(j !== alphabet.length-1){
                    out = out + alphabet[j+1]
                }else {
                    out = out + alphabet[0]
                }
            }
        }
    }return out
}

console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangatz')); // tfnbohbu