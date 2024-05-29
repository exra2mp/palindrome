function isPalindrome(x) {
   let lowX = x.toLowerCase();
   let revX = lowX.split("").reverse().join("");
  if(revX === lowX){
    return true;
  } else { return false;}
}
