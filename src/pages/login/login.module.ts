import { RegistComponent } from './regist/regist';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { FormsModule} from '@angular/forms';
// import { RouterModule, Router } from '@angular/router';


@NgModule({
  declarations: [
    LoginPage,
    RegistComponent
  ],
  imports: [
    // RouterModule,
    IonicPageModule.forChild(LoginPage),
    FormsModule,
  ],
  entryComponents:[
    LoginPage,
    RegistComponent
  ],
  exports:[
    LoginPage,
    RegistComponent
  ],
  providers: [
    // Router
  ]
})
export class LoginPageModule {}
