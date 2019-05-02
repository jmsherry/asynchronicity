# Asynchronicity Demo

JavaScript is asynchronous because we can't stop the program to wait for server responses, etc.

Here I demonstrate the inital problem (with no async control); then I show how we used callbacks and the legibility issues they can cause (aka Pyramid of Doom); then we do promises to show how we can flatten this stuff out and use `.then()`s to build a process; finally I show `async/await` which makes it possible to write asynchronous code in the synchronous style that you're used to.

**N.B. You will have to serve these files.**, rather than just open them, because es6 modules don't work with the file api (`file:///`). I'd suggest <https://www.npmjs.com/package/http-server>.