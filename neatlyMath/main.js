function formatMath(string) {
  let answer;
  if (string.split(" ")[1] === "+") {
    answer = parseInt(string.split(" ")[0]) + parseInt(string.split(" ")[2]);
  } else if (string.split(" ")[1] === "-") {
    answer = parseInt(string.split(" ")[0]) - parseInt(string.split(" ")[2]);
  } else if (string.split(" ")[1] === "x") {
    answer = parseInt(string.split(" ")[0]) * parseInt(string.split(" ")[2]);
  } else {
    answer = parseInt(string.split(" ")[0]) / parseInt(string.split(" ")[2]);
  }
  return string + " = " + answer;
}


function formatMath(string) {
  let answer;
  if (string.split(" ")[1] === "x") {
    answer = parseInt(string.split(" ")[0]) * parseInt(string.split(" ")[2]);
  } else {
    answer = eval(string);
  }
  return string + " = " + answer;
}


const formatMath = expr => `${expr} = ${eval(expr.replace(/x/, '*'))}`;
