// //object

function changeMe(arr){
    var object = []
    for(i = 0; i<arr.length ; i++){
        object[i]={firstName: arr[i][0],
        lastName : arr[i][1],
        gender: arr[i][2],
        age : 2019-arr[i][3]}

        if (arr[i][3] === undefined || arr[i][3] > 2019)
            object[i].age = "Invalid Birth Year"
        console.log(i+1+ "."+ object[i].firstName+ " "+ object[i].lastName +":" , object[i])
    }
}

// var object = {
//     firstName : 'christ',
//     lastName : 'Evan',
//     gender : 'Male'
// }
// console.log(object)
changeMe([['Christ', 'Evans', 'Male', 2982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""