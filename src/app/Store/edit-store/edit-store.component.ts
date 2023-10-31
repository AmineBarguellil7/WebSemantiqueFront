import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '../../models/store'; // Import the Magasin model
import { DataService } from '../../service/data.service';
import Swal from "sweetalert2";
@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css']
})
export class EditStoreComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  data: any;
  class = "form-control";
  magasin = new Store(); // Update variable names and types
  magasins: any; // Update variable names
  idMagasin: any; // Update variable names
  toastInstance: any;
  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idMagasin = this.route.snapshot.params['idT']; // Update the parameter name

    this.getMagasin();
  }
  get myControls() {
    return this.form.controls;
  }

  update() {
    this.dataService.updateStore(this.magasin).subscribe({
      next: (data: any) => {
        Swal.fire({
          title: 'Votre Magasin Est à Jour',
          width: 600,
          padding: '3em',
          color: '#716add',
          background: '#fffff',
          backdrop: `
            rgba(0,0,123,0.4)
            url("assets/img/cat-space.gif")
            left top
            no-repeat
          `
        });
        this.data = data;
      },
      error: (err: any) => {
        this.toastInstance.fire({
          icon: 'error',
          title: "Magasin non modifié"
        });
      },
    })
    this.router.navigate(['refresh'], { relativeTo: this.route });
  }

  getMagasin() {
    this.dataService.getStoreById(this.idMagasin).subscribe(res => { // Update method name and parameter
      console.log(res);
      this.data = res;
      this.magasin = this.data;
    });
  }

}
