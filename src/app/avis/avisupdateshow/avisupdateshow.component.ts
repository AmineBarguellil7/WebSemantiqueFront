import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import {  FormGroup} from '@angular/forms'
import { Avis } from 'src/app/models/Avis';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-avisupdateshow',
  templateUrl: './avisupdateshow.component.html',
  styleUrls: ['./avisupdateshow.component.css']
})
export class AvisupdateshowComponent implements OnInit {
form: FormGroup;
  submitted = false;
  data: any;
  class = "form-control";
  avis = new Avis(); // Update variable names and types
  avisList: any; // Update variable names
  idAvis: any; // Update variable names
  toastInstance: any;
  constructor(private avisService:DataService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idAvis = this.route.snapshot.params['idT'];
    this.getAvis();
  }
  get myControls() {
    return this.form.controls;
  }
  update() {
    this.avisService.UpdateAvis(this.avis).subscribe({
      next: (data: any) => {
        Swal.fire({
          title: 'Votre Avis Est à Jour',
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
        this.data = data;
      },
      error: (err: any) => {
        this.toastInstance.fire({
          icon: 'error',
          title: "Avis non modifié"
        });
      },
    })
    this.router.navigate(['refresh'], { relativeTo: this.route });
  }

  getAvis() {
    this.avisService.getAvisById(this.idAvis).subscribe(res => { // Update method name and parameter
      console.log(res);
      this.data = res;
      this.avis = this.data;
    });
  }}