//find binary
import * as path from "path";
import {exec} from "child_process";

const which = require('which')

let openpdfsignJar = path.join(__dirname, "open-pdf-sign.jar")
let javaBinary: string | null = null;

export const OpenPdfSign = {
    async sign(...params: Array<number | string>) {
        //allow also array as param
        if (params.length === 1 && Array.isArray(params)) {
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

        let args: Array<number | string> = [javaBinary, "-jar", '"' + openpdfsignJar + '"'];
        args = args.concat(params)
        let fullIncovation = args.join(" ");

        //invoke open-pdf-sign
        await (async () => {
            return new Promise<void>((resolve, reject) => {
                exec(fullIncovation, async function (error, stdout, stderr) {
                    if (error !== null) {
                        console.log("open-pdf-sign error: " + error);
                        reject(error)
                    } else {
                        console.log("pdf signed")
                        resolve()
                    }
                })
            })
        })();
    }
}