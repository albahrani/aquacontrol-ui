import { DimmingPlanTime } from './dimming-plan-time';

export class DimmingPlanChannel {
    color: string;
    name: string;
    id: string;
    times: DimmingPlanTime[];

    constructor() {
        this.color = '#ffffff';
        this.times = [];
    }
}
