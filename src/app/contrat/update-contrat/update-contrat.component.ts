import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/models/contrat';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-contrat',
  templateUrl: './update-contrat.component.html',
  styleUrls: ['./update-contrat.component.css']
})
export class UpdateContratComponent implements OnInit {
listspecialite:any=["IA","CLOUD","RESEAU","SECURITE"]
data: Object;
  contrat:Contrat=new Contrat();

 id:any;
  idC: any;
 
  constructor( private contratService:DataService, private route:ActivatedRoute) { }
  
 

  ngOnInit(): void {
    this.getContrat();
  }
  updateContrat(){
    this.contratService.UpdateContrat(this.contrat).subscribe(res =>  {this.data=res;
      console.log(this.data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Mis à avec succés',
        showConfirmButton: false,
        timer: 1000
      })
      });
      

  }
  getContrat(){
    this.idC=this.route.snapshot.params['id'];
    this.contratService.getContratById(this.idC).subscribe(res => {
      console.log(res);
      this.data = res ;
      this.contrat = this.data;
    }
      );
  }
}

