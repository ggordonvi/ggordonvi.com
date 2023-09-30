import { Role } from './role'

export interface Job {
    name:       string;
    startDate:  Date;
    endDate?:   Date;
    length?:    string;
    roles:      Role[];
}