import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { RoomComponent } from './room/room';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'main-page'
})
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  houses = [
    { id: 1, title: "house1", content: " this is the first house", rooms: ['kitchen', 'livingroom','bathroom','bedroom']},
    { id: 2, title: "house2", content: " this is the second house", rooms: ['kitchen', 'livingroom','bathroom','bedroom']},
    { id: 3, title: "house3", content: " this is the third house", rooms: ['kitchen', 'livingroom','bathroom','bedroom']},
    { id: 4, title: "house4", content: " this is the fouth house", rooms: ['kitchen', 'livingroom','bathroom','bedroom']},
    { id: 5, title: "house5", content: " this is the fifth house", rooms: ['kitchen', 'livingroom','bathroom','bedroom']},
    { id: 6, title: "house6", content: " this is the sixth house", rooms: ['kitchen', 'livingroom','bathroom','bedroom']},
    { id: 7, title: "house7", content: " this is the seventh house", rooms: ['kitchen', 'livingroom','bathroom','bedroom']}
  ]

  searchToggle = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  ngOnInit() {
  
  }

  choseHouse(house) {

    this.navCtrl.push(RoomComponent, {
      house: house
    })
  }

  logout() {
    localStorage.setItem('islogged','0');
    this.navCtrl.popToRoot();
  }
}
