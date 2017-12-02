import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the RegistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'regist',
  templateUrl: 'regist.html'
})
export class RegistComponent {

  accounts: any;
  username: any;
  password1: any;
  password2: any;
  noti = null;
  isOk = false;

  constructor(public navParams: NavParams) {

    this.accounts = this.navParams.get('params');
  }

  ngOnInit() {
    
  }

  checkMatch() {

    if(this.password1 != this.password2) {

      this.noti = "the two password are not match!";
    } else {

      this.noti = '';
    }
  }

  regist() {
    this.isOk = false;
    if(!this.username || !this.password1 || !this.password2) {

      this.noti = "All field have to be fullfilled!";
      return;
    }

    this.checkMatch();
    
    if(!this.noti) {

      let flag = false;

      this.accounts.forEach(element => {

        if(element.username == this.username) {
  
          this.noti = "the username was in use! choose other please!";
          flag = true;
          return;
        }
      });

      if(!flag) {

        this.accounts.push({
          username: this.username,
          password: this.password1
        });

        localStorage.setItem('accounts',JSON.stringify(this.accounts));
        this.isOk = true;
      }
    }
  }

  enter(event) {

    if(event.keyCode == 13) {
      this.regist();
    }
  }

}
