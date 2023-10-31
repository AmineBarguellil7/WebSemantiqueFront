import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Universite } from '../../models/Universite';
import { DataService } from '../../service/data.service';


@Component({
  selector: 'app-update-universite',
  templateUrl: './update-universite.component.html',
  styleUrls: ['./update-universite.component.css']
})
export class UpdateUniversiteComponent implements OnInit {
  form:FormGroup;
  submitted=false;
  data:any;
  class="form-control";
  universite = new Universite();
  universites:any;
  idU:any;
  toastInstance: any;
  constructor( private dataService: DataService,private route:ActivatedRoute) { }

  ngOnInit(): void {
     
       this.getuniversite();
       

  }
  getuniversite(){
    this.idU = this.route.snapshot.params['idUniv'];
    this.dataService.getById(this.idU).subscribe((res) => {
      console.log(res);
      this.data = res ;
      this.universite = this.data;
    });}

  updateUniversite(){
      this.submitted = true ;
        this.dataService.updateUniversite(this.universite).subscribe();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Mis à jour avec succès',
          showConfirmButton: false,
          timer: 1000
        })
      }

}
