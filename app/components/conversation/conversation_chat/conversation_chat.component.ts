import { Component, Input, EventEmitter, ViewChild, ElementRef, OnInit } from '@angular/core';


/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  selector: 'st-conversation-chat',
  templateUrl: 'app/components/conversation/conversation_chat/conversation_chat.component.html',
  styleUrls: ['app/components/conversation/conversation_chat/conversation_chat.component.css']
})
export class conversationChatComponent {

  @Input() chatData: any;
  message: string= '';
  time: string= '';
  direction: string= '';

  ngOnInit() {
	  this.message = this.fetchMessage();
	  this.time = this.fetchTime();
		this.direction = this.chatData.direction;
  }

  fetchMessage () {
	  return (this.chatData && this.chatData.message)? this.chatData.message : '';
  }

  fetchTime () {
	  let time = '';
	  let date;
	  let hours;
	  if (this.chatData.time) {
		date = new Date(this.chatData.time);
		time = date.getMinutes().toString() + ':' + date.getSeconds().toString();
		hours = date.getHours();
		if (hours > 11) {
			if (hours === 12) {
				time = hours.toString() + ':' + time + ' PM';
			} else {
				time = (hours - 12).toString() + ':' + time + ' PM';
			}
		} else {
			time = date.getHours().toString() + ':' + time + ' AM';
		}
	  }
	  return time;
  }

  

}