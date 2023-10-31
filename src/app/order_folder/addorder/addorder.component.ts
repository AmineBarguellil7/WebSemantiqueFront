import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../service/data.service'
import { Order } from '../../models/order'; // Use the Order model
import Swal from 'sweetalert2';
import {  NgForm, MaxLengthValidator } from '@angular/forms';
@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  
})
export class AddOrderComponent implements OnInit {
  order = new Order(); // Use the Order model
  data: any;
  form: FormGroup;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      orderDate: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      promocode: new FormControl('')
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.order = this.form.value;
      this.dataService.addOrder(this.order).subscribe(
        (response) => {
          this.data = response;
          console.log(this.data);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Order added successfully',
            showConfirmButton: false,
            timer: 1000
          });
        },
        (error) => {
          console.error('Error adding order', error);
        }
      );
    }
  }
}