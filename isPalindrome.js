// Valid Palindrome
// Write a JavaScript function called isPalindrome that takes a string as input and returns true if the 
// string is a palindrome otherwise return false. A palindrome is a word, phrase, number, or other 
// sequence of characters that reads the same forward and backward, ignoring punctuation, case, and 
// spacing.

// Sample:
// isPalindrome("level"); // Output: true
// isPalindrome("hello"); // Output: false
// isPalindrome("A man, a plan, a canal: Panama"); // Output: true

function checkPalindrome(string) {

    const stringToArray= string.split("")
    const filteredArray=stringToArray.filter(v=>/[a-zA-Z]+/ig.test(v))
    // console.log(filteredArray);
    const len = filteredArray.length;
    for (let i = 0; i < len / 2; i++) {

        if (filteredArray[i] !== filteredArray[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = 'naman!!!!!!'

// call the function
const value = checkPalindrome(string);

console.log(value)