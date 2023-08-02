import { Service } from './service';
declare function composeServices(...services: Partial<Service>[]): Partial<Service>;
export { composeServices };
