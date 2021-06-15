// excersise 3

// wite a function 'howSum(targetSum, numbers)' that takes in a target sum and an array of numbers as arguments.
// The func tion should return an array containing any combination of elements that add up to the targetSum.
//  if there is nocombination that adds up to the targetSum, then return null.
// if there are multiple combination possible you may return the single one.


//solution1
// this solution won't work for all the cases since it is stated to use as many elemnet combination as possible
// const howSum = (targetSum, numbers) => {
//     var output = [];

//         for(var j= 0; j < numbers.length; j++){
//             if (numbers[j] + numbers[j + 1] == targetSum){
//                 var arr = [numbers[j],numbers[j + 1]]
//                 output.push(arr)
//             }
//         }
    
//         return output.length >= 1 ? output[0] : null
// };
// console.log(howSum(7,[5,3,4,7])); //arr
// console.log(howSum(7,[2,4])); //null
// console.log(howSum(0,[1,2,3])); //null
// console.log(howSum(7,[2,4, 1])); // arr

// this is a brute force solution

// const howSum = (targetSum, numbers) => {
   
//     if (targetSum < 0) return null;
//     if (targetSum == 0) return [];
    

//     for(let num of numbers){
//         const rem = targetSum - num;
//         const remResult = howSum(rem, numbers);
//         if( remResult !== null){
//          return [...remResult, num]; 
//         }
//     }

//     return  null;
// }

//time and space  complexity analysis
// time complexity 0(n^m * m) ..exponential 
// space complexity 0(m)

// console.log(howSum(7,[2,3]));
// console.log(howSum(7,[5,3,4,7]));
// console.log(howSum(7,[2,4]));
// console.log(howSum(8,[2,3,5]));
// console.log(howSum(300,[7,14]));



// solution with memo


// const howSum = (targetSum, numbers, memo = {}) => {
//     if (targetSum in memo) return memo[targetSum];
//     if (targetSum < 0) return null;
//     if (targetSum == 0) return [];
    

//     for(let num of numbers){
//         const rem = targetSum - num;
//         const remResult = howSum(rem, numbers, memo);
//         if( remResult !== null){
//          memo[targetSum] = [...remResult, num];
//          return memo[targetSum]
//         }
//     }

//     memo[targetSum] = null;
//     return  null;
// }

//time and space  complexity analysis
// time complexity 0(n*m*m) = 0(n*m^2) ..exponential 
// space complexity 0(m*m) = 0(m^2)

// console.log(howSum(7,[2,3]));
// console.log(howSum(7,[5,3,4,7]));
// console.log(howSum(7,[2,4]));
// console.log(howSum(8,[2,3,5]));
// console.log(howSum(300,[7,14]));
