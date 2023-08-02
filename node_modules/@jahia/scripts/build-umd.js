#!/usr/bin/env node
const rollup = require('rollup');
const babel = require('@babel/core');
const path = require('path');
const fs = require('fs');
const UglifyJS = require('uglify-js');

const configCode = babel.transformFileSync(path.resolve('./rollup.config.js'), {
    presets: ['@babel/env']
}).code;
// eslint-disable-next-line no-eval
const config = eval(configCode);

async function build() {
    const json = require(path.resolve('./package.json'));

    const bundle = await rollup.rollup(config);

    function getName(name) {
        return name.replace(/[@_-]/g, '').replace(/\//, '.');
    }

    let baseName = 'build/lib' + json.name.substr(json.name.indexOf('/'));

    let output = {
        file: baseName + '.umd.js',
        format: 'umd',
        name: getName(json.name),
        sourcemap: true,
        globals: config.external.reduce(
            (acc, val) => Object.assign(acc, {[val]: getName(val)}),
            {}
        )
    };

    await bundle.write(output);

    let code = fs.readFileSync(output.file, {encoding: 'UTF-8'});

    code = UglifyJS.minify(code);

    fs.writeFileSync(baseName + '.umd.min.js', code.code);
}

build();
