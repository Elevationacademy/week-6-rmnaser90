// const findDuplicate = function (arr) {
//     const obj = {}
//     for (const item of arr) {
//         if (obj[item.name]){
//             return "there is a duplicate " + item.name
//         }else{
//             obj[item.name] = item
//         }
//     }
//     return " there is no duplicates"
// }

// const array = [
//     {name: "rami", id: 87},
//     {name: "asd", id: 87},
//     {name: "zxc", id: 87},
//     {name: "qwe", id: 87},
//     {name: "gdsa", id: 87},
//     {name: "fgds", id: 87},
//     {name: "asde", id: 87},
//     {name: "qwe1", id: 87},
//     {name: "rami", id: 87},
//     {name: "asdaa", id: 87}
// ]

// console.log(findDuplicate(array));


// const employees = {
//     "ax01": {name:"ray", age: 28, salary:1300},
//     "qs48": {name:"rami", age: 30, salary:2000},
//     "qwe23": {name:"may", age: 25, salary:200},
//     "fds2": {name:"sameer", age: 28, salary:1900},
// }

// const findEmployeeById = employeeId => employees[employeeId]


// console.log(findEmployeeById("fds2"))


// let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987]
// let count =0 
// const findIndex = function (numbers,num, start, end) {
//  if(start == undefined || end == undefined){
//      start = 0;
//      end = numbers.length - 1
//  }
//  if (start>end) {
//      return false
//  }
// count++
// const mid = Math.floor((start + end)/2)

// if(numbers[mid] == num){
// return "found the num: "+numbers[mid] +`, time complexity O(${count})`
// }

// if (numbers[mid]>num) {
//     return findIndex(numbers, num, start, mid-1)
// }else{
//     return findIndex(numbers, num, mid+1, end)
// }

// }
// console.log(
//     findIndex(numbers, 1167)
// )

// let autoComplete = {
//     A: ["Aardvak", "Aladdin", "Alabastor"],
//     B: ["Bane", "Broach", "Broam", "Brood", "Broom"],
//     Z: ["Zap", "Zebra", "Zoo", "Zoom"]
// }

// const findMatch = function(wordPrefix){
//     let firstLetter = wordPrefix[0]
//     let words = autoComplete[firstLetter]
    
//     for(let w in words){
//         let word = words[w]
//         if(word.startsWith(wordPrefix)){
//             return words.slice(w)
//         }
//     }
// }




// alogrithms


// let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444, 469, -480,0, -572, 624, 627, 665, 680, 694, -743, 768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987]
// let numbers = [823412013513, 1381120136324, 82341381745, 181238377131412, 74128377131412, 74128377412] // should find 74128377412

// let numbers = [-312, -9123, -112, -812, -7411, -312] //should find -9123

let numbers = [1,-1] //should find 23
let smallestNumber = numbers[0] || "empty array" //our 'number stored in memory'

for(let num of numbers){ //going over each number

  if(num < smallestNumber){

    smallestNumber = num //forget the number stored in memory and store num instead
  }
}

console.log("Smallest number is " + smallestNumber)
