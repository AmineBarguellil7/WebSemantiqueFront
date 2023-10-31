import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from '../models/Etudiant';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {
etudiant:any
idE:any;  
  constructor(private dataService:DataService,private ac:ActivatedRoute,private route:Router
    ) { }

  GetEtudiantById(id:number) {
    this.etudiant = this.dataService.getEtudiant(id).subscribe()
    
        
            console.log("Etudiant :" , this.etudiant)
        }
  ngOnInit(): void {
    
    /*route parametre */
    this.idE = this.ac.snapshot.params['id']

    this.dataService.getEtudiant(this.idE).subscribe((data=>
      this.etudiant=data )) ;
    
    console.log("hhhhhhhhhh" , this.idE) ; 
   // this.GetEtudiantById(this.idE);
       console.log("etuddddd",this.etudiant) ;  
       
  }
  updateEtudiant(){
    this.dataService.updateEtudiant(this.etudiant).subscribe();
this.route.navigate(['/etudiants'])
  }

}
