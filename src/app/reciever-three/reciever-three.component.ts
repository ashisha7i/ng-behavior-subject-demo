import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../messenger.service';

@Component({
  selector: 'app-reciever-three',
  templateUrl: './reciever-three.component.html',
  styleUrls: ['./reciever-three.component.css']
})
export class RecieverThreeComponent implements OnInit {
  messages: string[] = [];

  constructor(private msgSvc: MessengerService) { }

  ngOnInit() {
    this.msgSvc.messages.subscribe(messages => {
      this.messages = messages.slice();
    });
  }
}
