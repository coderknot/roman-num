// Business Logic
var romNum = function(input) {
  var I = 1;
  var V = 5;
  var X = 10;
  var L = 50;
  var C = 100;
  var D = 500;
  var M = 1000;

  var numeralStrings = ["M","D","C","L","X","V","I"];
  var numeralValues = [M,D,C,L,X,V,I];
  var remainder = input;
  var pushTo = [];
  var numString = [];

  for(var i=0; i < numeralValues.length; i++) {
    var whole = 0;
    if(remainder%numeralValues[i] === 0) {
      whole = Math.floor(remainder/numeralValues[i]);
      pushTo.push(whole);
      i = numeralValues.length;
    }
    else {
      if(remainder < numeralValues[i]) {
        pushTo.push(0);
      }
      else {
        whole = Math.floor((remainder/numeralValues[i]));
        pushTo.push(whole);
        remainder = remainder%numeralValues[i];
      }
    }
  }

  for(var i = pushTo.length - 1; i >= 0; i--) {
    if(pushTo[i]===4) {
      if(i === 6) {
        if(pushTo[i-1] === 1) {
          pushTo[5]=0;
          numString.unshift("IX");
        } else {
          numString.unshift("IV");
        }
      } else if (i === 4) {
        if(pushTo[i-1] === 1) {
          pushTo[3]=0;
          numString.unshift("XC");
        } else {
          numString.unshift("XL");
        }
      } else if (i === 2) {
        if(pushTo[i-1] === 1) {
          pushTo[1]=0;
          numString.unshift("CM");
        } else {
          numString.unshift("CD")
        }
      }
    } else {
        for(var j = 1; j <= pushTo[i]; j++) {
          numString.unshift(numeralStrings[i]);
        }
    }
  }

  return numString.join("");
}

// User Interface
$(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var input = parseInt($("#input").val());
    var output = romNum(input);

    $("#output").append(output);
  });
});
