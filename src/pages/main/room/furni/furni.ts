import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';

/**
 * Generated class for the FurniComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'furni',
  templateUrl: 'furni.html'
})
export class FurniComponent {

  @Input() id: any;
  @Input() room: any;
  img: any;

  constructor(private ctr: NavController) { }

  ngOnChanges() {

    if (this.room) {

      this.img = 'assets/imgs/' + this.room + '.jpg';
      console.log("room: ", this.img);
    }
  }

  logout() {
    localStorage.setItem('islogged','0');
    this.ctr.popToRoot();
  }
}
