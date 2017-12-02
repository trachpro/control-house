import { SpFurniComponent } from './furni/sp-furni/sp-furni';
import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';

/**
 * Generated class for the RoomComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'room',
  templateUrl: 'room.html'
})
export class RoomComponent {

  rooms = [];
  house: any;

  constructor(private navParams: NavParams, private nav: NavController) {

    this.house = this.navParams.get('house');
  }

  chooseRoom(room) {

    this.nav.push(SpFurniComponent, {
      room: room,
      id: this.house.id
    })
  }

  logout() {
    localStorage.setItem('islogged','0');
    this.nav.popToRoot();
  }
}
