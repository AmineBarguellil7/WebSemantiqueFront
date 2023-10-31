import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event/event.service';
import { HttpClient,  HttpParams } from '@angular/common/http';
import { Event } from 'src/app/models/Event';
import { Router } from '@angular/router';



@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: any;

  constructor(private http: HttpClient , private router: Router) { }

  ngOnInit(): void {
    this.http.get('http://localhost:9093/event/query').subscribe((responseData) => {
      this.events = responseData;
      console.log(this.events);
    });
  }


}
