import api1Call from './callbackAPIs/api1.js';
import api2Call from './callbackAPIs/api2.js';
import api3Call from './callbackAPIs/api3.js';

// To be sure of order we created callbacks, which look like this:

console.log('start async calls');
api1Call(function(result1){
  console.log('result1', result1);
  api2Call(function(result2){
  console.log('result2', result2);
    api3Call(function(result3){
      console.log('result3', result3);
      console.log('end async calls');
    }, result2);
  }, result1); // result1 is passed into api2Call. The result of that call is result 2. Difficult to read, isn't it!
});
