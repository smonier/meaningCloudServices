#!/usr/bin/env node
const babel = require('./babel');

console.log('Transpiling for esm');

babel('build/esm', {
    presets: [['@babel/env', {modules: false}], '@babel/react'],
    sourceMaps: true,
    plugins: ['lodash', '@babel/plugin-syntax-dynamic-import']
});
