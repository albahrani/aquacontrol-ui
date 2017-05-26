import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

import { LightEnvironmentService } from '../services/light-environment.service';
import { LightEnvChannel } from '../services/light-env-channel';

@Component({
  selector: 'app-light-environment',
  templateUrl: './light-environment.component.html',
  styleUrls: ['./light-environment.component.css'],
  providers: [LightEnvironmentService]
})
export class LightEnvironmentComponent implements OnInit, OnDestroy {
    private subscription: Subscription;

    environment: LightEnvChannel[];

    constructor(private lightEnvironmentService: LightEnvironmentService) { }

    ngOnInit(): void {
        const timer = TimerObservable.create(0, 5000);
        this.subscription = timer.subscribe(t => {
            this.lightEnvironmentService.getChannels().subscribe(env => {
                this.environment = env;
            });
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    getChannelOverrideText(override: boolean): string {
        return override === true ? 'Manual' : 'Automatic';
    }

    getChannelPinsString(channel: LightEnvChannel): string {
        const sortedPins = channel.pins.sort((n1, n2) => {
            if (n1 > n2) {
                return 1;
            }

            if (n1 < n2) {
                return -1;
            }

            return 0;
        });
        return sortedPins.join(', ');
    }

    trackHero(index, channel) {
        return channel ? channel.id : undefined;
    }
}
