import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistComponent } from './regist/regist';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name: 'login-page'
  }
)
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username: any;
  password: any;
  islogged: any;
  noti = true;

  accounts = [
    {username: "admin", password: "123"},
    {username: "user2", password: "user"},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {

    let a = localStorage.getItem("accounts");

    let b = localStorage.getItem('islogged');

    if(b) {

      this.islogged = JSON.parse(b);
      this.goToMain();
    }
    

    if(!a) {

      localStorage.setItem("account",JSON.stringify(this.accounts));
    } else {

      this.accounts = JSON.parse(a);
    }
  }

  ionViewDidLoad() {
  }

  login() {
    this.noti = false;
    this.accounts.forEach(element => {

      if(element.username == this.username && element.password == this.password) {

        this.islogged = 1;
        localStorage.setItem('islogged','1');
        console.log("log ok!");
        this.noti = true;
        this.goToMain();
        return;
      }
    })
  }

  goToMain() {

    if(this.islogged) {

      console.log("log ok!");
      this.navCtrl.push('main-page');
    }
  }

  goToRegist() {
    this.navCtrl.push(RegistComponent,{
      params: this.accounts
    });
  }

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.login();
    }
  }
}
