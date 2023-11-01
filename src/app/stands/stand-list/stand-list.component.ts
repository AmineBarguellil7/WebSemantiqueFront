import { Component, OnInit } from '@angular/core';
import { HttpClient,  HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-stand-list',
  templateUrl: './stand-list.component.html',
  styleUrls: ['./stand-list.component.css']
})
export class StandListComponent implements OnInit {

  constructor(private http: HttpClient , private router: Router) { }

  stands:any;
  status:string="";
  filterType: string = '';
  SearchData:any;

  ngOnInit(): void {
    this.http.get('http://localhost:9093/stand/query').subscribe((responseData) => {
      this.stands = responseData;
      console.log(this.stands);
    });
  }


  searchByStatus() {
    if (this.status === "") {
      return false;
    }
  
    const backendUrl = 'http://localhost:9093/stand/standByStatus';
    const params = new HttpParams().set('SearchedStatus', this.status);
    this.filterType = 'status';
  
    this.http.get(backendUrl, { params: params }).subscribe((responseData) => {
      this.SearchData = responseData;
      
      this.router.navigate(['/stands/search'], {
        queryParams: {
          searchData: JSON.stringify(this.SearchData),
          filterType: this.filterType
        }
      });
    });
  
    return false;
  }

}
