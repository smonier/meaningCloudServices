import { Tree } from './Tree';
import { StoredService } from '~/registry/service';
export declare const useAdminRouteTreeStructure: (target: string, selected: string) => {
    tree: Tree;
    defaultOpenedItems: string[];
    routes: StoredService[];
    allPermissions: unknown[];
};
