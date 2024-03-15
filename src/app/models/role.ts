import { KeyMetric } from "./keymetric";

export interface Role {
    name: string;
    startDate: Date | null;
    endDate: Date | null;
    description: string;
    bulletPoints: string[];
    keyMetrics: KeyMetric[];
}