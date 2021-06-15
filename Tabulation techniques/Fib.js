
// Tabulation recipe
// visualise the the problem as a table
// sized the table based on the inputs
// initialised the table with default values
// seed the trivial answer into the table.
// iterate through the table
// fill further positions based on the current position

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

const fib = (num) => {
    
    const table = Array(num + 1).fill(0)
    table[1] = 1;
   for(var i=0; i <= num ; i++){
       table[ i + 1] += table[i];
       table[ i + 2] += table[i];      
   }
   return table[num]
}

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));
