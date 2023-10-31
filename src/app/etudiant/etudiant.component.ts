import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { Etudiant } from '../models/Etudiant';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  
  list : Etudiant[]=[];
  etudiant : Etudiant  = new Etudiant();
  data:any;
  res:any;
  constructor(private router:Router, private dataService:DataService, private Route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  addEtudiant(f:any){
    console.log(this.etudiant);
    
    this.dataService.addEtudiant(this.etudiant).subscribe(res => {
      this.data = res});
  }
}
