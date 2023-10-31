import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-affiche-universite',
  templateUrl: './affiche-universite.component.html',
  styleUrls: ['./affiche-universite.component.css']
})
export class AfficheUniversiteComponent implements OnInit {
  universites:any;
  p:any;
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {

    this.dataservice.retriveAllUniversite().subscribe(res => {
      this.universites=res;
    }
      );
  }

OneuniversiteDeleted() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'universite.supprimé',
      showConfirmButton: false,
      timer: 1500
    })
  }
  

}
