import random from './../random.js';

export default function fakeAPI2Call(value) {
  console.log('fakeAPI2Call executes');
  const promise = new Promise(function(resolve, reject){
    setTimeout(() => {
      const mockResult = value % 2 === 0 ? 'even' : 'odd';
      resolve(mockResult);
    }, random() * 1000);
  });
  
  return promise;
}