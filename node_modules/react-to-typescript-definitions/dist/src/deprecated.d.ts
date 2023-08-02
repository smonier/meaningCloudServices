import { IOptions } from './index';
export declare enum ExportType {
    default = 0,
    named = 1
}
export interface IProp {
    type: string;
    optional: boolean;
    importPath?: string;
    documentation?: string;
}
export interface IPropTypes {
    [name: string]: IProp;
}
export declare function generateTypings(moduleName: string | null, ast: any, options: IOptions): string;
