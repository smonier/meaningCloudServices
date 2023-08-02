import { IOptions } from './index';
export interface AstQuery {
    ast: any;
    query(query: string): any[];
    querySubtree(subtree: any, query: string): any[];
}
export interface ImportedPropType {
    importedName: string;
    localName: string;
}
export interface ImportedPropTypes {
    propTypesName: string | undefined;
    propTypes: ImportedPropType[];
}
export declare function createTypings(moduleName: string | null, programAst: any, options: IOptions, reactImport: string): string;
export declare function propTypeQueryExpression(propTypesName: string | undefined): string;
