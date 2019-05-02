import random from './../random.js';

export default function fakeAPI1Call(callback, result) {
    setTimeout(() => {
      callback(result);
    }, random() * 1000);
}