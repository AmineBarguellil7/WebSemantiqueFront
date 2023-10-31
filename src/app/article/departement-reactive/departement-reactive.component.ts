import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Departement } from 'src/app/models/Departement';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-departement-reactive',
  templateUrl: './departement-reactive.component.html',
  styleUrls: ['./departement-reactive.component.css']
})
export class DepartementReactiveComponent implements OnInit {

  departement:Departement=new Departement();
  signupform:FormGroup;
  constructor(private departementService:DataService) { }

  ngOnInit(): void {
    this.signupform=new FormGroup({
      'nomDepart':new FormControl(null,Validators.required),
      'surface':new FormControl('0',Validators.required),
      'emplacement':new FormControl('AlManar',Validators.required),
      'prix':new FormControl('0',Validators.required)
    })
  }

  OnSubmit() {
    this.departement.nomDepart=this.signupform.value.nomDepart;
    this.departement.surface=this.signupform.value.surface;
    this.departement.emplacement=this.signupform.value.emplacement;
    this.departement.prix=this.signupform.value.prix;
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Ajout avec succés',
      showConfirmButton: false,
      timer: 1000
    })
    this.departementService.addDepartement(this.departement).subscribe();
    this.signupform.reset();
  }
}



