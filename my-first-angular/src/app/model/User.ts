import { Company } from './Company';

export interface User {
    id: number;
    name: string;
    company: Company; // Optional property, can be undefined
}