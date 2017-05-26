import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { LightEnvChannel } from './light-env-channel';

class ACEnvChannel {
  name: string;
  color: string;
  pins: string[];
}

@Injectable()
export class LightEnvironmentService {

  private getChannelsUrl = 'http://localhost:8081/channels';
  private addChannelUrl = 'http://localhost:8081/channels';

  constructor(private http: Http) { }

  getChannels(): Observable<LightEnvChannel[]> {
    return this.http.get(this.getChannelsUrl).map(res => res.json()).map(data => {
      const returnChannels = [];
      // console.log('getChannels:' + JSON.stringify(data));
      const channelIds = Object.getOwnPropertyNames(data);
      for (const channelId of channelIds) {
        const returnChannel = new LightEnvChannel();
        returnChannel.id = channelId;
        returnChannel.name = data[channelId].name;
        returnChannel.color = data[channelId].color;
        returnChannel.override = false;
        returnChannel.percentage = 0;
        returnChannel.pins = data[channelId].pins;
        returnChannels.push(returnChannel);
      }
      return returnChannels;
    });
  }

  addChannel(channel: LightEnvChannel): Observable<Response> {
    const acEnvChannel = new ACEnvChannel();
    acEnvChannel.name = channel.name;
    acEnvChannel.color = channel.color;
    acEnvChannel.pins = channel.pins;

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.addChannelUrl}/${channel.id}`;
    return this.http.put(url, acEnvChannel, {headers: headers});
  }

  updateChannel(channel: LightEnvChannel): Observable<Response> {
    const acEnvChannel = new ACEnvChannel();
    acEnvChannel.name = channel.name;
    acEnvChannel.color = channel.color;
    acEnvChannel.pins = channel.pins;

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.addChannelUrl}/${channel.id}`;
    // let body = JSON.stringify(acEnvChannel);
    return this.http.post(url, acEnvChannel, {headers: headers});
  }

  deleteChannel(channel: LightEnvChannel): Observable<Response> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.addChannelUrl}/${channel.id}`;
    return this.http.delete(url, {headers: headers});
  }
}
