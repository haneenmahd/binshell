const os = require("os");
const fs = require("fs");

const BIN_PATH_WIN32 = "C://$Recycle.Bin/";

/**
 * This function returns the path according to the Operating System
 * @return {string} The path to the recycle bin
 */
function getBinPath() {
    const platform = os.platform();

    switch(platform) {
        case "win32":
            return BIN_PATH_WIN32;
        default:
            throw new Error("Unable to find the architecture of this machine!");
    }
}

class BinShell {
    /**
     * Reads the directory asynchronously
     * @param {(err: Error, data: string[]) => void} callback 
     * @param {{
     *  encoding: BufferEncoding,
     *  withFileTypes?: false
     * } | BufferEncoding} options 
     * @returns {void}
     */
    static readBin(callback, options) {
        const asyncData = fs.readdir(getBinPath(), options || {
            encoding: "utf-8"
        }, (err, data) => {
            callback(err, data);
        });

        return asyncData;
    }

    /**
     * 
     * @param {{
     *  encoding: BufferEncoding,
     *  withFileTypes?: false
     * } | BufferEncoding} options 
     * @returns 
     */
    static readBinSync(options) {
        const syncData = fs.readdirSync(getBinPath(), options || "utf-8");

        return syncData;
    }

    /**
     * @returns {string} The path to Recycle bin
     */
    get binPath() {
        return getBinPath();
    }
}

module.exports = BinShell;
