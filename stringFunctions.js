function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result =myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;

  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");

function helloWorld(){
    //- Using a function pointer:

    alert("congrats you have done hello world.")
}

function testFunction(){
  // alert("inside test function");
  var noun = document.getElementById("clickMe").value;
  var whateve = wordBlanks(noun, "big", "ran", "quickly");

  document.getElementById("clickMe").value = whateve;
}

function arrayMeBaby(arrayOne, arrayTwo, arrayThree){
  console.log("I am inside the arrayMeBaby function");
  var multiDemArry = arrayOne+arrayTwo+arrayThree;

  return multiDemArry;
}

function makeMagicHappen(){
  var arry1 = document.getElementById("array1").value; 
  var arry2 = document.getElementById("array2").value;
  var arry3 = document.getElementById("array3").value;
  var result = arrayMeBaby(arry1, arry2, arry3);
  console.log("inside the makeMagicHappen function and the values of arry1 is "+arry1+" arry2 is "+ arry2 +" and arry3 is "+ arry3);
  console.log("the result returned by arrayMeBaby function is " +result);
  document.getElementById("magic").value = result;
}

function nextInLine(arr, item) {
  console.log("arr is: "+arr + " item is " +item);
  var arr2 = [];
  console.log("arr2 is: "+arr2 + " arr " +arr);
  arr2 = arr;
  arr2.push(item);
  console.log("queue is: "+arr);
  var firstItem = arr2.shift(arr);
  console.log("queue is: "+firstItem);
  return firstItem;
}

function checkNextInLine(){
  var ary = document.getElementById("ary1").value;
  var item = document.getElementById("item").value;
  console.log("values of ary = " + ary + " and item = " + item);
  var result = nextInLine(ary, item);
  console.log("returned result is " + result);

  document.getElementById("returnedAry").value =result;
}

function testLogicalOr(val) {
  console.log("value of val is " + val)
  if(val < 10 || val > 20){
    return "Outside";
  }
  return "Inside";
}

function testLogicFunction(){
  var numToCompare = document.getElementById("numToCompare").value;
  var result = testLogicalOr(numToCompare);

  document.getElementById("comparisonResult").value = result;
}

function golfScore(par, strokes) {
  if (strokes === 1)
    return "Hole-in-one!";

  else if (strokes <= par - 2)
    return "Eagle";
  
  else if (strokes === par - 1)
    return "Birdie";
  
  else if (strokes === par)
    return "Par";
  
  else if (strokes === par + 1)
    return "Bogey";
  
  else if (strokes === par + 2)
    return "Double Bogey";
  
  else if (strokes >= par + 3)
    return "Go Home!";

  else
    return "really, after that performace you want to know your ranking!!!"

}

function checkGolfShot(){
  var strokes = document.getElementById("strokes").value;
  var par = document.getElementById("par").value;

  var result = golfScore(par, strokes);

  console.log("strokes = " + strokes + "par = " + par + " ranking = " + result);

  document.getElementById("yourRanking").value = result;
}

function phoneticLookup(val) {
  var result = {
     "alpha":"Adams",
     "bravo":"Boston",
     "charlie":"Chicago",
     "delta":"Denver",
     "echo":"Easy",
     "foxtrot":"Frank"
  };
  return result[val];
}

function doLookup(){
  var valueToLookUp = document.getElementById("valueToLookUp").value;
  var result = phoneticLookup(valueToLookUp);

  console.log("the result of the lookup was "+ result);
  console.log("the value of lookup value was "+ valueToLookUp);

  document.getElementById("result").value = result;
}

function multiplyAll(arr) {
  var product = 1;
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
        console.log("length of arrays are arr " + arr.length);
        console.log("length of arrays are arr[i] " + arr[i].length);
        console.log("length of arrays are arr[i][j]" + arr[i][j].length);
        console.log("the outmost array has "+arr[i]);
        console.log("the first child array has "+arr[j]);
        console.log(arr[i][j]);
        console.log("array being multiplied is " + arr[i] +"*"+ arr[i][j] + " and the product is " + product);
      product *= arr[i][j];
      
    }
  }
  return product;
}

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
    console.log("contacts length" + contacts.length);
  console.log("test if contacts is visible = " + contacts[1]["firstName"]);
  console.log("first name passed to the function is "+ firstName);
  console.log("prop passed to the function is "+ prop);

  var result ="";

  for(var i = 0; i < contacts.length; i++){
    console.log("inside for loop " + contacts[i]["firstName"]);

    if(contacts[i]["firstName"] == firstName) {
      if(contacts[i].hasOwnProperty(prop)){
      return contacts[i][prop] + contacts[i]["firstName"];
      }
      else{
        return "No such property";
      }
    }
    else{
      result = "No such contact";
    }
  }
  return result;
}
function doMultiply() {

  // var string = parseInt(document.getElementById("multidemarray").value);

  // var array =  [[1,2],[3,4],[5,6,7]];

  var array = document.getElementById("multidemarray").value;

  console.log("array passed is: " + array);

  var result =  lookUpProfile("Akira", "address");

  console.log("result returned is: " + result);
  document.getElementById("multiplyResult").value = result;
}

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

// reverseString("hello");