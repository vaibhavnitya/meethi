import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loginComponent } from './login.component';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { AuthenticationService } from '../../services/authentication.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    loginComponent
  ],
  exports: [loginComponent],
  providers: [AuthenticationService]
})
export class loginModule { }