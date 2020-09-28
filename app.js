console.log("Write your code below!")

function sayHello(name){
  console.log(`Hello, ${name}`);
}

function letterCount(name){
  if(name.length > 4) {
    console.log(`${name}, your name has ${name.length} letters. That's a pretty long name!`);
  } else {
    console.log(`${name}, your name has ${name.length} letters. That name's not that long!`);
  }
}

function greetPeople(names){
  names.forEach(name => {
    sayHello(name)
    letterCount(name)
  })
}

function speakingGrandma(phrase){
  if(phrase === phrase.toUpperCase()){
    console.log(`NO, NOT SINCE 1938!`);
  } else {
    console.log(`HUH? SPEAK UP, DEAR!`);
  }
}


function kebabToTitleCase(filenames){
  let finalArray = [];
  let toTitleCase = (word) => {
    let parts = word.split('-')
    let output = []
  
    parts.forEach(part => {
      let capFirstLetter = part[0].toUpperCase()
      let restOfWord = part.slice(1)
      output.push(`${capFirstLetter}${restOfWord}`);
    })
    return output.join('');
  }
 for (let i = 0; i < filenames.length; i++){
   finalArray.push(toTitleCase(filenames[i]));
 }
 return finalArray;
}
//Write your test cases below this comment


//do not editing anything below this comment.
module.exports = {
  sayHello,
  letterCount,
  greetPeople,
  speakingGrandma,
  kebabToTitleCase
};
