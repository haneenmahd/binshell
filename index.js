const os = require("os");
const fs = require("fs");

const userName = os.userInfo().username;

const BIN_PATH_WIN32 = "C://$Recycle.Bin/";
const BIN_PATH_UNIX = `/home/${userName}/.local/share/Trash`;
const BIN_PATH_LINUX = `/home/${userName}/.local/share/Trash`;

/**
 * This function returns the path according to the Operating System
 * @return {string} The path to the recycle bin
 */
function getBinPath() {
    const platform = os.platform();

    switch(platform) {
        case "unix":
            return BIN_PATH_UNIX;
        case "linux":
            return BIN_PATH_LINUX;
        case "win32":
            return BIN_PATH_WIN32;
        default:
            throw new Error("Unable to find the architecture of this machine!");
    }
}

class BinShell {
    constructor() {

    }

    static readBin(callback, options) {
        const asyncData = fs.readdir(getBinPath(), options || {
            encoding: "utf-8"
        }, (err, data) => {
            callback(err, data);
        });

        return asyncData;
    }

    static readBinSync(options) {
        const syncData = fs.readdirSync(getBinPath(), options || "utf-8");

        return syncData;
    }
}

module.exports = BinShell;