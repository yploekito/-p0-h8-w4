function naikAngkot(arrPenumpang){
    rute = ['A', 'B', 'C', 'D', 'E', 'F']
    ruteAngka = {
        'A': 1,
        'B': 2,
        'C': 3,
        'D': 4,
        'E': 5,
        'F': 6
    }
    var start = 0
    var end = 0
    var panjangRute = 0
    var result = []
    var bayar = 0
    for (i=0 ; i<arrPenumpang.length; i++){
        start = ruteAngka[arrPenumpang[i][1]]
        end = ruteAngka[arrPenumpang[i][2]]
        panjangRute = Math.abs(end - start)
        bayar = panjangRute*2000
        result.push(
            {
                penumpang: arrPenumpang[i][0],
                naikDari: arrPenumpang[i][1],
                tujuan: arrPenumpang[i][2],
                bayar: bayar
            }
        )
    }
    return result
}
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
console.log(naikAngkot([])); //[]