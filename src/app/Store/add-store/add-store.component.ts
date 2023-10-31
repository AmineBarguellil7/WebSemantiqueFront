import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'src/app/models/store';
import { DataService } from 'src/app/service/data.service'; 
import Swal from "sweetalert2";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {
  store = new Store();
  data:any;
  res:any;
  class="form-control"
   toastInstance: any;
   form:FormGroup;
   stores:any;
   submitted = false ;

  constructor(private router:Router, private dataService:DataService, private Route:ActivatedRoute, private formBuilder: FormBuilder) { this.toastInstance = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});}

ngOnInit(): void {
  this.form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]*"), Validators.minLength(3)]),
    description: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    productCategory: new FormControl('', Validators.required),
    // Add more controls as needed for the "Store" entity
  });

  this.getStores();
}
get myControls(){
      
  return this.form.controls;
}

getStores() {
  this.dataService.getStores().subscribe(res => {
    this.stores = res;
  });
}
addStore() {
  this.submitted = true;
  if (this.form.invalid) {
    return;
  }
  
  this.dataService.addStore(this.form.value).subscribe({
    next: (res: any) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Added successfully',
        showConfirmButton: false,
        timer: 1000
      });
      this.data = res;
    },
    error: (err: any) => {
      this.toastInstance.fire({
        icon: 'error',
        title: 'Store not added'
      });
    }
  });

  this.submitted = false;
}


}
