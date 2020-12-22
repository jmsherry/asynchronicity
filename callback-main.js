import api1Call from "./callbackAPIs/api1.js";
import api2Call from "./callbackAPIs/api2.js";
import api3Call from "./callbackAPIs/api3.js";

// To be sure of order we created callbacks, which look like this:

console.log("start async callback calls");
api1Call(function (result1) {
  console.log("result1", result1);
  api2Call(result1, function (result2) { // result1 is passed into api2Call.
    console.log("result2", result2);  // result2 is then passed into api2Call. Difficult to read, isn't it!
    api3Call(result2, function (result3) {
      console.log("result3", result3);
      console.log("end async callback calls");
    });
  });
});
