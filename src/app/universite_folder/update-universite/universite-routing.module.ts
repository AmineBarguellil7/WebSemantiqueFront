import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficheUniversiteComponent } from './affiche-universite/affiche-universite.component';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { UniversiteComponent } from './universite/universite.component';
import { UpdateUniversiteComponent } from './update-universite.component';

const routes: Routes = [{
  path: 'universites',
  component: ListUniversiteComponent
},
{
  path: 'adduniversite',
  component: UniversiteComponent
},
{
  path: 'universites/updateuniversite/:idUniv',
  component: UpdateUniversiteComponent
},{path : 'Listeuniversite' , component : AfficheUniversiteComponent},
{path : 'listeuniversite' , component : AfficheUniversiteComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
