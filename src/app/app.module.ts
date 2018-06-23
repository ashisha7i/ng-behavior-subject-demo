import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SenderComponent } from './sender/sender.component';
import { RecieverOneComponent } from './reciever-one/reciever-one.component';
import { RecieverTwoComponent } from './reciever-two/reciever-two.component';
import { RecieverThreeComponent } from './reciever-three/reciever-three.component';

@NgModule({
  declarations: [
    AppComponent,
    SenderComponent,
    RecieverOneComponent,
    RecieverTwoComponent,
    RecieverThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
