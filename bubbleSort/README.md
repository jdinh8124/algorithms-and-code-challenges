# Bubble Sort Array Function
- Create a function that accepts an array and sort in in accending order

## Example
```
input : [1, 0, 5, 7];
output : [0, 1 , 5 , 7];
```


### White Boarding Notes
- Create a function that accepts an arr and returns the arr in acc order
- input [1,0,5,7]
- Output [0,1,5,7]
- Special cases no
- If finished early make a bubble sort in desc order

- Create a let variable changes = true
- Using a while loop that checks if there were changes
  in while loop changes will be set to false
  -for(loop that checks if a number at an index is larger than its right neighbor)
    if true we set changes to true
    -we then create a variable called temp set it to i + 1
    - set i to i + 1
    - set i to temp;
    exit for loop


    eventually if changes stays at false then we return our arr



    ### Creating the function
```
function bubbleSort(arr){

  let changes = true;
  while(changes){
    changes = false
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > arr[i + 1]){
        changes = true;
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
  }
  return arr;
}


```
