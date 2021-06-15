// excersise: the bestSum algo problem
// write a function `bestSum(targetSum, numbers)` that takes in a targetSum an d array of numbers as arguments
// the function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.
// if there is a tie for the shortest combination, you may return one of the shortest;

// const bestSum = (targetSum, numbers) => {
   
//     if( targetSum == 0) return [];
//     if(targetSum < 0) return null;
    

//     let shortestcomb = null;

//     for(let num of numbers){
//         const rem = targetSum - num;
//         const remResult = bestSum(rem, numbers);
//         if(remResult !== null){
//            const comb = [...remResult, num];
//           if(shortestcomb === null || comb.length < shortestcomb.length){
//               shortestcomb = comb;
//           }
                  
//         }
//     }

//     return shortestcomb;
// }

//time and space  complexity analysis
// time complexity 0(n^m * m) .exponential 
// space complexity 0(m*m) = 0(m^2)

// console.log(bestSum(7,[2,3]));
// console.log(bestSum(7,[5,3,4,7]));
// console.log(bestSum(7,[2,4]));
// console.log(bestSum(8,[2,3,5]));
// console.log(bestSum(300,[7,14]));


// solution with memo

// const bestSum = (targetSum, numbers, memo = {}) => {

//     if (targetSum in memo) return memo[targetSum];
//     if( targetSum == 0) return [];
//     if(targetSum < 0) return null;
    

//     let shortestcomb = null;

//     for(let num of numbers){
//         const rem = targetSum - num;
//         const remResult = bestSum(rem, numbers, memo);
//         if(remResult !== null){
//            comb = [...remResult, num];
//           if(shortestcomb === null || comb < shortestcomb.length){
//               shortestcomb = comb;
//           }
                  
//         }
//     }
//     memo[targetSum] = shortestcomb;
//     return shortestcomb;
// }

//time and space  complexity analysis
// time complexity 0(n*m^2) 
// space complexity 0(m*m) = 0(m^2)

// console.log(bestSum(7,[2,3]));
// console.log(bestSum(7,[5,3,4,7]));
// console.log(bestSum(7,[2,4]));
// console.log(bestSum(8,[2,3,5]));
// console.log(bestSum(300,[7,14]));

