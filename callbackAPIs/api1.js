import random from './../random.js';

export default function fakeAPI1Call(callback) {
    setTimeout(() => {
      const mockResult = 1;
      callback(mockResult);
    }, random() * 1000);
}