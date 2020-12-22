import random from './../random.js';

export default function fakeAPI3Call(result, callback) {
  console.log('fakeAPI3Call executes');
    setTimeout(() => {
      callback(`The result was '${result}'`);
    }, random() * 1000);
}