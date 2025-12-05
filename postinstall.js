#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const url = 'https://github.com/open-pdf-sign/open-pdf-sign/releases/latest/download/open-pdf-sign.jar';
const dest = path.join(__dirname, 'lib', 'open-pdf-sign.jar');

const dir = path.dirname(dest);
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

console.log(`Updating open-pdf-sign lib ${url} to ${dest}...`);

async function download() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        // Read the whole file into memory and write it out
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        fs.writeFileSync(dest, buffer);

        // Verify that the file is actually there and has a size
        const stat = fs.statSync(dest);
        console.log(`Download completed. Size: ${stat.size} bytes.`);
        process.exit(0);
    } catch (err) {
        console.error('Updating open-pdf-sign failed:', err.message);
        if (fs.existsSync(dest)) {
            fs.unlinkSync(dest);
        }
        process.exit(0);
    }
}

download();
