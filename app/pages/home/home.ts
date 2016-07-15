import {Component} from '@angular/core';
// import {NavController} from 'ionic-angular';

import {Facebook} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  payload: string = '';
  authReponse: any;

  constructor() {
    this.getStatus();
  }

  getStatus = () => {
    Facebook.getLoginStatus()
      .then(payload => {
        this.payload = JSON.stringify(payload);
      })
      .catch(err => alert(`Error: ${err}`));
  }

  login = () => {
    Facebook.login(['email'])
      .then(payload => {
        this.payload = JSON.stringify(payload);
      })
      .catch(err => alert(`Error: ${err}`));
  }

  logout = () => {
    Facebook.logout()
      .then(payload => {
        this.payload = JSON.stringify(payload);
      })
      .catch(err => alert(`Error: ${err}`));
  }
}
