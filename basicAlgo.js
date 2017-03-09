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
  var ret = []

  for(var j = 0; j < length; j += size){
    ret.push([arr.slice(j, size+j)]);
  }
  console.log("return array = " + ret);
  return ret;

  // var temp = [];
  // var result = [];

  // for (var a = 0; a < arr.length; a++) {
  //   if (a % size !== size - 1)
  //     temp.push(arr[a]);
  //   else {
  //     temp.push(arr[a]);
  //     result.push(temp);
  //     temp = [];
  //   }
  // }

  // if (temp.length !== 0)
  //   result.push(temp);
  //   console.log("return array = " + result);
  // return result;
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

function slasher(arr, howMany) {
  
  return arr.slice(howMany, arr.length);
}

function mutation(arr) {
  var ret = [];
   
  for(var i = 0; i < arr[1].length; i++){
    console.log("comparing "+ arr[0].toLowerCase() + " and " + arr[1][i].toLowerCase());
    console.log("comparison result is "+ arr[0].toLowerCase().includes(arr[1][i].toLowerCase()));
    if(arr[0].toLowerCase().includes(arr[1][i].toLowerCase())){
      ret.push(true);
    }
    else{
      ret.push(false);
    }
  }
  
console.log(arr[1].toLowerCase());
console.log(arr[0].toLowerCase());

  console.log("result " + ret);
  // console.log("mutation result = " + arr[1].toLowerCase().includes(arr[0].toLowerCase()));

  if(ret.includes(false)){
    return false;
  }
  else
    return true
}

function mutationRunner(){
  mutation(["hello", "hey"]);
  mutation(["hello", "Hello"]);
  mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
  mutation(["Mary", "Army"]);
  mutation(["Mary", "Aarmy"]); 
  mutation(["Alien", "line"]);
  mutation(["floor", "for"]);
  mutation(["hello", "neo"]); 
  mutation(["voodoo", "no"]);
}

function bouncer(arr) {
  var filtered = arr.filter(isNullValue);
  console.log("values filtered " + filtered);
  return filtered;
}

function isNullValue(value){
  return (isNaN(value)? value : value);
}

function bouncerRunner(){
  bouncer([7, "ate", "", false, 9]);
  bouncer(["a", "b", "c"]);
  bouncer([false, null, 0, NaN, undefined, ""]);
  bouncer([1, null, NaN, 2, undefined]); 
}


function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments, 1);
  return arr.filter(function(element) {
    console.log("result = ", args.indexOf(element) === -1, "args.indexOf(element) ", args.indexOf(element));
    return args.indexOf(element) === -1;
  });
}

function destroyerRunner(){
  document.getElementById("destroyerTextArea").value = destroyer([1, 2, 3, 1, 2, 3], 2, 3) 
  destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)
  destroyer([3, 5, 1, 2, 2], 2, 3, 5)
  destroyer([2, 3, 2, 3], 2, 3)
  destroyer(["tree", "hamburger", 53], "tree", 53)
}

function getIndexToIns(arr, num) {
  arr.push(num);
  return arr.sort(function(a,b){
    return a > b;
  });
}

function arraySorterRunner(){
  getIndexToIns([10, 20, 30, 40, 50], 35);
  getIndexToIns([10, 20, 30, 40, 50], 30);
  getIndexToIns([40, 60], 50);
  getIndexToIns([3, 10, 5], 3);
  getIndexToIns([5, 3, 20, 3], 5);
  getIndexToIns([2, 20, 10], 19);
  getIndexToIns([2, 5, 10], 15);
}

function rot13(str) {

  return Array.from(str).map(function(letter){
    var con = str.charCodeAt(str.indexOf(letter))-13;
    if (con >= 65 && con <= 90){
        return String.fromCharCode(str.charCodeAt(str.indexOf(letter))-13)
    }
    else if(!letter.match(/[^A-Z0-9]/)){
        return String.fromCharCode(str.charCodeAt(str.indexOf(letter))+13)
    }
    else{
        return letter;
    }
  }).join("");

console.log("decoded str ", arr);
  // console.log("decoded str ", retstr);
  return str;
}

function rot13Runner(){
  rot13("SERR PBQR PNZC");
  rot13("SERR CVMMN!");
  rot13("SERR YBIR?");
  rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
}

function getquotes(){
  $.ajaxSetup({
  headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    }
});
  $.getJSON(
    'https://andruxnet-random-famous-quotes.p.mashape.com/cat=', 
    function(data) { 
      console.log (data);
     }
);
}