#!/usr/bin/env node

const copyFile = require('./copy-file');
const glob = require('glob');

console.log('Preparing build folder');

function typingsCopy() {
    // Create index.d.ts
    glob.sync('**/index.js', {cwd: 'src'}).forEach(file => {
        copyFile('src', 'build/esm', file, file.slice(0, -3) + '.d.ts');
    });

    glob.sync('**/*.d.ts', {cwd: 'src'}).forEach(file => {
        copyFile('src', 'build/esm', file);
    });

    glob.sync('**', {cwd: 'resources'}).forEach(file => {
        copyFile('resources', 'build/resources', file);
    });
}

copyFile('.', 'build', 'README.md');
copyFile('.', 'build', 'package.json');
typingsCopy();
