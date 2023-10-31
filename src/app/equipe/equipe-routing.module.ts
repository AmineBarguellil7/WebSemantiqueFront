import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherEquipeComponent } from './afficher-equipe/afficher-equipe.component';
import { EditEquipeComponent } from './edit-equipe/edit-equipe.component';
import { EquipeComponent } from './equipe.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { AddStoreComponent } from '../Store/add-store/add-store.component';
import { ListStoreComponent } from '../Store/list-store/list-store.component';
import { EditStoreComponent } from '../Store/edit-store/edit-store.component';

const routes: Routes = [
  {
    path: 'addequipe',
    component: AddStoreComponent,
},
{
  path: 'equipes',
  component: ListStoreComponent,
},
{
    path:'equipes/modifier/:idT', component: EditStoreComponent,
    children: [
      {
        path:'refresh', component: ListEquipeComponent
      },]
  },
  {
    path:'listequipe', component: ListStoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
