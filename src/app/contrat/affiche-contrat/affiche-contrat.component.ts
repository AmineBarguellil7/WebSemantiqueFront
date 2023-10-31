import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-affiche-contrat',
  templateUrl: './affiche-contrat.component.html',
  styleUrls: ['./affiche-contrat.component.css']
})
export class AfficheContratComponent implements OnInit {

  contrats:any;
  p:any;
  constructor( private contratService:DataService) { }

  ngOnInit(): void {
    this.contratService.getAllContrats().subscribe(res => {
      this.contrats=res;
    }
      );
  }

  OnecontratDeleted() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Contrat supprimé',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
