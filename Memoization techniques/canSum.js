// example3
// write a function `canSum(targetSum, numbers)` hat takes in a targetSum and an array of numbers as arguments.
// the function should returns a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.
// you may use an element of the array as many times as needed.
// you may assume that all input numbers are nonegative.

// solution without memo
// const canSum = (targetSum, numbers ) => {

//     // base cases
//     if (targetSum == 0) return true;
//     if (targetSum < 0) return false;

//     // checking for possibilty of number addition
//     for ( let num of numbers){
//          const rem = targetSum - num;
//          if (canSum(rem, numbers) == true){
//              return true;
//          }
//     }
   
//     return false;
// };

// time and space  complexity analysis
// time complexity 0(n^m) ..exponential
// space complexity 0(m)


// solution with memo
// const canSum = (targetSum, numbers, memo = {} ) => {

//     // base cases
//     if (targetSum in memo) return memo[targetSum]
//     if (targetSum == 0) return true;
//     if (targetSum < 0) return false;

//     // checking for possibilty of number addition
//     for ( let num of numbers){
//          const rem = targetSum - num;
//          if (canSum(rem, numbers,memo) == true){
//              memo[targetSum] = true
//              return true;
//          }
//     }
//      
//     memo[targetSum] = false
//     return false;
// };

// time and space  complexity analysis
// time complexity 0(n*m) ..linear
// space complexity 0(m)

// console.log(canSum(7,[2,3]));
// console.log(canSum(7,[5,3,4,7]));
// console.log(canSum(7,[2,4]));
// console.log(canSum(8,[2,3,5]));
// console.log(canSum(300,[7,14]));
