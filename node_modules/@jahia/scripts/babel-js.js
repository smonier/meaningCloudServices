#!/usr/bin/env node
const babel = require('./babel');

console.log('Transpiling for js');

babel('build/js', {
    presets: [['@babel/env'], '@babel/react'],
    sourceMaps: true,
    plugins: ['lodash', '@babel/plugin-syntax-dynamic-import', '@jahia/scripts/dynamic-to-static']
});
