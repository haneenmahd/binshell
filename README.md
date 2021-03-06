# BinShell
BinShell is a package for accessing Windows Recycle Bin Directory Natively from Node.js

# Installation
Using npm
```sh
npm install binshell
```

Using yarn
```sh
yarn add binshell
```
# Usage
There are two main static functions inside the class `BinShell`.
- `readBin` : reads the directory asynchronously (non-blocking)

```js
import BinShell from "binshell";

BinShell.readBin((err, data) => {
    for (const d in data) {
        console.log(d);
    }
});
```
- `readBinSync` : reads the directory synchonously

```js
import BinShell from "binshell";

const binContent = BinShell.readBinSync();

console.log(binContent);
```

It also have a getter to get the Bin Path.
- `binPath`: returns a string to the recycle bin path

# Contributing
[Open](https://gitpod.io/#https://github.com/haneenmahd/binshell) this project in gitpod. <br>
Feel free to contribute to this project.

# License
BinShell is Licensed under Apache License Version 2.0
