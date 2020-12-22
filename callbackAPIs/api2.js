import random from './../random.js';

export default function fakeAPI1Call(result, callback) {
  console.log('fakeAPI2Call executes');
    setTimeout(() => {
      var mockResult = result % 2 === 0 ? 'even' : 'odd'
      callback(mockResult);
    }, random() * 1000);
}