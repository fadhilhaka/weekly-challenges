//[Exercises 14] Most Frequent Largest Numbers

//Logic Challenge - Most Frequent Largest Numbers

function sorting(arrNumber) {
    // code di sini
    var current = false
    while (current === false) {
      current = true
      for (var i = 1; i < arrNumber.length; i++) {
        if (arrNumber[i-1] > arrNumber[i]) {
          current = false
          var move = arrNumber[i-1]
          arrNumber[i-1] = arrNumber[i]
          arrNumber[i] = move
        }
      }
    }
    return arrNumber
  }
  
  function getTotal(arrNumber) {
    // code di sini
    var biggest = arrNumber[0]
    for (var j = 0; j < arrNumber.length; j++) {
      if (arrNumber[j] > biggest) {
        biggest = arrNumber[j]
      }
    }
    if (biggest === undefined) {
      var kosong = "''"
      return kosong
    }
    var count = 0
    for (j = 0; j < arrNumber.length; j++) {
      if (arrNumber[j] === biggest) {
        count++
      }
    }
    var result = 'angka paling besar adalah ' + biggest + ' dan jumlah kemunculan sebanyak ' + count + ' kali'
    return result
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''