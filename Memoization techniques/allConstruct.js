// write a function 'allConstruct(target,wordBank)' that accepts a target string and an array of strings.
// the function should return a 2D array containing all of the ways a 'target' can be constructed by concatenating elements of the `wordBank` array. Each element of the 2D array should rep one combination that
// constructs the `target`.
//  you may reuse the elements of the wordBank `target`.

// brute force solution...

// const allConstruct = (target, wordBank) => {
//     if (target == '') return [[]]; // a 2D array because the question asked it.
    

//     const results = []; // initiatiate result as the final output

//     for (let word of wordBank){
//         if(target.indexOf(word) == 0){                              //check for the prefix
//             const suffix = target.slice(word.length);              // get the suffix
//             const wordRem = allConstruct(suffix, wordBank);       // do a recursive call on the remaining word
//             const targetWays = wordRem.map(ways => [word, ...ways]) // spread the word leading to the base case and the content of the arrray today
//             results.push(...targetWays); // spread every stack into the results, we don't wanna push into it directly or else we will have a 3D array...
            
//         } 
//     }
    
//     return results;
// }

// console.log(allConstruct("abcdef",["ab","abc","cd","def","abcd"])) // 1 y
// console.log(allConstruct("abcdef",["ab","cdef","abc","def"]))     // 2
// console.log(allConstruct('purple',['purp','p','ur','le','purpl']));
// console.log(allConstruct("abcdef",["ab","abc","cd","def","abcd", 'ef', 'c']))
// console.log(allConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]))
// console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz",["a","aa","aaa","aaaa","aaaaa"]))   


//solution with memoization

// const allConstruct = (target, wordBank, memo = {}) => {
//     if(target in memo) return memo[target];
//     if (target == '') return [[]]; // a 2D array because the question asked it.
    

//     const results = []; // initiatiate result as the final output

//     for (let word of wordBank){
//         if(target.indexOf(word) == 0){                              //check for the prefix
//             const suffix = target.slice(word.length);              // get the suffix
//             const wordRem = allConstruct(suffix, wordBank, memo);       // do a recursive call on the remaining word
//             const targetWays = wordRem.map(ways => [word, ...ways]) // spread the word leading to the base case and the content of the arrray today
//             results.push(...targetWays); // spread every stack into the results, we don't wanna push into it directly or else we will have a 3D array...
//             memo[target] = targetWays;
//             return memo[target]
            
//         } 
//     }
    
//     return results;
// }

// // time complexity : O(n^m)
// // space complexity: O(m)

// console.log(allConstruct('purple',['purp','p','ur','le','purpl']));
// console.log(allConstruct("abcdef",["ab","abc","cd","def","abcd", 'ef', 'c']))
// console.log(allConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]))
// console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz",["a","aa","aaa","aaaa","aaaaa"]))   
