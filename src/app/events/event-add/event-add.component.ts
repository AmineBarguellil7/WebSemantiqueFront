import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/Event';
import { EventService } from 'src/app/service/event/event.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {
  event: Event = new Event();

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("hello")
    
    this.eventService.create(this.event).subscribe((result) => {      
      this.router.navigate(['/events']); 
    });
  }
}
