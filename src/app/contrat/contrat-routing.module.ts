import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContratComponent } from './contrat.component';
import { UpdateContratComponent } from './update-contrat/update-contrat.component';
import { AddcontratComponent } from './addcontrat/addcontrat.component';
import { AfficheContratComponent } from './affiche-contrat/affiche-contrat.component';
const routes: Routes = [
  {path : 'contrat' , component : ContratComponent },
{path : 'ajoutercontrat' , component : AddcontratComponent },
{path : 'contrat/updatecontrat/:id' , component : UpdateContratComponent }, 
{path : 'Listecontrat' , component : AfficheContratComponent },
{path : 'listec' , component : AfficheContratComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratRoutingModule { }
