import api1Call from "./promiseAPIs/api1.js";
import api2Call from "./promiseAPIs/api2.js";
import api3Call from "./promiseAPIs/api3.js";

(async () => {
  console.log("start async/await calls");
  try {
    const result1 = await api1Call();
    console.log('result1', result1);

    const result2 = await api2Call(result1);
    console.log('result2', result2);

    const result3 = await api3Call(result2);
    console.log("final result", result3);
    
  } catch (err) {
    console.log(err);
    return;
  } finally {
    console.log("finally block");
  }

  console.log("end async/await calls");
})();
