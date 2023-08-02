#!/usr/bin/env node
require('dotenv').config();
const {execSync} = require('child_process');
const pack = require('./pack-project');
const fs = require('fs');

const args = process.argv.slice(2);
const deployMethod = process.env.JAHIA_DEPLOY_METHOD;
const cleanPackageName = process.env.npm_package_name.replace(/@/g, '').replace(/\//g, '-');
const packageFileName = `${cleanPackageName}-v${process.env.npm_package_version}.tgz`;

if (!fs.existsSync(packageFileName)) {
    console.log('Package hasn\'t been built previously, packing now using jahia-pack...');
    pack();
} else if (args.length > 0 && args[0] === 'pack') {
    console.log('Forced packing is active, packing...');
    pack();
}

if (deployMethod === 'curl') {
    console.log('Deploying URL curl to Jahia bundles REST API...');
    console.log(execSync(`curl -s --user ${process.env.JAHIA_USER} --form bundle=@./${packageFileName} --form start=true ${process.env.JAHIA_HOST}/modules/api/bundles`, {encoding: 'utf8'}));
} else {
    console.log('Deploying using Docker copy...');
    console.log(execSync(`docker cp ${packageFileName} ${process.env.JAHIA_DOCKER_NAME}:/var/jahia/modules`, {encoding: 'utf8'}));
}
