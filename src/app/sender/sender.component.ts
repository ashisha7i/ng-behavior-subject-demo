import { MessengerService } from './../messenger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  messageA = '';

  constructor(private msgSvc: MessengerService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.msgSvc.sendMessage(this.messageA);
  }

}
