import { Component, OnInit } from '@angular/core';
import { HttpClient,  HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afficher-liste',
  templateUrl: './afficher-liste.component.html',
  styleUrls: ['./afficher-liste.component.css']
})
export class AfficherListeComponent implements OnInit {
  constructor(private http: HttpClient , private router: Router) {}

  titre:string="";
  Id:string="";

  data: any; 

  SearchData:any;

  categories: any[] = [];


  filteredArticles: any;
  selectedDateFilter: string = 'all';

  filterType: string = '';


  filterData() {
    const backendUrl = 'http://localhost:9093/article/articlesByDatePublication'; 
    const params = new HttpParams().set('filter', this.selectedDateFilter);

    this.filterType = 'datePublication';
  
    this.http.get(backendUrl, { params: params }).subscribe((responseData) => {
      this.filteredArticles = responseData;
      console.log(this.filteredArticles);
  
      this.router.navigate(['/afficher-liste/search'], {
        queryParams: {
          searchData: JSON.stringify(this.filteredArticles),
        filterType: this.filterType
        }
      });
    });
  }
  




  TestStatus() {
    if (this.titre === "") {
      return false;
    }
  
    const backendUrl = 'http://localhost:9093/article/articlesByTitre';
    const params = new HttpParams().set('titre', this.titre);
    this.filterType = 'titre';
  
    this.http.get(backendUrl, { params: params }).subscribe((responseData) => {
      this.SearchData = responseData;
      
      this.router.navigate(['/afficher-liste/search'], {
        queryParams: {
          searchData: JSON.stringify(this.SearchData),
          filterType: this.filterType
        }
      });
    });
  
    return false;
  }


  searchByCategory() {
    const selectedCategory = (document.getElementById('categoryDropdown') as HTMLSelectElement).value; 
    if (!selectedCategory) {
      return false; 
    }
  
    
  
    const backendUrl = 'http://localhost:9093/article/articlesByCategory'; 
    const params = new HttpParams().set('category', selectedCategory);
    this.filterType = 'categorie';
  
    this.http.get(backendUrl, { params: params }).subscribe((responseData) => {
      this.SearchData = responseData;
      console.log(this.SearchData);
  
      this.router.navigate(['/afficher-liste/search'], {
        queryParams: {
          searchData: JSON.stringify(this.SearchData),
          filterType: this.filterType
        }
      });
    });
  
    return false;
  }
  
  loadCategories() {
    this.http.get('http://localhost:9093/categorieArticle/query').subscribe((data: any) => {
      this.categories = data;
      console.log(this.categories);
    });
  }

  ngOnInit() {  
      this.http.get('http://localhost:9093/article/query').subscribe((responseData) => {
        this.data = responseData;
        console.log(this.data);
      });
      this.loadCategories();
  }

}
