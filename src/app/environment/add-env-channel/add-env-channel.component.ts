import { ViewChild, ElementRef, Component, OnInit, Input } from '@angular/core';
import { LightEnvChannel } from '../../services/light-env-channel';
import { LightEnvironmentService } from '../../services/light-environment.service';

@Component({
  selector: 'app-add-env-channel',
  templateUrl: './add-env-channel.component.html',
  styleUrls: ['./add-env-channel.component.css'],
  providers: [LightEnvironmentService]
})
export class AddEnvChannelComponent implements OnInit {
  @Input() buttonValue: string;
  @Input() title: string;
  @Input() environment: LightEnvChannel[];

  @ViewChild('modaldialog') modalDialog;

  orgChannel: LightEnvChannel;
  newChannel: LightEnvChannel;

  pinOptions = [
    {block: 1, value: 'PWM 0', checked: false, disabled: false},
    {block: 1, value: 'PWM 1', checked: false, disabled: false},
    {block: 1, value: 'PWM 2', checked: false, disabled: false},
    {block: 1, value: 'PWM 3', checked: false, disabled: false},
    {block: 1, value: 'PWM 4', checked: false, disabled: false},
    {block: 1, value: 'PWM 5', checked: false, disabled: false},
    {block: 2, value: 'PWM 6', checked: false, disabled: false},
    {block: 2, value: 'PWM 7', checked: false, disabled: false},
    {block: 2, value: 'PWM 8', checked: false, disabled: false},
    {block: 2, value: 'PWM 9', checked: false, disabled: false},
    {block: 2, value: 'PWM 10', checked: false, disabled: false},
    {block: 2, value: 'PWM 11', checked: false, disabled: false},
    {block: 3, value: 'PWM 12', checked: false, disabled: false},
    {block: 3, value: 'PWM 13', checked: false, disabled: false},
    {block: 3, value: 'PWM 14', checked: false, disabled: false},
    {block: 3, value: 'PWM 15', checked: false, disabled: false}
  ];

  constructor(private lightEnvironmentService: LightEnvironmentService) { }

  ngOnInit() {
    this.newChannel = new LightEnvChannel();
  }

  show(editChannel: LightEnvChannel) {
    this.orgChannel = editChannel;
    this.initNewChannel(editChannel);
    this.modalDialog.show();
  }

  initNewChannel(editChannel: LightEnvChannel) {

    let pinsInUse: string[] = [];
    for (const envChannel of this.environment) {
        pinsInUse = pinsInUse.concat(envChannel.pins);
    }

    if (editChannel == null) {
      this.newChannel = new LightEnvChannel();
      for (const pinOption of this.pinOptions) {
        pinOption.checked = false;
        if (pinsInUse.includes(pinOption.value)) {
          pinOption.disabled = true;
        } else {
          pinOption.disabled = false;
        }
      }
    } else {
      this.newChannel = new LightEnvChannel();
      this.newChannel.id = editChannel.id;
      this.newChannel.name = editChannel.name;
      this.newChannel.color = editChannel.color;
      this.newChannel.override = editChannel.override;
      this.newChannel.percentage = editChannel.percentage;
      this.newChannel.pins = editChannel.pins;
      for (const pinOption of this.pinOptions) {
        if (editChannel.pins.includes(pinOption.value)) {
          pinOption.checked = true;
          pinOption.disabled = false;
        } else {
          pinOption.checked = false;
          if (pinsInUse.includes(pinOption.value)) {
            pinOption.disabled = true;
          } else {
            pinOption.disabled = false;
          }
        }
      }
    }
  }

  pinOptionsBlock(blockNumber: number) {
    return this.pinOptions.filter(opt => opt.block === blockNumber);
  }

  commitChange(): void {
    this.newChannel.pins = this.pinOptions
          .filter(opt => opt.checked)
          .map(opt => opt.value);
    if (this.orgChannel == null) {
      this.lightEnvironmentService.addChannel(this.newChannel).subscribe(data => {
        console.log('added channel:' + JSON.stringify(data));
      });
    } else {
      this.lightEnvironmentService.updateChannel(this.newChannel).subscribe(data => {
        console.log('added channel:' + JSON.stringify(data));
      });
    }
  }

  toggleOverride() {
    this.newChannel.override = ! this.newChannel.override;
  }

  togglePin(pinValue) {
    for (const pinOption of this.pinOptions) {
       if (pinOption.value === pinValue) {
         pinOption.checked = ! pinOption.checked;
       }
    }
  }
}
