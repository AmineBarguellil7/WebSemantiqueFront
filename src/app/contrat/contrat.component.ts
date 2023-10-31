import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Contrat } from '../models/contrat';

import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {
  contrat = new Contrat();
  contrats:any;
  specialite:any;
 
  
  



  constructor( private Route:ActivatedRoute, private contratService:DataService ,private router:Router) {
  }
 
  ngOnInit(): void {
    this.getAllContrat();
   }

getAllContrat(){
  this.contratService.getAllContrats().subscribe(res=>{this.contrats=res;});
}
deleteContrat(id:any) {
  this.contratService.deleteContrat(id).subscribe(res => {
  this.getAllContrat();
  });
}
search(){
  if(this.specialite == ""){
    this.ngOnInit();
  }else{
    this.contrats=this.contrats.filter(res =>{
      return res.specialite.toLocaleLowerCase().match(this.specialite.toLocaleLowerCase());
    })
  }
}
refresh(){
  this.contratService.getAllContrats().subscribe(res => {
    this.contrats=res;
  }
    );
}


key : String = 'id';
reverse: boolean = false;
sort(key){
  this.key = key;
  this.reverse = !this.reverse;

}

   
  
 
  

}
