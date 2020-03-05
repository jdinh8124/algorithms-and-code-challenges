function century(year) {
let num = year.toString();
  if(num[2] + num[3] === "00"){
    if(year > 2000){
      return num[0] + num[1] + "st" + " " + "century";
    }else{
      return num[0] + num[1] + "th" + " " + "century";
    }
  }else{
    if(year > 2000){
      return num[0] + (parseInt(num[1]) + 1) + "st" + " " + "century";
    } else {
      if(num[1] === "9"){
        return (parseInt(num[0]) + parseInt(num[1]) + 10) + "th" + " " + "century";
      }else{
      return num[0] + (parseInt(num[1]) + 1) + "th" + " " + "century";
      }
    }
  }
}

console.log(century(1997))
