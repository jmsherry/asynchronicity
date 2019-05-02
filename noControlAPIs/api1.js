import random from './../random.js';

export default function fakeAPI1Call() {
  console.log('fakeAPI1Call executes');
  setTimeout(() => {
    console.log('fakeAPI1Call returns');
    return 1;
  }, random() * 1000);
}