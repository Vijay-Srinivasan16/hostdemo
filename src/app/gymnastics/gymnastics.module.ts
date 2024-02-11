import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymnasticsRoutingModule } from './gymnastics-routing.module';
import { ListComponent } from './list/list.component';

import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    GymnasticsRoutingModule,
    MatCardModule
  ]
})
export class GymnasticsModule { }
