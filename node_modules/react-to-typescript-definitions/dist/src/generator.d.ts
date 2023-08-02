import { IPropTypes, ExportType } from './deprecated';
export declare class Generator {
    private static readonly NL;
    private indentLevel;
    private code;
    private indent;
    nl(): void;
    declareModule(name: string, fn: () => void): void;
    import(decl: string, from: string, fn?: () => void): void;
    props(name: string, props: IPropTypes, fn?: () => void): void;
    prop(name: string, type: string, optional: boolean, documentation?: string): void;
    comment(comment: string): void;
    interface(name: string, fn: () => void): void;
    exportDeclaration(exportType: ExportType, fn: () => void): void;
    class(name: string, props: boolean, fn?: () => void): void;
    toString(): string;
}
