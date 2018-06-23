import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../messenger.service';

@Component({
  selector: 'app-reciever-two',
  templateUrl: './reciever-two.component.html',
  styleUrls: ['./reciever-two.component.css']
})
export class RecieverTwoComponent implements OnInit {
  messages: string[] = [];

  constructor(private msgSvc: MessengerService) { }

  ngOnInit() {
    this.msgSvc.messages.subscribe(messages => {
      this.messages = messages.slice();
    });
  }

}
