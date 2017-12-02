import { NavParams, NavController } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the SpFurniComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sp-furni',
  templateUrl: 'sp-furni.html'
})
export class SpFurniComponent {

  initParams = {
    window: 1,
    tivi: 0,
    door:1,
    light: 0,
    fan: 3,
    humi: 10
  }

  key: any;

  constructor(private nav: NavParams, private ctr: NavController) { 

    let id = this.nav.get('id');
    let room = this.nav.get('room');

    this.key = id+room;

    let params = localStorage.getItem(this.key);

    if(params) {

      this.initParams = JSON.parse(params);
    } else {

      localStorage.setItem(this.key,JSON.stringify(this.initParams));
    }
  }
  
  ionViewWillLeave() {
    localStorage.setItem(this.key,JSON.stringify(this.initParams));
  }

  logout() {
    localStorage.setItem('islogged','0');
    this.ctr.popToRoot();
  }

}
