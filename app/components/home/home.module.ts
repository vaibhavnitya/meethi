import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeComponent } from './home.component';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { dashboardModule } from '../dashboard/dashboard.module';
import { conversationModule } from '../conversation/conversation.module';

@NgModule({
  imports: [CommonModule, dashboardModule, conversationModule],
  declarations: [
    homeComponent,
    PolymerElement('iron-autogrow-textarea')
  ],
  exports: [homeComponent]
})
export class homeModule { }