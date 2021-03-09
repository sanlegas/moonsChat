import {Component, OnInit} from '@angular/core';
import {Message} from '../models/message';
import {UserManagerService} from '../service/userManager/user-manager.service';
import {SocketManagerService} from '../service/socketManager/socket-manager.service';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss']
})
export class ChatPage implements OnInit{
  mensajes: Message[] = [];
  mensajeTxt: string;

  constructor(private userManagerService: UserManagerService, private socketManager: SocketManagerService, private router: Router) {
  }

  private validateEmptyString(stringToValidate){
    return stringToValidate !== undefined && stringToValidate !== null && stringToValidate !== '';
  }

  validate(): void{
    if (!this.validateEmptyString(this.userManagerService.userName)){
      this.router.navigate(['/tabs/config']);
    }
  }

  ngOnInit(): void{
    this.validate();
    this.socketManager.getMessages().subscribe( (message: Message) => {
      if (message.name !== this.userManagerService.userName){
        message.isUserMain = false;
        this.mensajes.push(message);
      }
    });
  }
  mandaMensaje(){
    const  mensaje: Message = new Message();
    mensaje.name = this.userManagerService.userName;
    mensaje.message = this.mensajeTxt;
    mensaje.isUserMain = true;

    this.mensajes.push(mensaje);
    this.socketManager.sendMessage(mensaje);
    this.mensajeTxt = '';
  }
}
