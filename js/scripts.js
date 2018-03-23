$(document).ready(function(){
  var ruby = 0;
  var java = 0;
  var php = 0;

function questionCheck (question) {
    if (question === 2){
      ruby = ruby + 1;

    } else if (question === 1) {
      java = java + 1;

    } else if (question === 3) {
      php = php + 1;
    } else {
      alert("oops");
    }
  }

  function mostCommon (j,r,p) {
    var return: add value
  }

  $(".quiz").submit(function() {

    for (i = 1; i < 6; i++) {
      window['question'+i] = ($(("#question"+i)+" option:selected")).val()
      questionCheck(parseInt(window['question'+i]))
    }

    //log current counts
    console.log("java count: " + java)
    console.log("ruby count: " + ruby)
    console.log("php count: " + php)

    //find most common and alert user to their track


  })
})
//
