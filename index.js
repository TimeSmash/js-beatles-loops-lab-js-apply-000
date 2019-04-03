// add solution here

var beatlesArr = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instrumentArr = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay (musicianArray, instArray) {
  var empty = []
  for (var i = 0; i <musicianArray.length; i++) {
    empty.push(`${musicianArray[i]} plays ${instArray[i]}`)
  } 
return empty
}

function johnLennonFacts(factArr) {
  var i = 0
  while(i <factArr.length) {
    factArr[i] = factArr[i] + "!!!"
    i += 1
  }
  return factArr;
}

function iLoveTheBeatles (num) {
  var emptyArr = []
  do {
    emptyArr.push("I love the Beatles!")
    num += 1
  } while (num < 15)
  return emptyArr
}