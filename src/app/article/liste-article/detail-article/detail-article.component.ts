import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

  
  SearchData:any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.SearchData = JSON.parse(params['searchData']); 
    });
  }
}
