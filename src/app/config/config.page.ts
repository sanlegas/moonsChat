import { Component } from '@angular/core';
import {UserManagerService} from '../service/userManager/user-manager.service';
import { ToastController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'config.page.html',
  styleUrls: ['config.page.scss']
})
export class ConfigPage {

  nombre = '';

  constructor(private userManagerService: UserManagerService, private toastController: ToastController,private router: Router) {
    this.nombre = this.userManagerService.userName;
  }

  private validateEmptyString(stringToValidate){
    return stringToValidate !== undefined && stringToValidate !== null && stringToValidate !== '';
  }

  async saveNombre(){
    if (this.validateEmptyString(this.nombre)){
      this.userManagerService.userName = this.nombre;
      const toast = await this.toastController.create({
        message: 'Nombre Guardado Correctamente',
        duration: 2000
      });
      toast.present();
      this.router.navigate(['/tabs/chat']);
    }
  }

}
