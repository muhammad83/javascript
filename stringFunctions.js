function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  // Your code below this line
  result =myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;

  // Your code above this line
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

// document.getElementById("testButton").onclick = helloWorld();