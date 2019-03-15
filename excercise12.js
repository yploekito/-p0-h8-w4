function countRevenue (shoppers){
    var listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000,1]
    ]
    var results = []
    for (var i=0; i<listBarang.length;i++){
        results.push(
            {
                product: listBarang[i][0],
                shoppers : [],
                leftOver : listBarang[i][2],
                totalRevenue : 0,
                harga : listBarang[i][1]
            }
        )
    }
    for (var i = 0; i<shoppers.length; i++){
        var flag = false
        for(var j = 0; j < results.length; j++){
            if (shoppers[i].product === results[j].product){
                if(results[j].leftOver > shoppers[i].amount){
                    results[j].leftOver = results[j].leftOver - shoppers[i].amount
                    results[j].shoppers.push(shoppers[i].name)
                    results[j].totalRevenue = results[j].totalRevenue + (shoppers[i].amount) * (results[j].harga)
                } 
            }
        }
    }
    for(i = 0; i<results.length; i++){
        delete results[i].harga
        // if (results[i].shoppers.length === 0){
        //     delete results[i].product
        //     delete results[i].shoppers        
        //     delete results[i].leftOver
        //     delete results[i].totalRevenue
        // }
    }
    if (shoppers.length ===0 || shoppers === undefined){
        return ([])
    }
    return results
}
console.log("test case 1 #################")
console.log(countRevenue([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]
console.log("test case 2 #################")
console.log(countRevenue([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]
console.log("test case 3 #################")
console.log(countRevenue([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log("test case 4 #################")
console.log(countRevenue([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log("test case 5 #################")
console.log(countRevenue([])); //[]