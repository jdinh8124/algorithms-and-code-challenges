## Early programming work when starting

```

function createMultiplicationTable(multArg1, multArg2, multArg3, multArg4) {
 var multTable = [];
 for(var firstLoopNumArg = multArg1; firstLoopNumArg <= multArg2; firstLoopNumArg++){
      for(var secondLoopNumArg = multArg3; secondLoopNumArg <= multArg4; secondLoopNumArg++){
        multTable.push(firstLoopNumArg * secondLoopNumArg);
      }
    }return multTable;
  }
 createMultiplicationTable(1, 3, 2, 5);

 createMultiplicationTable(-2, +2, 10, 13);


```
