import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventAddComponent } from './event-add/event-add.component';

const routes: Routes = [
  { path: '', component: EventListComponent, pathMatch: 'full' },
  { path: 'new', component: EventAddComponent },
  { path: '/:id', component: EventEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
