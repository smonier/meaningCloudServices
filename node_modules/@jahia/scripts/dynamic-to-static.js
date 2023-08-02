'use strict';

// Based on https://www.npmjs.com/package/babel-plugin-transform-dynamic-import-to-static
// Plugin that convert dynamic imports (introduced for webpack code splitting) into static import / resolved promise.
// Used for JS transpilation, to avoid leaving import() statements in code

const babelImports = require('@babel/helper-module-imports');
const IMPORTS_TO_ADD = 'importsToAdd';

module.exports = () => ({
    visitor: {
        Program: {
            enter: (path, {file}) => {
                file.set(IMPORTS_TO_ADD, []);
            },
            exit: (path, {file}) => {
                const imports = file
                    .get(IMPORTS_TO_ADD)
                    .concat()
                    .reverse();
                imports.forEach(imp => {
                    const identifier = babelImports.addDefault(path, imp.moduleName);
                    imp.path.parentPath.replaceWithSourceString(`Promise.resolve(${identifier.name})`);
                });
            }
        },
        Import: {
            enter: (path, {file}) => {
                const moduleName = path.container.arguments[0].extra.rawValue;

                const importsToAdd = file.get(IMPORTS_TO_ADD);

                if (importsToAdd.filter(imp => imp.moduleName === moduleName).length === 0) {
                    file.set(
                        IMPORTS_TO_ADD,
                        importsToAdd.concat({
                            moduleName,
                            path
                        })
                    );
                }
            }
        }
    }
});
