export interface Role {
    name:          string;
    startDate:     Date;
    endDate?:      Date;
    length?:       string;
    description:   string;
    bulletPoints:  string[];
}