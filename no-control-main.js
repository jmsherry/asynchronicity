import api1Call from './noControlAPIs/api1.js';
import api2Call from './noControlAPIs/api2.js';
import api3Call from './noControlAPIs/api3.js';

// Bad. You've no guarantee that one will work before the other. This is especially bad if you need to pass the results of calling api1 to api2, for example
console.log('sync calls');
api1Call();
api2Call();
api3Call();
console.log('end sync calls');