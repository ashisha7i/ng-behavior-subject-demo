import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../messenger.service';

@Component({
  selector: 'app-reciever-one',
  templateUrl: './reciever-one.component.html',
  styleUrls: ['./reciever-one.component.css']
})
export class RecieverOneComponent implements OnInit {

  messages: string[] = [];

  constructor(private msgSvc: MessengerService) { }

  ngOnInit() {
    this.msgSvc.messages.subscribe(messages => {
      this.messages = messages.slice();
    });
  }

}
