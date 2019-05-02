import random from './../random.js';

export default function fakeAPI2Call(value) {
  console.log('fakeAPI2Call executes');
  setTimeout(() => {
    console.log('fakeAPI2Call returns');
    return value % 2 === 0 ? 'even' : 'odd'
  }, random() * 1000);
}