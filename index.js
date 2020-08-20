const cbfy = require("./test");
const wait = require("wait.for");

wait.launchFiber(() => { console.log(cbfy.getSVG()) });