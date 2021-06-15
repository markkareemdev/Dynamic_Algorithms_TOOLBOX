// excercise
// write a function 'countConstruct(target,wordBank)' that accepts a target string and an arrray of strings.

// The function should return the  number of ways that the 'target' can be constructed by concatenanting elements of the 'wordBank' array.
// you may reuse elements of 'wordBank' as many times as possible.


// solution with memoization: brute force solution
// const countConstruct = (target,wordBank) => {
    
//     if(target == "") return 1;
//     let totalCount = 0;

//     for(let word of wordBank){
//         if(target.indexOf(word) == 0){
//             var suffix = target.slice(word.length);
//             var rem = countConstruct(suffix,wordBank);
//             totalCount += rem;
            
//         }
//     }
//     return totalCount;
// };

// // time and space  complexity analysis
// // time complexity: 0(n^m * m) ... exponential
// // space complexity: 0(m * m) = 0(m^2) .. 

// console.log(countConstruct("abcdef",["ab","abc","cd","def","abcd"])) // 1 
// console.log(countConstruct("abcdef",["ab","cdef","abc","def"]))     // 2
// console.log(countConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]));
// console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",[
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee"          
// ]));







// const countConstruct = (target,wordBank, memo = {}) => {
//     if(target in memo) return memo[target];
//     if(target == "") return 1;
//     let totalCount = 0;

//     for(let word of wordBank){
//         if(target.indexOf(word) == 0){
//             var suffix = target.slice(word.length);
//             var rem = countConstruct(suffix,wordBank, memo);
//             totalCount += rem;
            
//         }
//     }

//     memo[target] = totalCount;
//     return totalCount;
// };

// // time and space  complexity analysis
// // time complexity: 0(n * m^2) ... 
// // space complexity: 0(m * m) = 0(m^2) .. 

// console.log(countConstruct("abcdef",["ab","abc","cd","def","abcd"])) // 1 
// console.log(countConstruct("abcdef",["ab","cdef","abc","def"]))     // 2
// console.log(countConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]));
// console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",[
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee"          
// ]));
