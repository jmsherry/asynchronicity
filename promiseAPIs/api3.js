import random from './../random.js';

export default function fakeAPI2Call(value) {
  console.log('fakeAPI3Call executes');
  const promise = new Promise(function(resolve, reject){
    setTimeout(() => {
      resolve(`The result was '${value}'`)
    }, random() * 1000);
  });
  
  return promise;
}