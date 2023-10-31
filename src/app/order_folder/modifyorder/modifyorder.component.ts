import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { Order } from '../../models/order';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-modifyorder',
  templateUrl: './modifyorder.component.html',
})
export class ModifyOrderComponent implements OnInit {
  order: Order;
  form: FormGroup;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.order = new Order();
  }

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');

    if (orderId) {
      this.dataService.getOrderById(orderId).subscribe(
        (order: Order) => {
          this.order = order;
          this.initializeForm();
        },
        (error) => {
          console.error('Error fetching order by ID', error);
        }
      );
    } else {
      console.error('Order ID not provided in route parameters');
    }
  }

  initializeForm() {
    this.form = new FormGroup({
      orderDate: new FormControl(this.order.orderDate, [Validators.required]),
      address: new FormControl(this.order.address, [Validators.required]),
      promocode: new FormControl(this.order.promocode),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.order = { ...this.order, ...this.form.value };
      this.dataService.modifyOrder(this.order).subscribe(
        () => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Order modified successfully',
            showConfirmButton: false,
            timer: 1000,
          });
        },
        (error) => {
          console.error('Error modifying order', error);
        }
      );
    }
  }
}