function urutkanAbjad(str){
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var grouping = []
    for (var i = 0; i<alphabet.length; i++){
        grouping[i] = []
    }
    // console.log(grouping)
    
    for (i = 0 ; i<str.length ; i++){
        for (j =0; j <alphabet.length ; j++){
            if(str[i]===alphabet[j]){
                grouping[j].push(str[i])
            }
        }
    }var out = ''
    for(i=0; i<grouping.length; i++){
        if (grouping[i].length !== 0){
            for (var j = 0; j<grouping[i].length; j++){
                // console.log(grouping[i][j])
                out = out + grouping[i][j]
            }
        }
    }return out
}
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'