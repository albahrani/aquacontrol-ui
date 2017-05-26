import { Component, OnInit } from '@angular/core';
import { DimmingPlanTime } from '../services/dimming-plan-time';
import { DimmingPlanChannel } from '../services/dimming-plan-channel';

class DimmingPlanAddFormData {
    time: string = null;
    percentage: string = null;
}

const DIMMING_PLAN_CHANNELS: DimmingPlanChannel[] = [
    { id: 'white', name: 'White', color: '#e5e5e5', times: [
        { hour: 6, minute: 0, percentage: 0},
        { hour: 9, minute: 0, percentage: 1},
        { hour: 21, minute: 0, percentage: 1},
        { hour: 21, minute: 30, percentage: 0}]
    },
    { id: 'blue', name: 'Blue', color: '#9999ff', times: [
        { hour: 6, minute: 0, percentage: 1},
        { hour: 9, minute: 15, percentage: 0},
        { hour: 21, minute: 25, percentage: 0},
        { hour: 21, minute: 30, percentage: 1}]
    },
    { id: 'red', name: 'Red', color: '#ff9999', times: [
        { hour: 20, minute: 45, percentage: 0},
        { hour: 21, minute: 0, percentage: 0.5},
        { hour: 21, minute: 5, percentage: 1},
        { hour: 21, minute: 25, percentage: 0}]
    }
];

@Component({
  selector: 'app-light-dimming-plan',
  templateUrl: './dimming-plan.component.html',
  styleUrls: ['./dimming-plan.component.css']
})
export class DimmingPlanComponent implements OnInit {

  plan: DimmingPlanChannel[];

  newTimeFormData: Map<string, DimmingPlanAddFormData> = new Map();

  constructor() { }

  ngOnInit() {
      this.plan = DIMMING_PLAN_CHANNELS;
      for (const channel of this.plan) {
          this.newTimeFormData.set(channel.id, new DimmingPlanAddFormData());
      }
  }

  getTimeFormData(channelId: string): DimmingPlanAddFormData {
      return this.newTimeFormData.get(channelId);
  }

  addTime(channelId: string): void {
      const newTime = this.newTimeFormData.get(channelId);
      const result = newTime.time.match(/([0-9]{1,2}):([0-9]{1,2})/);

      if (result == null) {
          return;
      }

      const dpTime = new DimmingPlanTime();
      dpTime.hour = +result[1];
      dpTime.minute = +result[2];

      dpTime.percentage = +newTime.percentage / 100;

      DIMMING_PLAN_CHANNELS.filter(c => c.id === channelId).forEach(c => {
          const unsortedTimes = c.times.concat(dpTime);

          c.times = unsortedTimes.sort((t1, t2) => {

              const t1Minutes = t1.hour * 60 + t1.minute;
              const t2Minutes = t2.hour * 60 + t2.minute;

              if (t1Minutes < t2Minutes) {
                  return -1;
              } else if (t1Minutes > t2Minutes) {
                  return 1;
              }

              return 0;
          });
      });
  }

  removeTime(channelId: string, time: DimmingPlanTime) {
      DIMMING_PLAN_CHANNELS.filter(c => c.id === channelId).forEach(c => {
          const index = c.times.findIndex(t => {return this.compareTimes(t, time); });
          c.times.splice(index, 1);
      });
  }

  private compareTimes(t1: DimmingPlanTime, t2: DimmingPlanTime): boolean {
    return ((t1.hour === t2.hour) && (t1.minute === t2.minute) && (t1.percentage === t2.percentage));
  }
}
