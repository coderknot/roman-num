var romNum = function(input) {
  var I = 1;
  var V = 5;
  var X = 10;
  var L = 50;
  var C = 100;
  var D = 500;
  var M = 1000;

// Works
  // if (input % M !== 0) {
  //   var newM = input/M;
  //   newM = parseInt(newM.toFixed(0));
  //   var remainder = (input % M);
  //   console.log(newM, remainder);
  // }
  // else {
  //   alert("perfect");
  // }

var numerals = [M,D,C,L,X,V,I];
var remainder = input;
var pushTo = [];
debugger;
for(var i=0; i < numerals.length; i++) {
  var whole = 0;
  if(remainder%numerals[i] === 0) {
    whole = Math.floor(remainder/numerals[i]);
    pushTo.push(whole);
  }
  else {
    if(remainder < numerals[i]) {
      pushTo.push(0);
    }
    else {
      whole = Math.floor((remainder/numerals[i]));
      pushTo.push(whole);
      remainder = remainder%numerals[i];
      console.log(whole);
    }
  }
}

console.log(pushTo);


  //  else if (input === D) {
  //   return "D";
  // } else if (input === C) {
  //   return "C";
  // } else if (input === L) {
  //   return "L";
  // } else if (input === X) {
  //   return "X";
  // } else if (input % V !== 0) {
  //   var newV = input/M;
  //   newV = parseInt(newV.toFixed(0));
  //   var remainder = (input % V);
  //   console.log(newV, remainder);
  // } else if (input === I) {
  //   return "I";
  // }



}











$(function() {
  $("#formOne").submit(function(event) {

    var input = parseInt($("#input").val());
    // console.log(I,V,X,L,C,D,M);

    console.log(romNum(input));

    console.log(input);
    event.preventDefault();
  });
});
