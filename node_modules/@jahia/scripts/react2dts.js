#!/usr/bin/env node
const fs = require('fs');
const generateFromFile = require('react-to-typescript-definitions').generateFromFile;

function dtsGen(source) {
    let target = source.slice(0, -4) + '.d.ts';
    fs.writeFileSync(target, generateFromFile(null, source));
    console.log(`Generated ${target}`);
}

dtsGen(process.argv[2]);
