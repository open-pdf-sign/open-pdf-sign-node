# open-pdf-sign-node

Node.js wrapper for open-pdf-sign CLI. This allows you to easily sign
PDF files from your node.js applications.

## Prerequisites

* nodejs
* java

## Usage

See [demo/sample.js](demo/sample.js) file for how to use with.

```javascript
const openPdfSign = require("../lib")

await openPdfSign.sign("-i demo.pdf", "-o demo.signed.pdf","-k key.pem","-c cert.pem")
```