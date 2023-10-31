import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.css']
})
export class ListUniversiteComponent implements OnInit {
  universite: any;
  nom:string;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getuniversites();
  }
  getuniversites(){
    this.dataService.retriveAllUniversite().subscribe(res => {
      this.universite=res;
    }
      );}
    deleteuniversite(id:any) {
      this.dataService.deleteUniversite(id).subscribe(res => {
      this.getuniversites();
      });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Supprimer avec succès',
        showConfirmButton: false,
        timer: 1000
      });
     
    }

  }
