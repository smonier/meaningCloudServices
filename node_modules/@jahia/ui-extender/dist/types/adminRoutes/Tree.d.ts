export type TreeData = {
    [key: string]: unknown;
    children?: TreeData[];
};
export declare class Tree {
    data: TreeData[];
    constructor(data: TreeData[]);
    filter(predicate: (d: TreeData) => boolean): Tree;
    map(mapFunction: (d: TreeData) => TreeData): Tree;
    getData(): TreeData[];
}
