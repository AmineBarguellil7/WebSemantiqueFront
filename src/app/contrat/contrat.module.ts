import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfficheContratComponent } from './affiche-contrat/affiche-contrat.component';
import { ContratRoutingModule } from './contrat-routing.module';
import { RouterModule } from '@angular/router';
import { UpdateContratComponent } from './update-contrat/update-contrat.component';
import { AddcontratComponent } from './addcontrat/addcontrat.component';
import { ContratComponent } from './contrat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContratItemComponent } from './contrat-item/contrat-item.component';



@NgModule({
  declarations: [
    UpdateContratComponent ,
    AddcontratComponent,
    ContratComponent,
    AfficheContratComponent,
    ContratItemComponent
  ],
  imports: [
    CommonModule,
    ContratRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
  ],
  exports:[
    UpdateContratComponent ,
    AddcontratComponent,
    ContratComponent,
    AfficheContratComponent,
    ContratItemComponent
 
  ]
})
export class ContratModule { }
