import random from './../random.js';

export default function fakeAPI1Call(callback, result) {
    setTimeout(() => {
      var mockResult = result % 2 === 0 ? 'even' : 'odd'
      callback(mockResult);
    }, random() * 1000);
}