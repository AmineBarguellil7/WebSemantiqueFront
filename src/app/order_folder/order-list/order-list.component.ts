import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { HttpClient,  HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  data: any;
  searchId: number;
  initialCoupons: string[] = [];
searchCodePromo: string;
searchDeliveryAddress: string;
imports: [FormsModule];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadOrders();
    this.loadInitialCoupons();
  }

  loadOrders() {
    this.http.get('http://localhost:9093/commande/queryCommandeParameters').subscribe((responseData) => {
      this.data = responseData;
      console.log(this.data);
    });
  }
  
  loadInitialCoupons() {
    this.http.get('http://localhost:9093/coupon/query').subscribe((coupons: any) => {
      this.initialCoupons = coupons.map((coupon: any) => coupon.codePromo);
      console.log(this.initialCoupons);
    });
  }

  getOrderById(id: number) {
    const backendUrl = `http://localhost:9093/commande/getById/${id}`;
    this.http.get(backendUrl).subscribe((responseData) => {
      this.data = responseData;
      console.log(this.data);
    });
  }

  getOrderByCodePromo(code: string) {
    const backendUrl = `http://localhost:9093/commande/getByCodePromo/${code}`;
    this.http.get(backendUrl).subscribe((responseData) => {
      this.data = responseData;
      console.log(this.data);
    });
  }

  getOrderByDeliveryAddress(address: string) {
    const backendUrl = `http://localhost:9093/commande/getByDeliveryAddress/${address}`;
    this.http.get(backendUrl).subscribe((responseData) => {
      this.data = responseData;
      console.log(this.data);
    });
  }
  
}
