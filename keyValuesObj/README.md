# Convert Key, Values in an Object to Array
- Write a function that converts an object into an array of keys and values.

## Examples
```
objectToArray({
  D: 1,
  B: 2,
  C: 3
}) ➞ [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
})

```


### Whiteboard Notes

```
-function that takes obj and turns into array of keys and values
-input : {
  D: 1,
  B: 2,
  C: 3
}

- output : ["D", 1], ["B", 2], ["C", 3]

-Speical cases : none


-for in loop
- array to return with array of keys an values
- for in loop variables to push to the array to return



- function that accepts an object as a argument
- In the function, created a const variable to store an array to return
- create a for in loop that is going to iterate over the object
- In each iteration we are going to create a new array with key at index zero, value at index one
- we are going to push into the arrayToReturn
- when the for in loop finishes we are going to return arrayToReturn

function objectToArray(object){
  const arrToReturn = [];
  for(let key in object){
      let arrToPush = [key , object[key]];
      arrToReturn.push(arrToPush);
  }
  return arrToReturn;
}
