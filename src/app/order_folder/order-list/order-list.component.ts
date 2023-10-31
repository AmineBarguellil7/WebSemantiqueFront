import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Order } from '../../models/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getOrders().subscribe(
      (response) => {
        this.orders = response;
      },
      (error) => {
        console.error('Error fetching orders', error);
      }
    );
  }

  deleteOrder(order: Order) {
    if (confirm('Are you sure you want to delete this order?')) {
      this.dataService.deleteOrder(order).subscribe(
        () => {
          // Remove the order from the local list
          const index = this.orders.indexOf(order);
          if (index !== -1) {
            this.orders.splice(index, 1);
          }
        },
        (error) => {
          console.error('Error deleting order', error);
        }
      );
    }
  }
}
