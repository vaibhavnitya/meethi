import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { conversationChatComponent } from './conversation_chat.component';
import { PolymerElement } from '@vaadin/angular2-polymer';

@NgModule({
  imports: [CommonModule],
  declarations: [conversationChatComponent,
    PolymerElement('paper-card')
  ],
  exports: [conversationChatComponent]
})

export class conversationChatModule { }