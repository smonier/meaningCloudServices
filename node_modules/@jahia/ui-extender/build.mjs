#!/usr/bin/env node

import babel from '@jahia/scripts/babel.js';
import config from './babel.build.config.js';

console.log('Transpiling for js');
babel('dist/js', {...config, presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']});
console.log('Transpiling for esm');
babel('dist/esm', config);
