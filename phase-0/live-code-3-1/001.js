/*
Array Remover
Array remover merupakan sebuah function yang berfungsi untuk menghapus value
dari sebuah array yang diberikan berdasarkan jumlah yang ingin dihapus dan index
mulai.

Array remover menerima tiga parameter yaitu array of number, index untuk mulai
menghapus dan jumlah data yang akan dihapus

Contoh:
Input:
  array: [ 666, 666, 333, 10, 5, 6]
  index: 1
  count: 2

Output:
  [ 666, 10, 5, 6 ]

RULES:
  - WAJIB MENYERTAKAN ALGORITMA / PSEUDOCODE
  - Dilarang menggunakan built-in function .map, .filter, .reduce!
*/

// //PSEUDOCODE
// DETERMINE the start of 'array' index removal with 'index'
// DETERMINE the amount of 'array' index removal with 'count'
// IF 'array' index SMALLER THAN 'index' OR 'array' index GREATER THAN 'index'+'count' -1
//  STORE 'array' index to a new array 'newArray'
// ENDIF
// DISPLAY 'newArray'

function arrayRemover (array, index, count) {
  // your code here
  // var hasil = ''
  var newArray = []
  for (var i = 0; i < array.length; i++) {
    // hasil = array[i]
    if (i < index || i > index+count-1) {
      newArray.push(array[i])
    }
  }
  //array.splice(index, count)
  //return array
  return newArray
}

console.log(arrayRemover([ 1, 2, 3] , 0 , 2 )); // [3]
console.log(arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 )); // [ 666, 10, 5, 6 ]
console.log(arrayRemover([ 1, 2, 3], 0, 3)) // []

//slice
function arrayRemover (array, index, count) {
  // your code here
  // var hasil = ''
  var newArray = []
  for (var i = 0; i < array.length; i++) {
    // hasil = array[i]
    if (i >= index && i <= index+count-1) {
      newArray.push(array[i])
    } 
  }
  //array.slice(index, count)
  //return array
  return newArray
}

console.log(arrayRemover([ 1, 2, 3] , 0 , 2 )); // [1, 2]
console.log(arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 )); // [ 666, 333 ]
console.log(arrayRemover([ 1, 2, 3], 0, 3)) // [1, 2, 3]

