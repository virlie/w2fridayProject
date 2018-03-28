$(document).ready(function(){
  var ruby = 0;
  var java = 0;
  var php = 0;

function questionCheck (question) {
    if (question == 2){
      ruby = ruby + 1;

    } else if (question == 1) {
      java = java + 1;

    } else if (question == 3) {
      php = php + 1;
    } else {
      alert("oops");
    }
  }

  function mostCommon (j,r,p) {
    var result = '';
    if ( j > r && j > p) {
      result = "you should take java!";
    } else if ( r > j && r > p) {
      result = "you should take ruby!";
    } else if ( p > r && p > j) {
      result = "you should be in php!";
    } else if ( r == j && r > p ){
      result = "you could take ruby or java";
    } else if ( r == p && r > j ){
      result = "you could take ruby or php";
    } else if ( p == j && p > r ){
      result = "you could take php or java";
    } else {
      result = "you are a very interesting person! flip a coin :)";
    }
    return result;
  }

  $(".quiz").submit(function(event) {
    // dynamic variables
    event.preventDefault()
    for (i = 1; i < 11; i++) {
      window['question'+i] = parseInt($(("#question"+i)+" option:selected").val())
      if (window['question'+i] !== 0) {
        questionCheck(window['question'+i])
      }
      else {
        alert("You must fill out the whole form")
        break
      }
    }
    //log current counts
    console.log("java count: " + java)
    console.log("ruby count: " + ruby)
    console.log("php count: " + php)
    //find most common and alert user to their track
    var res = mostCommon(java,ruby,php)
    $("#output").append("<p class='display-3'>"+res+"</p>");

  });
})
//
