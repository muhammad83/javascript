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
  arr.push(item);
  console.log("queue is: "+arr);
  var firstItem = arr.shift(arr);
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

// document.getElementById("testButton").onclick = helloWorld();