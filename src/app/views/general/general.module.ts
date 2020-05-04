import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../general/home/home.component';

import { GeneralRoutingModule } from './general-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
  ]
})
export class GeneralModule { }
