import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input()  name: string;
  @Input()  message: string;
  @Input()  isUserMain: boolean;

  imgUsr: string;

  constructor() { }

  ngOnInit() {
    if (this.isUserMain){
      this.imgUsr = 'https://electronicssoftware.net/wp-content/uploads/user.png';
    }else{
      this.imgUsr = 'https://img.pngio.com/avatar-icon-of-flat-style-available-in-svg-png-eps-ai-icon-png-avatar-256_256.png';
    }
  }

}
