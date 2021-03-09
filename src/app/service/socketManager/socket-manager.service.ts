import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable, Observer} from 'rxjs';
import {Message} from '../../models/message';

@Injectable({
  providedIn: 'root'
})
export class SocketManagerService {

  constructor(private socket: Socket) { }


  public sendMessage(message: Message){
    this.socket.emit('message', message);
  }

  public getMessages = () => {

    return new Observable( (observer: Observer<any>) => {
      this.socket.on('message', (msg) => {
        observer.next(msg);
      });
    });
  }

}
