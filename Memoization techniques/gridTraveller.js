
// example 2
// The grid traveller:
// Suppose that you are a traveller on a 2D grid. you begin in the top-left cornner and your goal is totravel to the bottom-rigth corner. you may only move down or right

// gridTraveller without memoization.
// const gridTraveller = (n,m,) => {
    
//     if (n == 0 || m == 0) return 0;
//     if ( n == 1 & m == 1) return 1;
//     return gridTraveller(n-1,m) + gridTraveller(n,m-1);
    
// }

// console.log(gridTraveller(2,3));
// console.log(gridTraveller(4,5));
// console.log(gridTraveller(20,20));

// time and space  complexity analysis
// time complexity 0(2^(n+m)) ..exponential
// space complexity 0(n+m)

// gridTraveller with memoization.
// const gridTraveller = (n,m, memo= {}) => {
//     const key = `${n},${m}`; // the reason for the comma in between the key is to  avoid key confusion as the stack increases
//     if (key in memo) return memo[key];
//     if (n <= 0 || m <= 0) return 0;
//     if ( n == 1 & m == 1) return 1;
//     memo[key] = gridTraveller(n-1,m, memo) + gridTraveller(n,m-1, memo);
//     return memo[key]
// }

// console.log(gridTraveller(2,3));
// console.log(gridTraveller(4,5));
// console.log(gridTraveller(200,200));

// time and space  complexity analysis
// time complexity 0(n+m) ..linear
// space complexity 0(n+m)