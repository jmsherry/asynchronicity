import random from './../random.js';

export default function fakeAPI1Call() {
  console.log('fakeAPI1Call executes');
  // This (below) is how you 'Promisify' something that doesn't return a promise. Lots of modern libraries, like fetch, axios, etc. will return a promise, but if they don't then you construct one and return in from your function; this allows you to then anywhere. 
  const promise = new Promise(function(resolve, reject){
    setTimeout(() => {
      const mockResult = 1;
      resolve(mockResult);
    }, random() * 1000);
  })
  // .then(resp => resp); //<-- you can then() in one file and when you import it to another file you can .then() in that file too. The then function just loads handlers into an array inside the promise. Then handlers are executed in order, with the result of each being passed to the next.
  
  return promise;
}

// (async function(){
// await ssdfsd();
// }());