import random from './../random.js';

export default function fakeAPI2Call(value) {
  const promise = new Promise(function(resolve, reject){
    setTimeout(() => {
      resolve(value)
    }, random() * 1000);
  });
  
  return promise;
}