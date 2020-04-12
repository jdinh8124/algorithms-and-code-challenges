# Neatly Formatted Math
- Given a simple math expression as a string, neatly format it as an equation.

## Examples
```
formatMath("3 + 4") ➞ "3 + 4 = 7"

formatMath("3 - 2") ➞ "3 - 2 = 1"

formatMath("4 x 5") ➞ "4 x 5 = 20"

formatMath("6 / 3") ➞ "6 / 3 = 2"

```

## Notes
- You will need to deal with addition, subtraction, multiplication and division.
- Division will have whole number answers (and will obviously not involve 0).


### White Board notes without IDE

```
- Given math expression in string return as an equation completed"
- Input "3 + 4"
- Output "3 + 4 = 7"
- Division will never be by 0
- Deal with all cases

BRAINSTORM
- Somehow use that original string to return the answer
- variable to return appending "=" + "answer variable"
- Special case for X when doing math in Javascript
- check if string[2] === "x" if so do work
  -else do work without modificaiton
-Eventually were gonna take the original string append "=" plus the answer we did from the work


Psuedo Code
- have a function thaat takes a string argument
- initally were gonna created a variable called called answer(gonna store our result of the equation)
-conditional to check string.split(" ")[1]
  if(string[2] === "x") we are going to multiply parseInt(string.split(" ")[0]) * parseInt(string.split(" ")[2]) store that in our answer variablle
  else if (string[2] === "+") parseInt(string.split(" ")[0]) + parseInt(string.split(" ")[2])
  else if (string[2] === "-") parseInt(string.split(" ")[0]) - parseInt(string.split(" ")[2])
  else if (string[2] === "/") parseInt(string.split(" ")[0]) \ parseInt(string.split(" ")[2])

return string plus " = " + answervariable;


  function formatMath(expr) {
    let answer;
    if(string.split(" ")=== "+"){
      answer =  parseInt(string.split(" ")[0]) + parseInt(string.split(" ")[2]);
    } else if(string.split(" ")=== "-"){
      answer =  parseInt(string.split(" ")[0]) - parseInt(string.split(" ")[2]);
    }  else if(string.split(" ")=== "x"){
      answer =  parseInt(string.split(" ")[0]) * parseInt(string.split(" ")[2]);
    } else{
      answer =  parseInt(string.split(" ")[0]) / parseInt(string.split(" ")[2]);
    }
return expr + " = " answer;
}


```
