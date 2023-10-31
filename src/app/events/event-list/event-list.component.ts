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
  name:string="";
  filterType: string = '';
  SearchData:any;
  
  constructor(private http: HttpClient , private router: Router) { }

  ngOnInit(): void {
    this.http.get('http://localhost:9093/event/query').subscribe((responseData) => {
      this.events = responseData;
      console.log(this.events);
    });
  }

  searchByName() {
    if (this.name === "") {
      return false;
    }
  
    const backendUrl = 'http://localhost:9093/event/eventByName';
    const params = new HttpParams().set('name_event', this.name);
    this.filterType = 'nom';
  
    this.http.get(backendUrl, { params: params }).subscribe((responseData) => {
      this.SearchData = responseData;
      
      this.router.navigate(['/events/search'], {
        queryParams: {
          searchData: JSON.stringify(this.SearchData),
          filterType: this.filterType
        }
      });
    });
  
    return false;
  }
}
