/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  str=str.replace(/[^a-zA-Z0-9 ]/g, ''); // to remove all special char
  str=str.split(" ").join(""); //remove spaces
  let i=0;
  let j=str.length-1;
  while(i<j){
    if(str[i]!=str[j]){
      return false;
    }
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;
