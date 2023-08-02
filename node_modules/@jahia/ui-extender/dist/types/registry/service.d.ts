export interface Target {
    id: string;
    priority: number;
}
export interface Service {
    key: string;
    type: string;
    targets?: string[] | Target[];
    [key: string]: unknown;
}
export interface StoredService {
    key: string;
    type: string;
    targets?: Target[];
    [key: string]: unknown;
}
