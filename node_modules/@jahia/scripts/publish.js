#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const branch = require('git-branch');
const spawn = require('cross-spawn');
const dotenv = require('dotenv');

const json = require(path.resolve('./package.json'));
const branchName = branch.sync();

let projectName = json.name.substring(json.name.lastIndexOf('/') + 1);
let previous = projectName + '-v' + json.version;
let buildPath = fs.existsSync('build/package.json') ? 'build' : '.';

dotenv.config({path: '../../.env'});

const spawnSync = (command, params, options) => {
    let subprocess = spawn.sync(command, params, options);

    if (subprocess.stdout) {
        console.log(subprocess.stdout.toString('ascii'));
    }

    if (subprocess.status !== 0) {
        if (subprocess.stderr) {
            console.log('ERROR : ' + subprocess.stderr.toString('ascii'));
        }

        process.exit(subprocess.status);
    }

    return subprocess;
};

console.log('Releasing code from branch : ' + branchName);

// Ensure code is called from master
if (branchName !== 'master') {
    console.log('Can only release from master branch');
    process.exit(1);
}

// Get new version
const autoVersionProcess = spawnSync('yarn', ['auto', 'version', '--from', previous]);
const lines = autoVersionProcess.stdout.toString('ascii').split(/\r?\n/);

const commitsCount = lines.length - 3;
const versionChange = lines[lines.length - 2];

if (commitsCount === 0 || (versionChange !== 'patch' && versionChange !== 'minor' && versionChange !== 'major')) {
    console.log('No new version detected');
    process.exit(0);
}

// Generate changelog
spawnSync('yarn', ['auto', 'changelog', '--from', previous]);

// Bump version
console.log('Auto version change : ' + versionChange);
const npmVersionProcess = spawnSync('yarn', ['version', '--no-git-tag-version', `--${versionChange}`]);
const res = npmVersionProcess.stdout.toString().split(/\r?\n/)[1];
const newVersion = 'v' + res.substring(res.indexOf(': ') + 2);
let tag = projectName + '-' + newVersion;
console.log('Will release ' + tag);

spawnSync('git', ['add', 'package.json']);
spawnSync('git', ['commit', '-n', '-m', 'Bump ' + projectName + ' version to: ' + newVersion + ' [skip ci]']);

console.log('Pushing ..');

// Push to repository
spawnSync('git', ['push']);

console.log('Publishing ..');

// Publish
spawnSync('yarn', ['publish', buildPath, '--no-git-tag-version', '--new-version', newVersion.substr(1)]);

// Do git release
spawnSync('yarn', ['auto', 'release', '--use-version', tag, '--from', previous]);

console.log('Done');
