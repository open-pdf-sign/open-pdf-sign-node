//find binary
import * as path from "path";
import {execFile} from "child_process";

const which = require('which')

let openpdfsignJar = path.join(__dirname, "open-pdf-sign.jar")
let javaBinary: string | null = null;

export const OpenPdfSign = {
    async sign(...params: Array<number | string>) {
        //allow also array as param
        if (params.length === 1 && Array.isArray(params[0])) {
            // @ts-ignore
            params = params[0];
        }

        //initialize java binary first
        if (javaBinary === null) {
            javaBinary = await which('java', {nothrow: true})
        }

        if (javaBinary === null) {
            console.log("open-pdf-sign: no java in PATH")
            throw "no java in path"
        }

        // Run Java in headless mode to avoid AWT/X11 on Linux/servers
        let args: Array<string> = ["-Djava.awt.headless=true", "-jar", openpdfsignJar, ...params.map(String)];

        //invoke open-pdf-sign
        return await (async () => {
            return new Promise<Buffer|void>((resolve, reject) => {
                execFile(javaBinary as string, args, { encoding: 'buffer' }, async function (error, stdout, stderr) {
                    if (error !== null) {
                        console.log("open-pdf-sign error: " + error);
                        reject(error)
                    } else {
                        if (stdout && stdout.length > 0) {
                            resolve(stdout);
                        }
                        else {
                            resolve();
                        }
                    }
                })
            })
        })();
    }
}
module.exports = OpenPdfSign