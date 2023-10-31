import { Component, OnInit, ViewChild } from '@angular/core';
import { Avis } from '../models/Avis';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  @ViewChild("f") addForm:NgForm;
  avis=new Avis();
  constructor( private Route:ActivatedRoute, private avisService:DataService ,private router:Router) {
  }
  ngOnInit(): void {
    console.log(this.addForm);
  }

  afficherListeAvis() {
    this.router.navigate(['/listeAvis']);
  }
  }


