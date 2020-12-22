import random from './../random.js';

export default function fakeAPI1Call(callback) {
  console.log('fakeAPI1Call executes');
    setTimeout(() => {
      const mockResult = 1;
      callback(mockResult);
    }, random() * 1000);
}