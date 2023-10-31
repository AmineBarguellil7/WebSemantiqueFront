import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-product',
  templateUrl: './liste-product.component.html',
  styleUrls: ['./liste-product.component.css'],
})
export class ListeProductComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  name: string = '';
  minPrice: number | null = null;
  category: string = '';
  products: any = [];
  filteredProducts: any = [];
  categories: any[] = [];

  filterType: string = '';
  filterByPrice() {
    if (this.minPrice === null || isNaN(this.minPrice)) {
      return false;
    }
    const backendUrl = 'http://localhost:9093/product/productsByPrice';
    const params = new HttpParams().set('minPrice', this.minPrice.toString());
    this.filterType = 'minPrice';

    this.http.get(backendUrl, { params: params }).subscribe((responseData) => {
      this.filteredProducts = responseData;
      this.products = responseData;
    });

    return false;
  }

  filterByName() {
    if (this.name === '') {
      return false;
    }
    const backendUrl = 'http://localhost:9093/product/productsByName';
    const params = new HttpParams().set('nameparam', this.name);
    this.filterType = 'nameparam';

    this.http.get(backendUrl, { params: params }).subscribe((responseData) => {
      this.filteredProducts = responseData;
      this.products = responseData;
    });

    return false;
  }

  searchByCategory() {
    const selectedCategory = this.category; //
    if (!selectedCategory) {
      return false;
    }
    const backendUrl = 'http://localhost:9093/product/productsByCategory';

    const params = new HttpParams().set('category', selectedCategory);

    this.http.get(backendUrl, { params: params }).subscribe((responseData) => {
      this.filteredProducts = responseData;
      this.products = responseData;
    });

    return false;
  }
  
  reloadProducts() {
    this.http
    .get('http://localhost:9093/product/getProducts')
    .subscribe((responseData) => {
      this.products = responseData;
    });
  }
  loadCategories() {
    this.http
      .get('http://localhost:9093/productca/getProductCategories')
      .subscribe((data: any) => {
        this.categories = data;
      });
  }

  ngOnInit() {
    this.http
      .get('http://localhost:9093/product/getProducts')
      .subscribe((responseData) => {
        this.products = responseData;
      });
    this.loadCategories();
  }
}
