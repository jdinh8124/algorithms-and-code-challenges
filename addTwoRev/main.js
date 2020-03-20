var addTwoNumbers = function (l1, l2) {
  let string1 = l1 + "";
  let string2 = l2 + "";

  const arrRev1 = string1.split("").reverse().join("");
  const arrRev2 = string2.split("").reverse().join("");
  let total = parseInt(arrRev1) + parseInt(arrRev2);
  total = total + '';
  const arrToReturn = [];
  for (let i = 0; i < total.length; i++) {
    arrToReturn.push(parseInt(total[i]));
  }
  return arrToReturn;
};

console.log(addTwoNumbers(243, 564))
