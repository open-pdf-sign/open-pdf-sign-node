# open-pdf-sign node.js wrapper

[![npm-image](https://img.shields.io/npm/v/open-pdf-sign.svg)](https://www.npmjs.com/package/open-pdf-sign)

Node.js wrapper for [open-pdf-sign CLI](https://github.com/open-pdf-sign/open-pdf-sign). This allows you to easily sign
PDF files from your node.js applications.

## Prerequisites

* nodejs
* java

## Installation

```bash
npm i open-pdf-sign --save
```

## Usage

See [demo/sample.js](demo/sample.js) file for how to use with.

You can use all command line parameters from the [open-pdf-sign Java CLI](https://github.com/open-pdf-sign/open-pdf-sign),
including visible signatures, signatures text, etc.

```javascript
const OpenPdfSign = require("open-pdf-sign")

await OpenPdfSign.sign("-i", "demo.pdf", "-o", "demo.signed.pdf", "-k", "key.pem", "-c", "cert.pem")
```

You can also use open-pdf-sign in your TypeScript files:

```typescript
import { OpenPdfSign } from "open-pdf-sign"

await OpenPdfSign.sign("-i", "demo.pdf", "-o", "demo.signed.pdf", "-k", "key.pem", "-c", "cert.pem")
```

## Development

After installing all dependencies and downloading the latest version
of the *open-pdf-sign* CLI application by running `npm i`,
run `npm run build` to build the typescript files.

## License

This project is licensed under the Apache 2.0-license.
