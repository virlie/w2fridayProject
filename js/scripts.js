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
    if ( j > r && j > p) {
      alert("you should take java!")
    } else if ( r > j && r > p) {
      alert("you should take ruby!")
    } else if ( p > r && p > j) {
      alert("you should be in php!")
    } else if ( r == j && r > p ){
      alert("you could take ruby or java")
    } else if ( r == p && r > j ){
      alert("you could take ruby or php")
    } else if ( p == j && p > r ){
      alert("you could take php or java")
    } else {
      alert("you are a very interesting person! flip a coin :)")
    }
  }

  $(".quiz").submit(function() {
    // dynamic variables
    for (i = 1; i < 11; i++) {
      window['question'+i] = ($(("#question"+i)+" option:selected")).val()
      questionCheck(window['question'+i])
    }
    //log current counts
    console.log("java count: " + java)
    console.log("ruby count: " + ruby)
    console.log("php count: " + php)
    //find most common and alert user to their track
    mostCommon(java,ruby,php)

  })
})
//
