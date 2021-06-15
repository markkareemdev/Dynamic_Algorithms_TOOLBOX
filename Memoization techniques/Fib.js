
// fib function without dynamic programming

const fib = (n) => {
    if( n == 0 || n == 1) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(1))
console.log(fib(2))
console.log(fib(8))
console.log(fib(50))

// time and space  complexity analysis
// time complexity 0(2^n) 
// space complexity 0(n)


// fib with dynamic programming using memoization

const fib = (n, memo={}) => {
  if(n in memo) return memo[n]; // search for existence in the memo object
  if( n <= 2) return 1;         //base case
  memo[n] = fib(n-1, memo) + fib(n-2, memo);
  return memo[n]
}
console.log(fib(1))
console.log(fib(2))
console.log(fib(8))
console.log(fib(200))
// time and space  complexity analysis
// time complexity 0(n) 
// space complexity 0(n)
