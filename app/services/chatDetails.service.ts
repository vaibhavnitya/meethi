import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class ChatDetailsService {

  private Todo: any = {
    data: [
      {
        from: 'amar',
        to: 'akbar',
        time: 1491495245975,
        direction: 'sent',
        type: 'message',
        message: 'Hello How are you'
      },
      {
        from: 'akbar',
        to: 'amar',
        time: 1491495416851,
        direction: 'received',
        type: 'message',
        message: 'I am good. This is awesome day'
      },
      {
        from: 'amar',
        to: 'akbar',
        time: 1491495436069,
        direction: 'sent',
        type: 'message',
        message: 'I agree with you. come on! lets have a drink'
      }
    ]
  };

  private itodos: BehaviorSubject<any> = new BehaviorSubject<any>(this.Todo);
  // private baseUrl: string;
  // private dataStore: {  // This is where we will store our data in memory
  //   todos: Todo[]
  // };

  get conversation() {
    return this.itodos.asObservable();
  }

  pushConversation(conversation) {
    this.Todo.data.push(conversation);
  }

  /**
    * Handle HTTP error
    */
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

