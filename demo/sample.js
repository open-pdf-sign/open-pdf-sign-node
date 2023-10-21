const openPdfSign = require("../lib")
const fs = require('fs').promises;

//invoke the opernPdfSign CLI
//https://github.com/open-pdf-sign/open-pdf-sign
openPdfSign.sign("-i demo.pdf", "-o demo.signed.pdf","-k key_nopass.pem","-c cert.pem","--page -1")
.then(() => {
    console.log("signature successful")
})
.catch((e) => {
    console.log("error during signature",e)
})


//or use the binary directly, if binary option is given
openPdfSign.sign("--binary", "-i demo.pdf", "-k key_nopass.pem","-c cert.pem","--page -1")
    .then((binary) => {
        return fs.writeFile("demo.signed.binary.pdf", binary);
    })
    .then(() => {
        console.log("signature successful, binary written to file")
    })
    .catch((e) => {
        console.log("error during signature",e)
    })