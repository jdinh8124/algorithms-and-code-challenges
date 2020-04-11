# AlTeRnAtInG cApS
- Create a function that alternates the case of the letters in a string (known as Spongecase).

## Examples
```
alternatingCaps("Hello") ➞ "HeLlO"

alternatingCaps("How are you?") ➞ "HoW aRe YoU?"

alternatingCaps("OMG this website is awesome!") ➞ "OmG tHiS wEbSiTe Is AwEsOmE!"

```

## Notes
- The first character should always be UPPERCASE.
- Ignore spaces.




### White Boarding notes
```
-Function that alternates cases AKA spongebob cases
-Input :"Hello"
-Output: "HeLlO"


-First letter is always a capital
-do not have to consider speed or memory

NOTES

-let stringToReturn = ""; empty string to start
-let count = 0
-Loop through string and check every character
  -conditional if count === 0 ===  stringToReturn+= word[i].toUpperCase
    -let count++
   else if (word[i] === " " ) stringToReturn += " ";
  else if count === is odd stringToReturn += word[i].toLowerCase;
    count++
  else count === even stringToReturn += word[i].toUpperCase;
    count++;

return stringToReturn;

PSUEDO CODE


function alternatingCaps(word){
  let stringToReturn = "";
  let count = 0;
  for(let i = 0; i < word.length; i++){
    if(count = 0){
      stringToReturn += word[i].toUpperCase();
      count++
    }else if(word[i] === " "){
      stringToReturn += " ";
    }else if(count % 2 != 0){
      stringToReturn += word[i].toLowerCase();
      count++;
    }else{
      stringToReturn += word[i].toUpperCase();
      count++;
    }
  }
  return stringToReturn;
}

```
