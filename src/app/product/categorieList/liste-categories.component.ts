import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-list-categories', // Adjust the selector as needed
  templateUrl: './liste-categories.component.html', // Create the corresponding HTML file
  styleUrls: ['./liste-categories.component.css'], // Add your CSS file
})
export class ListCategoriesComponent implements OnInit {
  constructor(private http: HttpClient) {}

  categories: any[] = [];
  nameCategorie: string = '';
  filterType: string = '';
  filteredCategories: any[] = []; // Define as an empty array

  ngOnInit() {
    this.loadCategories();
  }

  filterCategoryByName() {
    if (this.nameCategorie === '') {
      return false;
    }
    const backendUrl = 'http://localhost:9093/productca/categoryByName';
    const params = new HttpParams().set('nameparam', this.nameCategorie);
    this.filterType = 'nameparam';

    this.http
      .get(backendUrl, { params: params })
      .subscribe((responseData: any[]) => {
        this.filteredCategories = responseData;
        this.categories = responseData;
      });

    return false;
  }
  reloadCategories() {
    this.loadCategories();
  }

  loadCategories() {
    this.http
      .get('http://localhost:9093/productca/getProductCategories')
      .subscribe((data: any[]) => {
        this.categories = data;
      });
  }
}
