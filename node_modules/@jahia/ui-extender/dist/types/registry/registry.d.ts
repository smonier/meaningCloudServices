import { Service, StoredService } from '~/registry/service';
declare class Registry {
    registry: {
        [key: string]: StoredService;
    };
    constructor();
    addOrReplace(type: string, key: string, ...services: Partial<Service>[]): StoredService;
    add(type: string, key: string, ...services: Partial<Service>[]): StoredService;
    get(type: string, key: string): StoredService;
    remove(type: string, key: string): void;
    find(filters: {
        target?: string;
        [key: string]: unknown;
    }): StoredService[];
    clear(): void;
}
declare const registry: Registry;
export { registry };
