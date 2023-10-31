import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ControlContainer } from '@angular/forms';
import { Contrat } from 'src/app/models/contrat';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-addcontrat',
  templateUrl: './addcontrat.component.html',

  styleUrls: ['./addcontrat.component.css']
})
export class   AddcontratComponent implements OnInit {
  listespecialite: any = ['IA', 'RESEAU', 'CLOUD', 'SECURITE'];
  contrat = new Contrat();
  
  contratForm:FormGroup;
  data: any;
  contrats: any;
  toastInstance: any;

  

  constructor( private contratService:DataService) { 
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
  
  ngOnInit():void {
    this.contratForm = new FormGroup({
      dateDebutContrat: new FormControl('',[Validators.required]), 
      dateFinContrat: new FormControl ('',[Validators.required]), 
    archive: new FormControl('',[Validators.required]),
    specialite:new FormControl ('',[Validators.required]),
    
  });
 this.getContrats();
  }
  get myControls() {
    return this.contratForm.controls;
  }

    
  public submit(): void {
    if(this.contratForm.invalid){
      return;
    }
    this.contratService.addContrat(this.contratForm.value).subscribe(res => {this.data=res;
    console.log(this.data);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Ajout avec succés',
      showConfirmButton: false,
      timer: 1000
      
    })
    
        error:(err:any)=>{
          this.toastInstance.fire({
            icon: 'error',
            title: "Equipe non ajoutée"
        });      }
    });
  }
  getContrats() {
    this.contratService.getAllContrats().subscribe(res => {
      this.contrats=res;
    });
  }

  
  }


