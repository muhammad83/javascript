function reverseString(str) {
  var array = str.split('');
  var result = array.reverse().join('');
  console.log("the array " + result);

  return result;
}

function doReverse(){
  var word = document.getElementById("wordToReverse").value;
  var result = reverseString(word);

  document.getElementById("rerversedWord").value = result;
}

function factorialize(num) {
  var factorial = 1;
  for(var i = 1; i <= num; i++){
    factorial *= i; 
  }
  return factorial;
}

function doFactorial(){
  var num = document.getElementById("factorialOf").value;
  var result = factorialize(num);

  document.getElementById("factorialIs").value = result;
}

function palindrome(str) {
  var word = str.match(/[a-zA-Z0-9]/g);
  var word2 = word.join("");
  var original = reverseString(word2);
  var bool = false;
  if(word2.toLowerCase() == original.toLowerCase()) 
    bool = true;
  else
    bool = false;
  console.log(str.match(/[a-zA-Z0-9]/g) + " and the word is: " + word + " word 2 is: " + word2 + " original word reveresed is: "+ original + " and it is a palindrome = " + bool);
  return true;
}

function checkPalindrome(){
  var str = document.getElementById("palindrome").value;
  var result = palindrome(str);
}