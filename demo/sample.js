const openPdfSign = require("../lib")
//invoke the opernPdfSign CLI
//https://github.com/open-pdf-sign/open-pdf-sign
openPdfSign.sign("-i demo.pdf", "-o demo.signed.pdf","-k key_nopass.pem","-c cert.pem","--page -1")
.then(() => {
    console.log("signature successful")
})
.catch((e) => {
    console.log("error during signature",e)
})