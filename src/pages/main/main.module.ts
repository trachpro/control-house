import { SpFurniComponent } from './room/furni/sp-furni/sp-furni';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { RoomsComponent } from './rooms/rooms';
import { RoomComponent } from './room/room';
import { FurniComponent } from './room/furni/furni';

@NgModule({
  declarations: [
    MainPage,
    RoomsComponent,
    RoomComponent,
    FurniComponent,
    SpFurniComponent
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
  ],
  entryComponents: [
    MainPage,
    RoomsComponent,
    RoomComponent,
    FurniComponent,
    SpFurniComponent
  ]
})
export class MainPageModule {}
