import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from '../../models/equipe';
import { DataService } from '../../service/data.service';
import Swal from "sweetalert2";
@Component({
  selector: 'app-edit-equipe',
  templateUrl: './edit-equipe.component.html',
  styleUrls: ['./edit-equipe.component.css']
})
export class EditEquipeComponent implements OnInit {
  form:FormGroup;
  submitted = false;
  data:any;
  class="form-control"
  equipe = new Equipe();
  equipes:any;
  idT:any;
  toastInstance: any;
  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router:Router,private route:ActivatedRoute) { 
  }
  
  
  ngOnInit(): void {
    this.idT = this.route.snapshot.params['idT'];
      
      
        this.getEquipe();
        
  }
  get myControls(){
    return this.form.controls;
  }
  update(){ 
    
      this.dataService.updateEquipe(this.equipe).subscribe({
        next:(data:any)=>{
          
          Swal.fire({
            title: 'Votre Equipe Est à Jour',
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
          this.data =data ;
        },
        error:(err:any)=>{
          this.toastInstance.fire({
            icon: 'error',
            title: "Equipe non modifiée"
        });      },
       
      })
      this.router.navigate(['refresh'], {relativeTo:this.route});
    }
getEquipe(){
  this.dataService.getEquipeById(this.idT).subscribe(res => {
    console.log(res);
    this.data = res ;
    this.equipe = this.data;
  }
    );
}

  }

