function sortContacts(names, sort) {
  if (!names || names.length < 1) {
    return [];
  }
    names.sort(function (a, b) {
      let lastNameLetterofWordOne = a.indexOf(" ") + 1;
      let lastNameLetterofWordTwo = b.indexOf(" ") + 1;
      if (a[lastNameLetterofWordOne] > b[lastNameLetterofWordTwo]){
        return 1
      } else if (a[lastNameLetterofWordOne] < b[lastNameLetterofWordTwo]){
        return -1;
      }else{
        return 0
      }
    })

    if(sort === 'DESC'){
      return names.reverse()
    }

    return names
}
