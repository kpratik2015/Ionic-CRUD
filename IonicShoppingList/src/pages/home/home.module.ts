import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { IonicPageModule } from 'ionic-angular';


@NgModule({
    declarations: [HomePage],
    imports: [IonicPageModule.forChild(HomePage)] // HomePage will be lazy loaded in the future.
})

export class HomeModule {

}