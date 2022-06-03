import random from './../random.js';

export default function fakeAPI3Call(value) {
  console.log('fakeAPI3Call executes');
  setTimeout(() => {
    console.log('fakeAPI3Call returns');
    return value;
  }, random() * 1000);
}