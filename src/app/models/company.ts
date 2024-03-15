import { Role } from "./role";

export interface Company {
    name: string;
    startDate: Date | null;
    endDate: Date | null;
    roles: Role[];
}