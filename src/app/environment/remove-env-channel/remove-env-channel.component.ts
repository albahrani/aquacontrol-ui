import { ViewChild, Component, OnInit } from '@angular/core';
import { LightEnvChannel } from '../../services/light-env-channel';
import { LightEnvironmentService } from '../../services/light-environment.service';

@Component({
  selector: 'app-remove-env-channel',
  templateUrl: './remove-env-channel.component.html',
  styleUrls: ['./remove-env-channel.component.css'],
  providers: [LightEnvironmentService]
})
export class RemoveEnvChannelComponent implements OnInit {

  @ViewChild('modaldialog') modalDialog;

  removeChannel: LightEnvChannel;

  constructor(private lightEnvironmentService: LightEnvironmentService) { }

  ngOnInit() {
    this.removeChannel = new LightEnvChannel();
    this.removeChannel.name = '<undefined>';
  }

  show(removeChannel: LightEnvChannel) {
    this.removeChannel = removeChannel;
    this.modalDialog.show();
  }

  commitChange(): void {
      this.lightEnvironmentService.deleteChannel(this.removeChannel).subscribe(data => {
        console.log('removed channel:' + JSON.stringify(data));
      });
  }
}
