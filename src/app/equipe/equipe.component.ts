import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from '../models/equipe';
import { DataService } from '../service/data.service';
import Swal from "sweetalert2";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
 equipe = new Equipe();
 data:any;
 res:any;
 class="form-control"
  toastInstance: any;
  form:FormGroup;

  submitted = false ;
  equipes:any;
  constructor(private router:Router, private dataService:DataService, private Route:ActivatedRoute, private formBuilder: FormBuilder) { 
    this.toastInstance = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
  });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      nomEquipe:new FormControl ('', [Validators.required,Validators.pattern("[a-zA-Z]*"),Validators.minLength(3)]),
      niveau:new FormControl ('', Validators.required),
      salle:new FormControl ('', Validators.required),
      dateCreation:new FormControl ('', Validators.required)});
  this.getEquipes;}
    
    get myControls(){
      
        return this.form.controls;
  }

  getEquipes(){
    this.dataService.getEquipes().subscribe(res => {
      this.equipes=res;
    }
      );
  }
  addEquipe(){
    
    this.submitted = true ;
    if(this.form.invalid){
      return;
    }
      this.dataService.addEquipe(this.form.value).subscribe({
        next:(res:any)=>{
          
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Ajout avec succés',
            showConfirmButton: false,
            timer: 1000
          })
          this.data =res ;
        },
        error:(err:any)=>{
          this.toastInstance.fire({
            icon: 'error',
            title: "Equipe non ajoutée"
        });      },
       
      }) 
      this.submitted = false ;
    }
    
  }


