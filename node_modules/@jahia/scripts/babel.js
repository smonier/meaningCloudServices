#!/usr/bin/env node
const babel = require('@babel/core');
const path = require('path');
const fs = require('fs');
const glob = require('glob');
const fx = require('mkdir-recursive');

const defaultIgnore = [
    '__mocks__/**',
    '__storybook__/**',
    '**/*.test.[tj]s',
    '**/*.spec.[tj]s',
    '**/*.test.[tj]sx',
    '**/*.spec.[tj]sx',
    '**/*.stories.[tj]sx',
    '**/*.d.ts'
];

function transform(buildFolder, conf, ignore) {
    const files = [
        ...glob.sync('**/*.[tj]s', {ignore: ignore || defaultIgnore, cwd: 'src'}),
        ...glob.sync('**/*.[tj]sx', {ignore: ignore || defaultIgnore, cwd: 'src'})
    ];

    files.forEach(file => {
        const result = babel.transformFileSync(path.resolve('src', file), conf);

        const target = path.resolve(buildFolder, file).replace(/\.[tj]sx?$/, '.js');
        const folder = path.resolve(target, '..');

        if (!fs.existsSync(folder)) {
            fx.mkdirSync(folder);
        }

        if (result.map) {
            result.code += '\n' + result.map.sources.map(m => '//# sourceMappingURL=' + m.replace(/\.[tj]sx?$/, '.js') + '.map\n');
        }

        fs.writeFileSync(target, result.code);
        fs.writeFileSync(target + '.map', JSON.stringify(result.map));

        console.log('Transpiled file ' + target);
    });
}

module.exports = transform;
