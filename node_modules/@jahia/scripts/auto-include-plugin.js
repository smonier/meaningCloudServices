Object.defineProperty(exports, '__esModule', {value: true});

const core = require('@auto-it/core');

const regExp = /^([a-zA-Z0-9-]+)-(v[0-9.]+)$/;
// Monkey-patch determineNextVersion
const previous = core.determineNextVersion;
core.determineNextVersion = (lastVersion, currentVersion, bump, tag) => {
    // Strip module name from tag
    const match = lastVersion.match(regExp);
    if (match) {
        return previous(match[2], currentVersion, bump, tag);
    }

    return previous(lastVersion, currentVersion, bump, tag);
};

/** Ensure a value is an array */
const arrayify = arr => (Array.isArray(arr) ? arr : [arr]);
class FilterCommitsByFolderPlugin {
    /** Initialize the plugin with it's options */
    constructor(options) {
        /** The name of the plugin */
        this.name = 'Include only commits which include at least a file in one of the specified folders';
        this.options = {
            paths: options.paths ? arrayify(options.paths) : []
        };
    }

    /** Tap into auto plugin points. */
    apply(auto) {
        auto.hooks.onCreateLogParse.tap(this.name, logParse => {
            logParse.hooks.omitCommit.tap(this.name, commit => {
                // Remove current working directory which is added by a path.resolve
                // https://github.com/intuit/auto/blob/v8.6.0/packages/core/src/git.ts:309
                const files = commit.files
                    .map(f => f.substr(process.cwd().length + 1))
                    .filter(f => this.options.paths.filter(p => f.startsWith(p)).length > 0); // Keep only files in the requested folder

                // Output the commit hash - needed to count the accepted commits
                if (files.length > 0) {
                    console.log(commit.hash);
                }

                // Skip (return true) if no file in the commit matches one of the base path
                return files.length === 0;
            });
        });
    }
}
exports.default = FilterCommitsByFolderPlugin;
