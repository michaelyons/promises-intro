function testNum(num) {
  if (num < 10) {
    return Promise.resolve(`${num} is greater than 10`);
  } else {
    return Promise.reject(`${num} is less than 10`);
  }
}

testNum(11)
  .then(response => console.log(response))
  .catch(error => console.log(error));

testNum(1)
  .then(response => console.log(response))
  .catch(error => console.log(error));
