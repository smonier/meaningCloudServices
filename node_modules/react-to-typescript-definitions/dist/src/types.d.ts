import { IOptions } from './index';
import { AstQuery, ImportedPropTypes } from './typings';
export interface TypeDeclaration {
    type: any;
    optional: boolean;
}
export declare function get(ast: AstQuery, propertyAst: any, importedPropTypes: ImportedPropTypes, options: IOptions): TypeDeclaration;
