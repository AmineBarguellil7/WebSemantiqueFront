import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventAddComponent } from './event-add/event-add.component';
import { EventDetailNameComponent } from './event-detail-name/event-detail-name.component';

const routes: Routes = [
  { path: '', component: EventListComponent,children:[{path:"search",component:EventDetailNameComponent}] },
  { path: 'new', component: EventAddComponent },
  { path: '/:id', component: EventEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
