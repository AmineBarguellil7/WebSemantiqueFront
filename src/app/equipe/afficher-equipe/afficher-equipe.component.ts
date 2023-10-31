import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-afficher-equipe',
  templateUrl: './afficher-equipe.component.html',
  styleUrls: ['./afficher-equipe.component.css']
})
export class AfficherEquipeComponent implements OnInit {
equipes:any;
p:any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getEquipes().subscribe(res => {
      this.equipes=res;
    }
      );
  }
  OnequipeDeleted() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Equipe supprimé',
      showConfirmButton: false,
      timer: 1500
    })
  }


}
