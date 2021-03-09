import { Component } from '@angular/core';
import {UserManagerService} from '../service/userManager/user-manager.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private userManagerService: UserManagerService) {}

  private validateEmptyString(stringToValidate){
    return stringToValidate !== undefined && stringToValidate !== null && stringToValidate !== '';
  }

  public usuarioIsRegistered(){

    return this.validateEmptyString(this.userManagerService.userName);
  }

}
