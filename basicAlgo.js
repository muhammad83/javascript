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
  return bool;
}

function checkPalindrome(){
  var str = document.getElementById("palindrome").value;
  var result = palindrome(str);
}

function findLongestWord(str) {
  var array = str.split(" ");
  
  array.sort(function(a, b)
  {
    return b.length-a.length;
  });

  return array[0].length;
}

function findLongestWordPlayer(){
  var str = document.getElementById("sentence").value;
  var result = findLongestWord(str);

  document.getElementById("longestWord").value = result;
}

function titleCase(str) {
  str = str.toLowerCase();
  var array = str.split(" ");

  array = array.map(function(value){
    return value[0].toUpperCase() + value.substr(1);
  });

  str = array.join(" ");

  console.log("str now is " + str);

  return str;
}

function titleCaseRunner(){
  var str = document.getElementById("sentenceToCapitalize").value;
  var result = titleCase(str);

  document.getElementById("capitalizeResult").value = result;
}

function largestOfFour(arr) {
  arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    arr[i].sort(function(a,b){
      return b-a;
    });
    newArr.push(arr[i][0]);
  }

  console.log("sorted array: " + newArr);
  return newArr;
}

function sorter(){
  var arr = document.getElementById("arrOfarr").value;
  var result = largestOfFour(arr)

  document.getElementById("sortedArray").value = result;
}