import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { layoutComponent } from './layout.component';

import { loginModule } from '../login/login.module';
import { homeModule } from '../home/home.module';

@NgModule({
  imports: [CommonModule, loginModule, homeModule],
  declarations: [layoutComponent],
  exports: [layoutComponent]
})
export class layoutModule { }