import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { ListEtudiantComponent } from '../list-etudiant/list-etudiant.component';
import { EtudiantComponent } from './etudiant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateEtudiantComponent } from '../update-etudiant/update-etudiant.component';



@NgModule({
  declarations: [
    ListEtudiantComponent,
    EtudiantComponent,
    UpdateEtudiantComponent,

  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  exports:[
    ListEtudiantComponent,
    EtudiantComponent,
    UpdateEtudiantComponent,
  ]
})
export class EtudiantModule { }
