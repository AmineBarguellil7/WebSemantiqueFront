import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from '../models/Etudiant';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {

  etudiant:any
  
  constructor(private router:Router, private dataService:DataService, private Route:ActivatedRoute) { }

  ngOnInit(): void {
    
      console.log(this.etudiant);
      
      this.dataService.GetAllEtudiants().subscribe(res => {
        this.etudiant = res});
      

  }
  delete(e:Etudiant){
    this.dataService.deleteEtudiant(e).subscribe()
  }
  

}
