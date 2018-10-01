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
