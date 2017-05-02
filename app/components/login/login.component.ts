import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  selector: 'st-login',
  templateUrl: 'app/components/login/login.component.html',
  styleUrls: ['app/components/login/login.component.css']
})
export class loginComponent {

    constructor(public AuthenticationService: AuthenticationService) {}

    // generic Instantiate event EventEmitter
    @Output() isLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();
    @ViewChild('username') username: ElementRef;
    @ViewChild('password') password: ElementRef;

    /**
     * @method loginSubmit
     * @param none
     * @description binds to the login service to make the network authentication
    */
    loginSubmit() {
        let userData = {
            username: this.username.nativeElement.value,
            password: this.password.nativeElement.value
        };

        if (userData.username && userData.password) {
            var c = this.AuthenticationService.login(userData);
            // this.isLoggedIn.emit(true);
        } else {
            return false;
        }
    }
 }