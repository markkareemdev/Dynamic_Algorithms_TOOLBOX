// excersise
// write a function `canConstruct(target,  wordBank)` that accepts a target string and an array of strings.
// the function should return a boolean indicating whether or not the 'target' can be constructed by concatenating elements of the 'wordBank' array.
// you may reuse the element of the "wordBank" array.
// you may resuse the element of the 'wordBank' as many times as needed.


// my solution
// const canConstruct = (target, wordBank) => {
//     if (target == "") return true;
   
  
//     for(let word of wordBank){
//        const rem = target.replace(word, "");
//         if( rem == "") return true;
//         if( rem == target) return ;
        
//        if (canConstruct(rem, wordBank) == true){
//            return true
//        }
//     }

//     return false
// }


// canConstruct("abcdef",["ab","cd","cdef"]);

// instructors solution without memo

// const canConstruct = (target, wordBank) => {
//     if (target == "") return true;

//     for(let word of wordBank){
//      if (target.indexOf(word) === 0){
//          const suffix = target.slice(word.length);
//         if (canConstruct(suffix,wordBank) == true){
//             return true
//              }
//          }    
//     }

//     return false
// }


// console.log(canConstruct("abcdef",["ab","cd","cdef"]));
// console.log(canConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]));
// console.log(canConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]));
// console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",[
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee"          
// ]));


// time and space  complexity analysis
// time complexity: 0(n^m * m) ... the extra "m" is a result of the splice method used which gives m number product at each step
// space complexity: 0(m * m) = 0(m^2) .. tthe splice method affects the space complexity too.

// instructors solution with memo

// const canConstruct = (target, wordBank, memo = {}) => {
//     if (target in memo) return memo[target];
//     if (target == "") return true;

//     for(let word of wordBank){
//      if (target.indexOf(word) === 0){ //checking if the prefix is same
//          const suffix = target.slice(word.length); // getting the suffix
//         if (canConstruct(suffix,wordBank, memo) == true){
//              memo[suffix] = true;
//              return memo[suffix]
//         }
//      }
       
//     }
    
//     memo[target] = false;
//     return false
// }

// // time and space  complexity analysis
// // time complexity: 0(n * m^2) ... 
// // space complexity: 0(m * m) = 0(m^2) .. 


// console.log(canConstruct("abcdef",["ab","cd","cdef"]))
// console.log(canConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]));
// console.log(canConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]));
// console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",[
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee"          
// ]));


