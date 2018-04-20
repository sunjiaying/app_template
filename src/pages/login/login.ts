import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  // login: UserOptions = { username: '', password: '' };

  constructor(
    public navCtrl: NavController
  ) {

  }

}
