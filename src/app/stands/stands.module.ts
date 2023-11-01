import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandsRoutingModule } from './stands-routing.module';
import { StandsComponent } from './stands.component';
import { StandListComponent } from './stand-list/stand-list.component';
import { StandSearchComponent } from './stand-search/stand-search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StandsComponent,
    StandListComponent,
    StandSearchComponent
  ],
  imports: [
    CommonModule,
    StandsRoutingModule,
    FormsModule
  ]
})
export class StandsModule { }
