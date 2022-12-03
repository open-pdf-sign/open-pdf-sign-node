# open-pdf-sign-node

Node.js wrapper for open-pdf-sign CLI. This allows you to easily sign
PDF files from your node.js applications.

## Prerequisites

* nodejs
* java

## Installation

```bash
npm i open-pdf-sign
```

## Usage

See [demo/sample.js](demo/sample.js) file for how to use with.

```javascript
const OpenPdfSign = require("open-pdf-sign")

await OpenPdfSign.sign("-i demo.pdf", "-o demo.signed.pdf","-k key.pem","-c cert.pem")
```