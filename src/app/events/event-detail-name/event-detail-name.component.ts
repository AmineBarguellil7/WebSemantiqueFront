import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-event-detail-name',
  templateUrl: './event-detail-name.component.html',
  styleUrls: ['./event-detail-name.component.css']
})
export class EventDetailNameComponent implements OnInit {

  SearchData:any;
  filterType: string = '';

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.SearchData = JSON.parse(params['searchData']); 
      this.filterType = params['filterType']; 
    });
  }

}
