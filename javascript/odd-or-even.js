// DESCRIPTION:
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

// my solution
function oddOrEven(array) {
   const sum = array.reduce((acc, curr) => acc + curr, 0)
   if(sum % 2 === 0){
     return 'even'
   } return 'odd'
}