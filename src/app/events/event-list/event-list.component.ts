import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event/event.service';
import { Event } from 'src/app/models/Event';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Event[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getAll().subscribe((data) => {
    this.events = data;
    });
  }

}
