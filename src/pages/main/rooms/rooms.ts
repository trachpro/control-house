import { Component, ViewEncapsulation, Input } from '@angular/core';

/**
 * Generated class for the RoomsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'rooms',
  templateUrl: 'rooms.html',
  encapsulation: ViewEncapsulation.None
})
export class RoomsComponent {

  @Input() house: any;
  src: any;

  ngOnChanges() {

    if(this.house) {

      this.src = 'assets/imgs/house' + this.house.id + '.jpg';
    }
  }

  constructor() {}

}
