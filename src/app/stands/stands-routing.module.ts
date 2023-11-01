import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandsComponent } from './stands.component';
import { StandListComponent } from './stand-list/stand-list.component';
import { StandSearchComponent } from './stand-search/stand-search.component';

const routes: Routes = [
  { path: '', component: StandListComponent,children:[{path:"search",component:StandSearchComponent}] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandsRoutingModule { }
