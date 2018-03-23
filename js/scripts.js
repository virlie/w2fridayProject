$(document).ready(function(){
  var ruby = 0;
  var java = 0;
  var php = 0;

  var questionCheck = function(question) {
    if (question === 1){
      ruby = ruby + 1;

    } else if (question === 2) {
      java = java + 1;

    } else if (question === 3) {
      php = php + 1;
    } else {
      alert("oops");
    }
  }

  $(".quiz").submit(function() {

    for (i = 1; i < 6; i++) {
      window['question'+i] = ($(("#question"+i)+" option:selected")).val()
      console.log(window['question'+i]);
    }
  })
})
//
