/*fill the following variables with values according to their names*/

var array_var = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //fill with 10 numbers between 1 and 20
var array2_var; //leave empty
var array3_var = ["Mark", "Mike", "Eric", "Laura", "Lisa", "Don", "Herb", "Sidney", "Alice", "John"]; //fill with the names of 10 classmates
var object_literal_var; //leave empty
var object2_literal_var =
{
  'Functions': {
    description: 'A memory of things to do',
    fun_factor: 7
  },

  'conditionals': {
    description: 'the comparison of data',
    fun_factor: 6
  },

  'repeat blocks': {
    description: 'The ability to loop through something to find one or more things and items',
    fun_factor: 8
  },

  'jquery': {
    description: 'A library of code that makes code more condensed and easier to write',
    fun_factor: 10
  }

}


/***************************************/

//using the variables above, do the following
/*
2) create a function, 'find_val'.
    @purpose: finds the times a number is found in an array
    @params:
      needle: the number to be found
      haystack: the array to search
    @globals: none
    @returns: a number with the count of times needle was found in haystack
    example: some_function(5,[3,2,5,5,1,2,5]) would return 3
    hint: make a variable to hold the times the number was found and increment it
    test: use number_var and array_var to call your function and test it
*/
array2_var = array_var.slice();
array2_var[0] = 11;
console.log("array2:", array2_var);

var number_var = 6;

function find_val(needle, haystack) {
  var numCount = 0;
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      numCount += 1;
    }
  } return numCount;
}
console.log(find_val(number_var, array_var));
/*****************************************
3) create a function, 'pick_rating'.
    @purpose: chooses a random number inside an array, pairs it with a name in another array, and puts those two values into an object literal {name:?, rating:?}, and pushes that object into a new array
    @params:
      ratings: the array with numbers inside to randomly choose
      names: the array to names to pair numbers with
    @globals: none
    @returns: an array with objects inside it.  Each object has one of the names from the name array, and one of the ratings from the ratings array
    example:
        some_function([2,5,1,2,4],['Bob','Clyde','Gertrude'])
        would return
            [
              {name: 'Bob', rating: 5},
              {name: 'Clyde', rating: 1},
              {name: 'Gertrude', rating: 4}
            ]
    hint: your names array should dictate how many times your loop runs.
    test: call your function using array3_var and array_var
*/


function pick_rating(ratings, names) {
  var randomArrayNumPlusName = [];
  for (var i = 0; i < names.length; i++) {
    randomArrayNumPlusName.push({ name: names[i], rating: ratings[Math.floor(Math.random() * ratings.length)] });
  } return randomArrayNumPlusName;
}

console.log(pick_rating(array_var, array3_var));


/*****************************************
4) create a function, 'assign_topics'.
    @purpose: takes an array of names and an object of topics.  Randomly picks a number of topics, and assigns them to the names, outputting an array of objects with names and topics
    @params:
      names: the array to names to pair numbers with
      topics: an object with topics inside it
    @globals: none
    @returns: an array with objects inside it.  Each object has one of the names from the name array, and one or more topics from the original topic object
    example:
    var topics =  {'underwater basket weaving': {
            description: 'the weaving of baskets underwater',
            fun_factor: 5
    },
    'badminton debate': {
            description: 'make friends and influence enemies with a birdie and racket',
            fun_factor: 8
    },}
        some_function(['Bob'],topics)
        would return
            [
              {name: 'Bob', topics: {'underwater basket weaving': {
            description: 'the weaving of baskets underwater',
            fun_factor: 5}
               }
            ]
    hint: a random number of topics should be assigned to each name, and each topic assigned randomly
    test: call your function using array3_var and object2_literal_var

*/

function assign_topics(names, topics) {
  var randomTopicsPlusName = [];
  var randomNumberOfTopics;
  var randomTopic = Object.keys(topics)[Math.floor(Math.random() * Object.keys(topics).length)];
  for (var i = 0; i < names.length; i++) {
    randomNumberOfTopics = Math.floor(Math.random() * Object.keys(topics).length);
    for (var j = 0; j < randomNumberOfTopics.length; j++) {
      randomTopic += Object.keys(topics)[Math.floor(Math.random() * Object.keys(topics).length)];
      return randomTopic;
    }
    randomTopicsPlusName.push({ names: names[i], topics: randomTopic });
  } return randomTopicsPlusName;
}
console.log(assign_topics(array3_var, object2_literal_var));


//     function assign_topics(names, topics){
//     var randomTopicsPlusName = [];
//     var randomTopics;
//     var randomAmountOfTopics
//   for (var i = 0; i < names.length; i++) {
//     var indexTopic;
//     indexTopic = topics[Math.floor(Math.random() * Object.keys(topics).length)];
//     randomAmountOfTopics = Math.floor(Math.random() * Object.keys(topics).length);
//      if(randomAmountOfTopics === 1 ){
//       randomTopics = indexTopic;
//      }else if(randomAmountOfTopics === 2){
//      randomTopics = indexTopic + " " + indexTopic;
//      }else if(randomAmountOfTopics === 3){
//       randomTopics = indexTopic + " " + indexTopic + " " + indexTopic;
//      }else{
//        randomTopics = indexTopic + " " + indexTopic + " " + indexTopic + " " + indexTopic;
//      }
//     randomTopicsPlusName.push({ names: names[i], topics: randomTopics});
//   } return randomTopicsPlusName;
// }
