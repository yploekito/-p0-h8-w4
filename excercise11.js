function shoppingTime (memberId, money){
    var sisa = money
    var barang = [
        {jenisBarang : "Sepatu", brand: 'Stacattu', harga: 1500000},
        {jenisBarang : "Baju", brand: "Zoro", harga: 500000},
        {jenisBarang : "Baju", brand: "H&N", harga: 250000},
        {jenisBarang : "Sweater", brand: "Uniklooh", harga: 175000},
        {jenisBarang : "Casing Handphone", harga: 50000}

    ]

    var termurah = barang[0].harga
    var out = {
        memberId : memberId,
        money : money,
        listPurchased : [],
        changeMoney : sisa}
    for (var i=0; i<barang.length; i++){
        if (termurah>barang[i].harga){
            termurah = barang[i].harga
        }
    }
    if (memberId === undefined || memberId == false){
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    } else if(money <= termurah || money === undefined ){
        return "kerja dulu bos cari duit baru belanja"
    } else {
        var i = 0
        while (sisa >= termurah && i < barang.length){
            // console.log(sisa)
            if (sisa >= barang[i].harga ){
                sisa = sisa - barang[i].harga
                if (barang[i].brand === undefined){
                    out.listPurchased.push(barang[i].jenisBarang)
                }else{
                    out.listPurchased.push(barang[i].jenisBarang + barang[i].brand)

                }
            }
            i++
            
        }
    }out.changeMoney = sisa
    return out
}
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon 