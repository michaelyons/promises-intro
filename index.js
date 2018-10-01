function testNum(num) {
  if (num < 10) {
    return Promise.resolve(`${num} is greater than 10`);
  } else {
    return Promise.reject(`${num} is less than 10`);
  }
}
