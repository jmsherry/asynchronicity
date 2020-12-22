import api1Call from "./promiseAPIs/api1.js";
import api2Call from "./promiseAPIs/api2.js";
import api3Call from "./promiseAPIs/api3.js";

//ANYWAY, that's not that great and easy to read. So how does that look with promises? (N.B. These functions are made by us, but IRL they'll be made by 3rd party clients, for calling their APIs, (EXCEPT when their client doesn't return a promise, then see api1.js for how we do that for them .#promisifying )
console.log("async promise calls");
api1Call() // executing this returns a promise, that's why we can .then()
  .then((result1) => {
    console.log("result1", result1);
    // api2Call also returns a promise, that's why we can .then() again
    return api2Call(result1); // <-- the result of this call
  })
  .then((result2) /* ends up here */ => {
    console.log("result2", result2);
    return api3Call(result2);
  })
  .then((result3) => {
    console.log("result3", result3);
    console.log("end async promise calls");
  })
  .catch((err) => {
    console.log(err);
  });

// SEE how each .then() is a stage of the process?
