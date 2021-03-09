import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

  constructor() {

  }

  public get userName(){
    const objUserLocalStorage = localStorage.getItem('userName');
    return objUserLocalStorage;
  }

  public set userName(userNameParam){
    localStorage.setItem('userName', userNameParam);
  }

}
