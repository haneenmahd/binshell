const os = require("os");
const BinShell = require("../index");

console.log(`Running on -> ${os.platform()}`);

console.log("Running asynchronous Test🛠️\n\n");

BinShell.readBin((err, data) => {
    console.log(data);
    console.log("")
});

setTimeout(() => {
    console.log("Running synchronous Test🛠️");
    console.log(BinShell.readBinSync());
}, 300);

