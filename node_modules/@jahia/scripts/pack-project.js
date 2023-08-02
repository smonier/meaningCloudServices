const {execSync} = require('child_process');
const semver = require('semver');

function pack() {
    console.log('Node version detected:', process.versions.node);
    const yarnVersion = execSync('yarn --version', {encoding: 'utf8'});
    console.log('Yarn version:', yarnVersion);
    const cleanPackageName = process.env.npm_package_name.replace(/@/g, '').replace(/\//g, '-');

    if (semver.satisfies(yarnVersion, '1.x')) {
        console.log('Yarn Classic detected');
        console.log(execSync('yarn pack', {encoding: 'utf8'}));
    } else if (semver.gte(yarnVersion, '2.0.0')) {
        console.log('Yarn Berry detected');
        console.log(execSync(`yarn pack --out ${cleanPackageName}-v${process.env.npm_package_version}.tgz`, {encoding: 'utf8'}));
    }
}

module.exports = pack;
