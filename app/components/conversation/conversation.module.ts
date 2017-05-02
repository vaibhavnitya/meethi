import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { conversationComponent } from './conversation.component';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { InfiniteScrollModule } from 'angular2-infinite-scroll'; 

import { conversationChatModule } from './conversation_chat/conversation_chat.module';

import { ChatDetailsService } from '../../services/chatDetails.service';

@NgModule({
  imports: [CommonModule, conversationChatModule, InfiniteScrollModule],
  declarations: [
    conversationComponent,
    PolymerElement('iron-autogrow-textarea'),
    PolymerElement('iron-icon'),
    PolymerElement('paper-button')
  ],
  exports: [conversationComponent],
  providers: [ChatDetailsService]
})
export class conversationModule { }