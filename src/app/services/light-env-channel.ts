export class LightEnvChannel {
    color: string;
    name: string;
    id: string;
    override: boolean;
    percentage: number;
    pins: string[];

    constructor() {
        this.color = '#ffffff';
        this.override = false;
        this.percentage = 0;
        this.pins = [];
    }
}
