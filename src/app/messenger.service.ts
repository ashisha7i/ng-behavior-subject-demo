import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  _bhvrSub: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  messages = this._bhvrSub.asObservable();

  constructor() { }

  sendMessage(message: string): void {
    console.log('Got \'' + message + '\' sending forward...');
    const tempArr: string[] = [];
    tempArr.push(message);

    this._bhvrSub.next(tempArr);
  }

  sendMessages(messages: string[]): void {
    this._bhvrSub.next(messages);
  }
}
