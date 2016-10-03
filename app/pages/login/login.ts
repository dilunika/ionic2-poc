/**
 * Created by dilunika on 3/10/16.
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
    templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {

    constructor(public nav: NavController) {

    }

    public login() {
        this.nav.push(HomePage);
    }
}
