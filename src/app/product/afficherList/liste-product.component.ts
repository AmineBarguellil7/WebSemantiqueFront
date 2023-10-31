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
  price: number | null = null;
  category: string = '';
  products: any = [];
  filteredProducts: any = [];
  categories: any[] = [];

  filterType: string = '';

  filterProductsByPrice() {
    const backendUrl = 'http://localhost:9093/product/filterProductsByPrice';
    const params = new HttpParams().set(
      'price',
      this.price !== null ? this.price.toString() : ''
    );

    this.filterType = 'products';

    this.http.get(backendUrl, { params: params }).subscribe((responseData) => {
      this.filteredProducts = responseData;
      this.router.navigate(['/afficher-liste/search'], {
        queryParams: {
          searchData: JSON.stringify(this.filteredProducts),
          filterType: this.filterType,
        },
      });
    });
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
    if (this.category === '') {
      return false;
    }

    const backendUrl = 'http://localhost:9093/product/filterByCategory'; // Adjust the URL to your API endpoint
    const params = new HttpParams().set('category', this.category);
    this.filterType = 'category';

    this.http.get(backendUrl, { params: params }).subscribe((responseData) => {
      this.filteredProducts = responseData;
      this.router.navigate(['/afficher-liste/search'], {
        queryParams: {
          searchData: JSON.stringify(this.filteredProducts),
          filterType: this.filterType,
        },
      });
    });

    return false;
  }

  loadCategories() {
    this.http
      .get('http://localhost:9093/category/getProductCategories')
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
