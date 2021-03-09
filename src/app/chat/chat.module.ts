import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatPage } from './chat.page';

import { Tab1PageRoutingModule } from './chat-routing.module';
import {MessageComponent} from '../message/message.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule
  ],
  declarations: [ChatPage, MessageComponent]
})
export class Tab1PageModule {


}
