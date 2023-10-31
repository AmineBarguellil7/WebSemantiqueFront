import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, MaxLengthValidator } from '@angular/forms';

import { EventEmitter } from 'stream';
import Swal from 'sweetalert2';
import { Universite } from '../../../models/Universite';
import { DataService } from '../../../service/data.service';


@Component({
  selector: 'app-universite',
  templateUrl: './universite.component.html',
  styleUrls: ['./universite.component.css']
})
export class UniversiteComponent implements OnInit {
  universite = new Universite();
  data: Object;
  form:FormGroup;
  constructor (private dataService:DataService){}
  ngOnInit(): void {
    this.form = new FormGroup({
      nomUniv:new FormControl ('', [Validators.required,Validators.pattern("[a-zA-Z]*"),Validators.minLength(3)]),
      nobre_departement: new FormControl ('', [Validators.required,Validators.min(0)]),
      email:new FormControl ('', [Validators.required,Validators.email]),
      Numero:new FormControl ('', [Validators.required,Validators.minLength(8),Validators.maxLength(8)])});
    
  }
  submit(f: NgForm){
    this.dataService.adduniversite(this.universite).subscribe(res => {this.data=res;console.log(this.data);
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Ajout avec succés',
      showConfirmButton: false,
      timer: 1000
      
    })
  }
   
}