import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-stand-search',
  templateUrl: './stand-search.component.html',
  styleUrls: ['./stand-search.component.css']
})
export class StandSearchComponent implements OnInit {

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
