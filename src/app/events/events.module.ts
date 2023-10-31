import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventAddComponent } from './event-add/event-add.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventListComponent } from './event-list/event-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EventsComponent,
    EventAddComponent,
    EventEditComponent,
    EventListComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule
  ]
})
export class EventsModule { }
