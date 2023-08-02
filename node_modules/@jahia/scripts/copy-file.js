const path = require('path');
const fs = require('fs');
const fx = require('mkdir-recursive');

function copyFile(srcFolder, destFolder, file, newFile) {
    const source = path.resolve(srcFolder, file);
    if (fs.lstatSync(source).isFile()) {
        newFile = newFile || file;
        const target = path.resolve(destFolder, newFile);
        fx.mkdirSync(path.resolve(target, '..'));
        fs.createReadStream(source).pipe(fs.createWriteStream(target));
        console.log(`Copied ${source} to ${target}`);
    }
}

module.exports = copyFile;
