// // // Oldest Person
// var testphrase = "This is a practice string!";
//
// function longestWord(str) {
//   var words = str.split(" ");
//   var index;
//   var longest = 0;
//   for (var i = 0; i < words.length; i++) {
//     if(words[i].length > longest){
//     longest = words[i].length;
//     index = i;
//     }
//   }
// return words[index];
// }
// console.log(longestWord(testphrase));
//
// // Longest Word
//
// var testphrase = "This is a practice string!";
//
// function longestWord(str) {
//   var words = str.split(" ");
//   var index;
//   var longest = 0;
//   for (var i = 0; i < words.length; i++) {
//     if(words[i].length > longest){
//     longest = words[i].length;
//     index = i;
//     }
//   }
// return words[index];
// }
// console.log(longestWord(testphrase));
//
// // Longest Word Refactored - Can't remove punctuation!!
//
var testphrase = "This is a practice string!";

function longestWord(str) {
  var words = str.split(" ");
  var index;
  var longest = 0;
  for (var i = 0; i < words.length; i++) {
    if(words[i].length > longest){
    longest = words[i].length;
    index = i;
    }
  }
return words[index];
}
console.log(longestWord(testphrase));

// // Define a function called factorial that takes a
// // random number as an argument and then returns the factorial
// // of that given number.
//
// var num = Math.floor(Math.random() * 100);
//
// function factorial(num) {
//        var result = 1;
//        for (var i = 1; i <= num; i++) {
//            result = result * i;
//        }
//        return result;
// }
// console.log(factorial(num));
// //
// // Bonus: Write a function called palindrome
// // that takes a string as an argument and returns the
// //  string in reversed order. Return true if the string is
// //  the same as the reversed string, otherwise return false.
