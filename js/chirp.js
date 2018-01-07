function chirp(n){
  
  // base case
  if (n === 0) {
    return "";
  }
  return "chirp " + chirp(--n);
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});