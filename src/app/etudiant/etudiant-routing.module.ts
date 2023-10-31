import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEtudiantComponent } from '../list-etudiant/list-etudiant.component';
import { UpdateEtudiantComponent } from '../update-etudiant/update-etudiant.component';
import { EtudiantComponent } from './etudiant.component';

const routes: Routes = [
  {
    path: '',
    component: ListEtudiantComponent,
    children: [ {
      path: 'addetudiant',
      component: EtudiantComponent
    },
  ]
  
  },
  {
    path: "updateEtud/:id",
    component: UpdateEtudiantComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EtudiantRoutingModule {
 
 }
