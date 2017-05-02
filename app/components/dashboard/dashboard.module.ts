import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dashboardComponent } from './dashboard.component';
import { PolymerElement } from '@vaadin/angular2-polymer';

@NgModule({
  imports: [CommonModule],
  declarations: [
    dashboardComponent,
    PolymerElement('iron-autogrow-textarea')
  ],
  exports: [dashboardComponent]
})
export class dashboardModule { }