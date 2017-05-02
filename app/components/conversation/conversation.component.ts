import { Component, Output, EventEmitter, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ChatDetailsService } from '../../services/chatDetails.service';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  selector: 'st-conversation',
  templateUrl: 'app/components/conversation/conversation.component.html',
  styleUrls: ['app/components/conversation/conversation.component.css']
})
export class conversationComponent {

  constructor(private chatDetailsService: ChatDetailsService) {}

  conversationData: any = [];

  ngOnInit() {
    let self = this;
    this.chatDetailsService.conversation.subscribe(conversation => {
      self.conversationData = conversation.data;
    });
  }

  sendMessage(messageData) {
    let messageObject = {
      from: 'amar',
      to: 'akbar',
      time: (new Date).getTime(),
      direction: 'sent',
      type: 'message',
      message: messageData
    }
    this.chatDetailsService.pushConversation(messageObject);
  }

  onScrollDown() {
    console.log('loading more...');
  }

  onScrollUp() {
    console.log('loading more');
  }

}