import api1Call from './noControlAPIs/api1.js';
import api2Call from './noControlAPIs/api2.js';
import api3Call from './noControlAPIs/api3.js';

// Bad. You've no guarantee that one will work before the other. This is especially bad if you need to pass the results of calling api1 to api2, for example
console.log('sync calls');
const res1 = api1Call();
console.log(`Trying to read the result of api1call synchonously: ${res1}`);
const res2 = api2Call(res1);console.log(`Trying to read the result of api2call synchonously: ${res2}`);
const finalRes = api3Call(res2);
console.log(`Trying to read the result of api3call synchonously: ${finalRes}`);
console.log('end sync calls');