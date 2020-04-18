function filterUnique(arr) {
  const arrToReturn = []
  arr.map(item =>{
    let unique = true;
    for(let i = 0; i < item.length; i++){
      let splitArr= item.split("")
    }
    if(unique){
      arrToReturn.push(item);
    }
  })
  retirm arrToReturn;
}
