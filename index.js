function testNum(num) {
  if (num < 10) {
    return Promise.resolve(`${num} is greater than 10, you win!`);
  } else {
    return Promise.reject(`${num} is less than 10, you lose!`);
  }
}

testNum(11)
  .then(response => console.log(response))
  .catch(error => console.log(error));

testNum(1)
  .then(response => console.log(response))
  .catch(error => console.log(error));

function makeAllCaps(words) {
  return new Promise(function(resolve, reject) {
    if (words.every(word => typeof word === 'string')) {
      const upperCaseWord = words.map(word => word.toUpperCase());
      resolve(upperCaseWord);
    } else {
      reject('that is not a string, try again homie');
    }
  });
}

function sortAllWords(words) {
  return new Promise(function(resolve, reject) {
    resolve(words.sort());
  })
    .then(words => words)
    .catch(reject => console.log('Not going to work, do better'));
}

makeAllCaps(words)
  .then(capitalWords => sortAllWords(capitalWords))
  .then(sortedWords => console.log(sortedWords))
  .catch(error =>
    cconsole.log(
      'The array that was given contained an element that is not a string'
    )
  );
