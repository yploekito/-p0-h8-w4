function angkaPrima(angka) {
    if (angka === 0 || angka === 1){
        return false
    } else if(angka === 2){
        return true
    }else {
        for (i=2; i<angka; i++){
            // console.log(i)
            if (angka % i === 0){
                return false
            } 
        } return true
    }    
    // }
    // if (angka === 2 || angka === 3 || angka === 5){
    //     return "prima"
    // }else if (angka === 1){
    //     return "bukan prima"
    // }
    // else if (angka % 2 !== 0 && angka % 3 !==0 & angka % 5 !==0){
    //     return "prima"
    // }else{
    //     return "bukan prima"
    // }
}
  
  // TEST CASES

// for (z=0; z<100; z++){
//     console.log("z = ", z, angkaPrima(z))
// }
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(8)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false