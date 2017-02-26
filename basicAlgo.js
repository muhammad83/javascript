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

function confirmEnding(str, target) {
  var lastChar = str.substr(str.length - 1);
  var sentence = "";

  if (str.includes(" ")){
    sentence = str.split(" ");
    if(sentence[sentence.length-1].includes(target.toLowerCase())){
      return true;
    }
    else{
      return false;
    }
  }
  console.log("sentence " + sentence);
  var bool = false;

  if(lastChar.toLowerCase() == target.toLowerCase()){
    // return true;
    bool = true;
  }
  else{
    // return false;
    bool = false
  }

  console.log("lastChar = " + lastChar + " target is = " + target + " result is " + bool);
  return bool;
}

function confirmEndingRunner(){
  var str = document.getElementById("word").value;
  var target = document.getElementById("letter").value;
  var result = confirmEnding(str, target);

  document.getElementById("wordLetterMatch").value = result;
}

function truncateString(str, num) {

  if(num > 3){
    num -= 3;
    str.slice(0, num);
  }
  else {
    str;
  }
}

function truncationRunner(){
  var str = document.getElementById("stringToTruncate").value;
  var num = document.getElementById("numberToTruncate").value;

  var result = truncateString(str, num);

  truncateString("Absolutely Longer", 2);
  truncateString("A-", 1);
  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
  truncateString("Peter Piper picked a peck of pickled peppers", 14);
  truncateString("A-tisket a-tasket A green and yellow basket", 11);


  document.getElementById("truncatedString").value = result;
}

function chunkArrayInGroups(arr, size) {
  var length = arr.length;
  var ret = [];
  console.log("length of array = " + length);
  console.log("division = " + length / size);
  for(var i = 0; i < length; i++){
    for(var j = 0; j < length; j += size){
      ret[i][j].push(arr.slice(j, size+j));
    }
  }
  console.log("return array = " + ret);
  return ret;
}

function chunkArrayInGroupsRunner(){
chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
}