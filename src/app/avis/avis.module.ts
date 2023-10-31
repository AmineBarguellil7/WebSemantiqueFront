import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvisComponent } from './avis.component';
import { AvisAddComponent } from './avis-add/avis-add.component';
import { RouterModule, Routes } from '@angular/router';
import { AvisListComponent } from './avis-list/avis-list.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AvisRoutingModule } from './avis-routing.module';
import { AvisupdateshowComponent } from './avisupdateshow/avisupdateshow.component';


@NgModule({
  declarations: [
    AvisComponent,
    AvisAddComponent,
    AvisListComponent,
    

   AvisupdateshowComponent,
  ],
  imports: [
    RouterModule,CommonModule,FormsModule,AvisRoutingModule,ReactiveFormsModule,NgxPaginationModule
  ],
  exports:[
    AvisComponent,
    AvisListComponent,
  
]
})
export class AvisModule { }
