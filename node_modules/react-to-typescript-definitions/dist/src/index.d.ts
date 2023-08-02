import { Generator } from './generator';
export interface InstanceOfResolver {
    (name: string): string | undefined;
}
export declare type IOptions = Options;
export interface Options {
    /**
     * Resolves type names to import paths.
     *
     * @return Path to given name if resolveable, undefined otherwise
     */
    instanceOfResolver?: InstanceOfResolver;
    /**
     * The Generator generating .d.ts code with.
     *
     * This option is deprecated with 0.13 and is not supported anymore.
     * any new feature will not work with the deprecated Generator interface.
     * @deprecated
     */
    generator?: Generator;
    /**
     * Could be given if the generator is started with an AST.
     *
     * This is helpful to create better messages in case of errors/warnings.
     *
     * @type {string}
     * @memberOf Options
     */
    source?: string;
    /**
     * Could be given to show filename in error/warning messages.
     *
     * @type {string}
     * @memberOf Options
     */
    filename?: string;
    /**
     * EOL character. This would be changed to whatever is liked to
     * terminate lines. Defaults to '\r\n'
     *
     * @type {string}
     * @memberOf Options
     */
    eol?: string;
    /**
     * babylon plugins. Allow users to set additional plugins.
     *
     * @type {string[]}
     * @memberOf Options
     */
    babylonPlugins?: string[];
}
export declare function cli(options: any): void;
export declare function generateFromFile(moduleName: string | null, path: string, options?: IOptions, reactImport?: string): string;
export declare function generateFromSource(moduleName: string | null, code: string, options?: IOptions, reactImport?: string): string;
export declare function generateFromAst(moduleName: string | null, ast: any, options?: IOptions, reactImport?: string): string;
